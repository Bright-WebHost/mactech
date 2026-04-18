'use client'
import { useEffect, useRef, useState } from 'react'

let THREE: any = null
let GLTFLoader: any = null

const loadThreeModules = async () => {
  if (THREE) return { THREE, GLTFLoader }
  THREE = await import('three').then((m) => m.default || m)
  const GLTFLoaderModule = await import('three/examples/jsm/loaders/GLTFLoader.js')
  GLTFLoader = GLTFLoaderModule.GLTFLoader
  return { THREE, GLTFLoader }
}

export default function Model3DViewer() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef     = useRef<any>(null)
  const modelRef     = useRef<any>(null)
  const animationRef = useRef<number | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  // Mouse state – normalised -1…+1 relative to container centre
  const mouseTarget  = useRef({ x: 0, y: 0 })
  const mouseCurrent = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (!containerRef.current || sceneRef.current) return

    let cleanup: (() => void) | null = null

    const initScene = async () => {
      try {
        const { THREE: T, GLTFLoader: G } = await loadThreeModules()

        const scene = new T.Scene()
        scene.background = null
        sceneRef.current = scene

        const container = containerRef.current!
        const width  = container.clientWidth  || 400
        const height = container.clientHeight || 460

        const camera = new T.PerspectiveCamera(45, width / height, 0.1, 1000)
        camera.position.z = 3.5

        const renderer = new T.WebGLRenderer({ antialias: true, alpha: true })
        renderer.setSize(width, height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        renderer.setClearColor(0x000000, 0)
        container.innerHTML = ''
        container.appendChild(renderer.domElement)

        // ── Three-point lighting ──────────────────────────────────────
        const key = new T.DirectionalLight(0xffffff, 2.0)
        key.position.set(4, 6, 5)
        scene.add(key)

        const fill = new T.DirectionalLight(0xffeedd, 0.7)
        fill.position.set(-4, 2, 3)
        scene.add(fill)

        const rim = new T.DirectionalLight(0xffffff, 0.5)
        rim.position.set(0, -3, -5)
        scene.add(rim)

        scene.add(new T.AmbientLight(0xffffff, 0.6))

        // ── Mouse tracking ────────────────────────────────────────────
        const onMouseMove = (e: PointerEvent) => {
          const rect = container.getBoundingClientRect()
          mouseTarget.current.x = (e.clientX - rect.left - rect.width  / 2) / (rect.width  / 2)
          mouseTarget.current.y = (e.clientY - rect.top  - rect.height / 2) / (rect.height / 2)
        }
        const onMouseLeave = () => {
          mouseTarget.current.x = 0
          mouseTarget.current.y = 0
        }
        container.addEventListener('pointermove', onMouseMove)
        container.addEventListener('pointerleave', onMouseLeave)

        // ── Load model ────────────────────────────────────────────────
        const loader = new G()
        loader.load(
          '/model/drill.glb',
          (gltf: any) => {
            const model = gltf.scene
            modelRef.current = model
            scene.add(model)

            // Centre pivot and scale to fill ~70 % of viewport height
            const box    = new T.Box3().setFromObject(model)
            const center = box.getCenter(new T.Vector3())
            const size   = box.getSize(new T.Vector3())
            const maxDim = Math.max(size.x, size.y, size.z)

            const fovRad    = (45 * Math.PI) / 180
            const fitHeight = 2 * camera.position.z * Math.tan(fovRad / 2)
            const scale     = (fitHeight * 0.70) / maxDim
            model.scale.setScalar(scale)

            // Snap to dead-centre — store centred base Y for float offset
            const baseY = -center.y * scale
            model.position.set(-center.x * scale, baseY, -center.z * scale)

            setIsLoaded(true)

            // ── Animation loop ────────────────────────────────────────
            let clock = 0

            const animate = () => {
              animationRef.current = requestAnimationFrame(animate)
              clock += 0.016           // approx frame delta in seconds

              const m = modelRef.current
              if (!m) return

              // Lerp mouse toward target — 6 % per frame feels silky
              mouseCurrent.current.x += (mouseTarget.current.x - mouseCurrent.current.x) * 0.06
              mouseCurrent.current.y += (mouseTarget.current.y - mouseCurrent.current.y) * 0.06

              // Idle float: gentle sine on Y position (±0.05 units, ~4 s period)
              const floatY  = Math.sin(clock * 1.55) * 0.05

              // Idle rock: very slow lazy Y-axis sway (±5 °, ~8 s period)
              const idleRY  = Math.sin(clock * 0.75) * 0.08
              // Subtle roll: ±2 ° tied to a different frequency
              const idleRX  = Math.sin(clock * 1.10) * 0.03

              // Mouse-reactive tilt: max ±12 ° on Y, ±8 ° on X
              const mouseRY =  mouseCurrent.current.x * 0.22
              const mouseRX = -mouseCurrent.current.y * 0.15

              // Combine idle + mouse layers
              m.rotation.x  = idleRX + mouseRX
              m.rotation.y  = idleRY + mouseRY
              m.position.y  = baseY  + floatY

              renderer.render(scene, camera)
            }

            animate()
          },
          undefined,
          (err: any) => console.error('Model load error:', err)
        )

        // ── Resize ────────────────────────────────────────────────────
        const onResize = () => {
          if (!container) return
          const w = container.clientWidth  || 400
          const h = container.clientHeight || 460
          camera.aspect = w / h
          camera.updateProjectionMatrix()
          renderer.setSize(w, h)
        }
        window.addEventListener('resize', onResize)

        cleanup = () => {
          container.removeEventListener('pointermove', onMouseMove)
          container.removeEventListener('pointerleave', onMouseLeave)
          window.removeEventListener('resize', onResize)
          if (animationRef.current) cancelAnimationFrame(animationRef.current)
          animationRef.current = null
          renderer.dispose()
          sceneRef.current = null
        }
      } catch (err) {
        console.error('3D viewer init error:', err)
      }
    }

    initScene()
    return () => { if (cleanup) cleanup() }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '100%',
        minHeight: 460,
        borderRadius: 4,
        overflow: 'hidden',
        cursor: isLoaded ? 'default' : 'wait',
        background: 'radial-gradient(ellipse at 50% 55%, #eef2f7 0%, #ffffff 72%)',
      }}
    />
  )
}