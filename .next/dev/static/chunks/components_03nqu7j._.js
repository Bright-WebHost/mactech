(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/HeroSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
// ─── Premium Brand Tokens ──────────────────────────────────────────────────────
const RED = '#CC1020';
const ACCENT_ORANGE = '#FF6B35';
const CREAM = '#F5F4F0';
const BLACK = '#0F0F0F';
const WHITE = '#FFFFFF';
const BG = '#0A0A0A';
const SLIDES = [
    {
        src: '/images/hero/tools.png',
        label: 'Fasteners',
        sub: 'High-Tensile Precision Solutions',
        tagline: 'Precision Built. Industry Trusted.',
        feature: 'Premium grade fasteners with industry-leading standards',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"]
    },
    {
        src: '/images/hero/tools2.png',
        label: 'Welding',
        sub: 'Professional Consumables & Accessories',
        tagline: 'Fuse Metal. Forge Progress.',
        feature: 'ISO certified welding solutions for maximum strength',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"]
    },
    {
        src: '/images/hero/tools3.png',
        label: 'Safety',
        sub: 'International Compliance Standards',
        tagline: 'Every Worker. Every Site. Protected.',
        feature: 'Complete protection coverage meeting global standards',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"]
    },
    {
        src: '/images/hero/tools4.png',
        label: 'Lifting',
        sub: 'WLL Certified Heavy-Duty Solutions',
        tagline: 'Lift Heavy. Move Safely.',
        feature: 'Certified load capacity with safe operations assured',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"]
    },
    {
        src: '/images/hero/tools5.png',
        label: 'Power Tools',
        sub: 'Industrial Grade Performance',
        tagline: 'Power That Performs.',
        feature: 'Professional tool selection built for continuous use',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"]
    }
];
const pad = (n)=>String(n).padStart(2, '0');
const N = SLIDES.length;
function HeroSection() {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stickyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [idx, setIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const indexRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const imageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headlineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const subheadlineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rightLabelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const macTechNoiseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const slide = SLIDES[idx];
    const IconComponent = slide.icon;
    // ─── GSAP Scroll Animation ──────────────────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSection.useEffect": ()=>{
            const container = containerRef.current;
            if (!container) return;
            const scrollDistance = (N - 1) * window.innerHeight;
            const tween = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(container, {
                ease: 'none',
                scrollTrigger: {
                    trigger: container,
                    start: 'top top',
                    end: `+=${scrollDistance}`,
                    pin: true,
                    scrub: 1.2,
                    invalidateOnRefresh: true,
                    onUpdate: {
                        "HeroSection.useEffect.tween": (self)=>{
                            const progress = self.progress;
                            const newIdx = Math.min(Math.floor(progress * N), N - 1);
                            if (newIdx !== indexRef.current) {
                                indexRef.current = newIdx;
                                setIdx(newIdx);
                            }
                        }
                    }["HeroSection.useEffect.tween"]
                }
            });
            return ({
                "HeroSection.useEffect": ()=>{
                    tween.scrollTrigger?.kill();
                    tween.kill();
                }
            })["HeroSection.useEffect"];
        }
    }["HeroSection.useEffect"], []);
    // ─── Sharp Content Animation on Slide Change ──────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSection.useEffect": ()=>{
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline();
            // MacTech Noise Text - Sharp Scale & Fade
            tl.fromTo(macTechNoiseRef.current, {
                opacity: 0,
                scale: 0.9,
                filter: 'blur(5px)'
            }, {
                opacity: 0.15,
                scale: 1,
                filter: 'blur(0px)',
                duration: 0.55,
                ease: 'power2.out'
            }, 0);
            // Headline - Sharp entrance with slight pop
            tl.fromTo(headlineRef.current, {
                opacity: 0,
                y: 40,
                scale: 0.95
            }, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                ease: 'power3.out'
            }, 0.1);
            // Subheadline - Fast fade in
            tl.fromTo(subheadlineRef.current, {
                opacity: 0,
                y: 20
            }, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: 'power2.out'
            }, 0.2);
            // Product Image - Zoom and fade
            tl.fromTo(imageRef.current, {
                opacity: 0,
                scale: 0.75,
                y: 30
            }, {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.7,
                ease: 'back.out(1.2)'
            }, 0.15);
            // Right panel - Slide in from right
            tl.fromTo(rightLabelRef.current, {
                opacity: 0,
                x: 40
            }, {
                opacity: 1,
                x: 0,
                duration: 0.55,
                ease: 'power3.out'
            }, 0.2);
            return ({
                "HeroSection.useEffect": ()=>{
                    tl.kill();
                }
            })["HeroSection.useEffect"];
        }
    }["HeroSection.useEffect"], [
        idx
    ]);
    // ─── Sharp Breathing Animation ──────────────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSection.useEffect": ()=>{
            const breathingTl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                repeat: -1
            });
            breathingTl.to(imageRef.current, {
                scale: 1.12,
                y: -16,
                duration: 4,
                ease: 'power1.inOut'
            }, 0);
            breathingTl.to(imageRef.current, {
                scale: 1,
                y: 0,
                duration: 4,
                ease: 'power1.inOut'
            }, 4);
            return ({
                "HeroSection.useEffect": ()=>{
                    breathingTl.kill();
                }
            })["HeroSection.useEffect"];
        }
    }["HeroSection.useEffect"], []);
    // ─── MacTech Noise Pulsing Animation ─────────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSection.useEffect": ()=>{
            const noiseTl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                repeat: -1
            });
            noiseTl.to(macTechNoiseRef.current, {
                opacity: 0.18,
                duration: 2.5,
                ease: 'sine.inOut',
                repeat: 1,
                yoyo: true
            }, 0);
            noiseTl.to(macTechNoiseRef.current, {
                rotation: 0.8,
                duration: 2.5,
                ease: 'sine.inOut',
                repeat: 1,
                yoyo: true
            }, 0);
            return ({
                "HeroSection.useEffect": ()=>{
                    noiseTl.kill();
                }
            })["HeroSection.useEffect"];
        }
    }["HeroSection.useEffect"], []);
    const goToSlide = (targetIdx)=>{
        const progress = targetIdx / (N - 1);
        const scrollDistance = (N - 1) * window.innerHeight;
        const scrollTarget = progress * scrollDistance;
        window.scrollTo({
            top: scrollTarget,
            behavior: 'smooth'
        });
    };
    const abs = (extra)=>({
            position: 'absolute',
            ...extra
        });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        style: {
            height: `${N * 100}vh`,
            position: 'relative'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            ref: stickyRef,
            style: {
                position: 'sticky',
                top: 0,
                width: '100%',
                height: '100vh',
                minHeight: '100vh',
                maxHeight: '100vh',
                overflow: 'hidden',
                background: BG,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingLeft: 0,
                paddingRight: 0,
                margin: 0
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'absolute',
                        inset: 0,
                        zIndex: 0,
                        overflow: 'hidden'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: 'absolute',
                                right: '-10%',
                                top: '-20%',
                                width: 600,
                                height: 600,
                                background: `radial-gradient(circle, ${RED}12 0%, transparent 70%)`,
                                borderRadius: '50%',
                                filter: 'blur(60px)',
                                zIndex: 1
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/HeroSection.tsx",
                            lineNumber: 322,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: 'absolute',
                                left: '-5%',
                                bottom: '-15%',
                                width: 500,
                                height: 500,
                                background: `radial-gradient(circle, ${ACCENT_ORANGE}08 0%, transparent 70%)`,
                                borderRadius: '50%',
                                filter: 'blur(80px)',
                                zIndex: 1
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/HeroSection.tsx",
                            lineNumber: 336,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/HeroSection.tsx",
                    lineNumber: 320,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: macTechNoiseRef,
                    style: {
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 5,
                        pointerEvents: 'none',
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 'clamp(120px, 22vw, 340px)',
                            fontWeight: 950,
                            color: RED,
                            opacity: 0.1,
                            letterSpacing: '-8px',
                            lineHeight: 1,
                            whiteSpace: 'nowrap',
                            userSelect: 'none',
                            textShadow: `0 0 60px ${RED}30`,
                            mixBlendMode: 'screen'
                        },
                        children: "MACTECH"
                    }, void 0, false, {
                        fileName: "[project]/components/HeroSection.tsx",
                        lineNumber: 368,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/HeroSection.tsx",
                    lineNumber: 352,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 3,
                        background: `linear-gradient(90deg, ${RED} 0%, ${ACCENT_ORANGE} 100%)`,
                        zIndex: 50
                    }
                }, void 0, false, {
                    fileName: "[project]/components/HeroSection.tsx",
                    lineNumber: 387,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'absolute',
                        left: 'clamp(24px, 6vw, 92px)',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 40,
                        maxWidth: 'clamp(300px, 32vw, 420px)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontSize: 'clamp(11px, 0.95vw, 12px)',
                                color: 'rgba(255,255,255,0.45)',
                                lineHeight: 1.8,
                                margin: '0 0 28px'
                            },
                            children: "Serving Oil & Gas, Construction, Fabrication & Industrial sectors. ISO 9001:2015 certified with 15+ years of excellence."
                        }, void 0, false, {
                            fileName: "[project]/components/HeroSection.tsx",
                            lineNumber: 401,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: 12,
                                flexWrap: 'wrap'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/products",
                                    style: {
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: 8,
                                        background: `linear-gradient(135deg, ${RED} 0%, ${ACCENT_ORANGE} 100%)`,
                                        color: WHITE,
                                        fontSize: '11px',
                                        fontWeight: 800,
                                        padding: '12px 22px',
                                        borderRadius: 6,
                                        textDecoration: 'none',
                                        letterSpacing: '0.6px',
                                        border: `1px solid ${RED}80`,
                                        boxShadow: `0 12px 32px ${RED}25`,
                                        transition: 'all 0.25s cubic-bezier(0.22, 1, 0.36, 1)'
                                    },
                                    onMouseEnter: (e)=>{
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(e.currentTarget, {
                                            y: -5,
                                            boxShadow: `0 18px 48px ${RED}40`,
                                            duration: 0.25
                                        });
                                    },
                                    onMouseLeave: (e)=>{
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(e.currentTarget, {
                                            y: 0,
                                            boxShadow: `0 12px 32px ${RED}25`,
                                            duration: 0.25
                                        });
                                    },
                                    children: [
                                        "View Products ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            size: 13,
                                            strokeWidth: 3
                                        }, void 0, false, {
                                            fileName: "[project]/components/HeroSection.tsx",
                                            lineNumber: 442,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/HeroSection.tsx",
                                    lineNumber: 414,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/contact",
                                    style: {
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        background: 'rgba(255,255,255,0.08)',
                                        border: `1.5px solid rgba(255,255,255,0.15)`,
                                        color: WHITE,
                                        fontSize: '11px',
                                        fontWeight: 700,
                                        padding: '12px 20px',
                                        borderRadius: 6,
                                        textDecoration: 'none',
                                        transition: 'all 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
                                        backdropFilter: 'blur(8px)'
                                    },
                                    onMouseEnter: (e)=>{
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(e.currentTarget, {
                                            background: 'rgba(255,255,255,0.12)',
                                            borderColor: `rgba(204, 16, 32, 0.3)`,
                                            duration: 0.25
                                        });
                                    },
                                    onMouseLeave: (e)=>{
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(e.currentTarget, {
                                            background: 'rgba(255,255,255,0.08)',
                                            borderColor: 'rgba(255,255,255,0.15)',
                                            duration: 0.25
                                        });
                                    },
                                    children: "Contact Us"
                                }, void 0, false, {
                                    fileName: "[project]/components/HeroSection.tsx",
                                    lineNumber: 445,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/HeroSection.tsx",
                            lineNumber: 413,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/HeroSection.tsx",
                    lineNumber: 390,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 25,
                        pointerEvents: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: headlineRef,
                            style: {
                                textAlign: 'center',
                                marginBottom: 'clamp(20px, 3vw, 40px)',
                                opacity: 0,
                                pointerEvents: 'none',
                                zIndex: 35
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontSize: 'clamp(22px, 2.8vw, 42px)',
                                    fontWeight: 900,
                                    color: WHITE,
                                    lineHeight: 1.2,
                                    letterSpacing: '-1px',
                                    margin: 0
                                },
                                children: [
                                    "Complete ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: RED
                                        },
                                        children: "Industrial"
                                    }, void 0, false, {
                                        fileName: "[project]/components/HeroSection.tsx",
                                        lineNumber: 512,
                                        columnNumber: 24
                                    }, this),
                                    " Supply"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/HeroSection.tsx",
                                lineNumber: 502,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/HeroSection.tsx",
                            lineNumber: 492,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: subheadlineRef,
                            style: {
                                textAlign: 'center',
                                marginBottom: 'clamp(30px, 4vw, 50px)',
                                opacity: 0,
                                pointerEvents: 'none',
                                zIndex: 35,
                                maxWidth: 'clamp(250px, 90%, 600px)'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: 'clamp(12px, 1.1vw, 15px)',
                                    fontWeight: 600,
                                    color: 'rgba(255,255,255,0.8)',
                                    lineHeight: 1.5,
                                    margin: 0
                                },
                                children: [
                                    "From ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: ACCENT_ORANGE
                                        },
                                        children: "fasteners to safety equipment"
                                    }, void 0, false, {
                                        fileName: "[project]/components/HeroSection.tsx",
                                        lineNumber: 537,
                                        columnNumber: 20
                                    }, this),
                                    ", delivering excellence across industries"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/HeroSection.tsx",
                                lineNumber: 528,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/HeroSection.tsx",
                            lineNumber: 517,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: 'absolute',
                                bottom: -40,
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '70%',
                                height: 50,
                                borderRadius: '50%',
                                background: `${RED}20`,
                                filter: 'blur(30px)',
                                zIndex: 12
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/HeroSection.tsx",
                            lineNumber: 542,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: 'relative',
                                zIndex: 20,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: imageRef,
                                style: {
                                    opacity: 0,
                                    scale: 0.75,
                                    y: 30
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: slide.src,
                                    alt: slide.label,
                                    width: 500,
                                    height: 500,
                                    priority: true,
                                    style: {
                                        objectFit: 'contain',
                                        width: 'clamp(280px, 38vw, 480px)',
                                        height: 'auto',
                                        display: 'block',
                                        userSelect: 'none',
                                        filter: 'drop-shadow(0 40px 60px rgba(0,0,0,0.4)) drop-shadow(0 0 30px rgba(204,16,32,0.2))'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/HeroSection.tsx",
                                    lineNumber: 576,
                                    columnNumber: 15
                                }, this)
                            }, `prod-${idx}`, false, {
                                fileName: "[project]/components/HeroSection.tsx",
                                lineNumber: 567,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/HeroSection.tsx",
                            lineNumber: 558,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/HeroSection.tsx",
                    lineNumber: 477,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'absolute',
                        right: 'clamp(24px, 6vw, 92px)',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 30,
                        maxWidth: 'clamp(280px, 28vw, 400px)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: rightLabelRef,
                            style: {
                                background: 'rgba(255,255,255,0.05)',
                                border: `1.5px solid ${RED}40`,
                                borderRadius: 12,
                                padding: '18px 18px',
                                backdropFilter: 'blur(12px)',
                                marginBottom: 24,
                                opacity: 0
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: 12,
                                    marginBottom: 12
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: 40,
                                            height: 40,
                                            borderRadius: 8,
                                            background: `${RED}20`,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                                            size: 20,
                                            color: RED,
                                            strokeWidth: 2
                                        }, void 0, false, {
                                            fileName: "[project]/components/HeroSection.tsx",
                                            lineNumber: 624,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/HeroSection.tsx",
                                        lineNumber: 620,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '11px',
                                                    fontWeight: 800,
                                                    color: RED,
                                                    letterSpacing: '1.5px',
                                                    textTransform: 'uppercase'
                                                },
                                                children: "Feature"
                                            }, void 0, false, {
                                                fileName: "[project]/components/HeroSection.tsx",
                                                lineNumber: 627,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '13px',
                                                    fontWeight: 700,
                                                    color: WHITE,
                                                    marginTop: 4,
                                                    lineHeight: 1.4
                                                },
                                                children: slide.feature
                                            }, void 0, false, {
                                                fileName: "[project]/components/HeroSection.tsx",
                                                lineNumber: 630,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/HeroSection.tsx",
                                        lineNumber: 626,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/HeroSection.tsx",
                                lineNumber: 619,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/HeroSection.tsx",
                            lineNumber: 607,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: 'clamp(12px, 1.1vw, 14px)',
                                fontWeight: 700,
                                color: 'rgba(255,255,255,0.6)',
                                fontStyle: 'italic',
                                lineHeight: 1.6,
                                marginBottom: 24
                            },
                            children: [
                                "“",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: ACCENT_ORANGE
                                    },
                                    children: slide.tagline
                                }, void 0, false, {
                                    fileName: "[project]/components/HeroSection.tsx",
                                    lineNumber: 648,
                                    columnNumber: 20
                                }, this),
                                "”"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/HeroSection.tsx",
                            lineNumber: 638,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: `linear-gradient(135deg, ${RED}12 0%, ${ACCENT_ORANGE}08 100%)`,
                                border: `1.5px solid ${RED}40`,
                                borderRadius: 10,
                                padding: '14px 16px',
                                textAlign: 'center',
                                backdropFilter: 'blur(8px)',
                                animation: 'float 3.5s ease-in-out infinite'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: '16px',
                                        fontWeight: 900,
                                        color: WHITE,
                                        letterSpacing: '-0.5px'
                                    },
                                    children: "ISO 9001:2015"
                                }, void 0, false, {
                                    fileName: "[project]/components/HeroSection.tsx",
                                    lineNumber: 663,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: '8px',
                                        fontWeight: 700,
                                        color: RED,
                                        letterSpacing: '2px',
                                        marginTop: 4,
                                        textTransform: 'uppercase'
                                    },
                                    children: "Certified Quality"
                                }, void 0, false, {
                                    fileName: "[project]/components/HeroSection.tsx",
                                    lineNumber: 664,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/HeroSection.tsx",
                            lineNumber: 652,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/HeroSection.tsx",
                    lineNumber: 596,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '28%',
                        zIndex: 15,
                        pointerEvents: 'none'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: "0 0 1440 280",
                        xmlns: "http://www.w3.org/2000/svg",
                        preserveAspectRatio: "none",
                        style: {
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '100%',
                            height: '100%'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                    id: "waveGrad",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "0%",
                                    y2: "100%",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "0%",
                                            style: {
                                                stopColor: CREAM,
                                                stopOpacity: 1
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/HeroSection.tsx",
                                            lineNumber: 682,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "100%",
                                            style: {
                                                stopColor: CREAM,
                                                stopOpacity: 0.98
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/HeroSection.tsx",
                                            lineNumber: 683,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/HeroSection.tsx",
                                    lineNumber: 681,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/HeroSection.tsx",
                                lineNumber: 680,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M0,140 Q180,60 360,110 T720,100 T1080,120 Q1260,60 1440,110 L1440,280 L0,280 Z",
                                fill: "url(#waveGrad)"
                            }, void 0, false, {
                                fileName: "[project]/components/HeroSection.tsx",
                                lineNumber: 686,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/HeroSection.tsx",
                        lineNumber: 675,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/HeroSection.tsx",
                    lineNumber: 669,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'absolute',
                        bottom: 30,
                        left: 30,
                        zIndex: 30
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 12,
                            fontWeight: 800,
                            color: BLACK,
                            letterSpacing: '1px'
                        },
                        children: [
                            pad(idx + 1),
                            " / ",
                            pad(N)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/HeroSection.tsx",
                        lineNumber: 702,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/HeroSection.tsx",
                    lineNumber: 694,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 2,
                        background: 'rgba(0,0,0,0.05)',
                        zIndex: 50,
                        overflow: 'hidden'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            height: '100%',
                            background: `linear-gradient(90deg, ${RED}, ${ACCENT_ORANGE})`,
                            width: `${idx / (N - 1) * 100}%`,
                            transition: 'width 0.3s ease-out'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/HeroSection.tsx",
                        lineNumber: 727,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/HeroSection.tsx",
                    lineNumber: 715,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                    children: `
          @keyframes pulse-glow {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 1; }
          }
          
          @keyframes ping {
            75%, 100% { transform: scale(2); opacity: 0; }
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
        `
                }, void 0, false, {
                    fileName: "[project]/components/HeroSection.tsx",
                    lineNumber: 738,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/HeroSection.tsx",
            lineNumber: 299,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/HeroSection.tsx",
        lineNumber: 291,
        columnNumber: 5
    }, this);
}
_s(HeroSection, "hst6q/jzALZmSv+DExgDVTE/snE=");
_c = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home/ProductsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wrench.js [app-client] (ecmascript) <export default as Wrench>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.js [app-client] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$hat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HardHat$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hard-hat.js [app-client] (ecmascript) <export default as HardHat>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$anchor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Anchor$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/anchor.js [app-client] (ecmascript) <export default as Anchor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$construction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Construction$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/construction.js [app-client] (ecmascript) <export default as Construction>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
// ─── helpers ─────────────────────────────────────────────────────────────────
function renderIcon(type, size = 14) {
    const p = {
        size,
        color: 'currentColor'
    };
    switch(type){
        case 'wrench':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"], {
                ...p
            }, void 0, false, {
                fileName: "[project]/components/home/ProductsSection.tsx",
                lineNumber: 17,
                columnNumber: 33
            }, this);
        case 'flame':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                ...p
            }, void 0, false, {
                fileName: "[project]/components/home/ProductsSection.tsx",
                lineNumber: 18,
                columnNumber: 33
            }, this);
        case 'hardhat':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$hat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HardHat$3e$__["HardHat"], {
                ...p
            }, void 0, false, {
                fileName: "[project]/components/home/ProductsSection.tsx",
                lineNumber: 19,
                columnNumber: 33
            }, this);
        case 'anchor':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$anchor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Anchor$3e$__["Anchor"], {
                ...p
            }, void 0, false, {
                fileName: "[project]/components/home/ProductsSection.tsx",
                lineNumber: 20,
                columnNumber: 33
            }, this);
        case 'zap':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                ...p
            }, void 0, false, {
                fileName: "[project]/components/home/ProductsSection.tsx",
                lineNumber: 21,
                columnNumber: 33
            }, this);
        case 'construction':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$construction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Construction$3e$__["Construction"], {
                ...p
            }, void 0, false, {
                fileName: "[project]/components/home/ProductsSection.tsx",
                lineNumber: 22,
                columnNumber: 33
            }, this);
        case 'layers':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                ...p
            }, void 0, false, {
                fileName: "[project]/components/home/ProductsSection.tsx",
                lineNumber: 23,
                columnNumber: 33
            }, this);
        case 'building2':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                ...p
            }, void 0, false, {
                fileName: "[project]/components/home/ProductsSection.tsx",
                lineNumber: 24,
                columnNumber: 33
            }, this);
        case 'package':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                ...p
            }, void 0, false, {
                fileName: "[project]/components/home/ProductsSection.tsx",
                lineNumber: 25,
                columnNumber: 33
            }, this);
        default:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"], {
                ...p
            }, void 0, false, {
                fileName: "[project]/components/home/ProductsSection.tsx",
                lineNumber: 26,
                columnNumber: 33
            }, this);
    }
}
function Reveal({ children, delay = 0, dir = 'up', className = '' }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: '-80px'
    });
    const init = {
        up: {
            y: 40,
            x: 0
        },
        left: {
            y: 0,
            x: -40
        },
        right: {
            y: 0,
            x: 40
        },
        scale: {
            y: 0,
            x: 0
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        initial: {
            opacity: 0,
            ...init[dir],
            scale: dir === 'scale' ? 0.94 : 1
        },
        animate: inView ? {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1
        } : {},
        transition: {
            duration: 0.7,
            delay,
            ease: [
                0.25,
                0.1,
                0.25,
                1
            ]
        },
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/home/ProductsSection.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_s(Reveal, "O7qYEn3iCrBBWRAefWku+E/MdDM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = Reveal;
// ─── product data ─────────────────────────────────────────────────────────────
const PRODUCTS = [
    {
        slug: 'fasteners',
        name: 'Fasteners',
        iconType: 'wrench',
        image: '/images/products/fastner.png'
    },
    {
        slug: 'welding-consumables',
        name: 'Welding Consumables',
        iconType: 'flame',
        image: '/images/products/welding-consumable.png'
    },
    {
        slug: 'ppe-safety',
        name: 'Safety PPE',
        iconType: 'hardhat',
        image: '/images/products/saftlyppes.png'
    },
    {
        slug: 'lifting-solutions',
        name: 'Lifting Solutions',
        iconType: 'anchor',
        image: '/images/products/lifting-solutions.png'
    },
    {
        slug: 'hand-tools',
        name: 'Hand Tools',
        iconType: 'wrench',
        image: '/images/products/handtools.png'
    },
    {
        slug: 'power-tools',
        name: 'Power Tools',
        iconType: 'zap',
        image: '/images/products/powertools.png'
    },
    {
        slug: 'machine-pneumatic-tools',
        name: 'Machine & Pneumatic',
        iconType: 'construction',
        image: '/images/products/machinetools.png'
    },
    {
        slug: 'pipes-fittings',
        name: 'Pipes & Fittings',
        iconType: 'layers',
        image: '/images/products/pipes&fillers.png'
    },
    {
        slug: 'fabrications',
        name: 'Fabrications',
        iconType: 'building2',
        image: '/images/products/fabrication.png'
    }
];
// ─── floater config ───────────────────────────────────────────────────────────
//
//  PLACEMENT LOGIC:
//  • Grid uses padding: 0 8vw — so gutters are 8vw wide on each side.
//  • Floaters live at sidePos ≈ 0–2vw from the edge, meaning they sit
//    mostly in the gutter and only barely kiss the grid border.
//    → zero collision with card text at any viewport.
//
//  • topPct uses percentages so positions scale with section height on
//    any screen size — no more broken pixel positions.
//
//  • 3 pairs (top / mid / bottom) evenly distributed:
//      Pair A:  3%        ← header zone
//      Pair B: 38–44%     ← between row 1 and row 2
//      Pair C: 68–72%     ← between row 2 and row 3
//
//  • size: 130–148px — smaller = refined accent, not obstacle
//  • rot:  initial tilt in degrees (CSS variable fed into keyframe)
//  • dur / delay: each item has a different speed so they never sync
const FLOATERS = [
    // ── Pair A — top, flanking the header ──
    {
        src: '/images/fasteners/helmate.png',
        side: 'left',
        sidePos: '0.8vw',
        topPct: '2%',
        size: 140,
        rot: -7,
        dur: 5.8,
        delay: 0.3
    },
    {
        src: '/images/fasteners/stipper.png',
        side: 'right',
        sidePos: '0.8vw',
        topPct: '2%',
        size: 132,
        rot: 6,
        dur: 6.4,
        delay: 1.1
    },
    // ── Pair B — mid, flanking rows 1–2 boundary ──
    {
        src: '/images/fasteners/bolt.png',
        side: 'left',
        sidePos: '0.8vw',
        topPct: '38%',
        size: 148,
        rot: -4,
        dur: 5.3,
        delay: 0.7
    },
    {
        src: '/images/fasteners/wrench.png',
        side: 'right',
        sidePos: '0.8vw',
        topPct: '44%',
        size: 145,
        rot: 9,
        dur: 7.1,
        delay: 2.2
    },
    // ── Pair C — lower, flanking rows 2–3 boundary ──
    {
        src: '/images/fasteners/nut.png',
        side: 'left',
        sidePos: '0.8vw',
        topPct: '70%',
        size: 135,
        rot: -3,
        dur: 6.2,
        delay: 1.6
    },
    {
        src: '/images/fasteners/wrench2.png',
        side: 'right',
        sidePos: '0.8vw',
        topPct: '68%',
        size: 138,
        rot: 6,
        dur: 7.5,
        delay: 3.0
    }
];
function ProductsSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            background: '#f7f7f7',
            padding: '100px 0 120px',
            position: 'relative',
            fontFamily: "'Barlow', sans-serif",
            overflow: 'visible'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        /* One unified animation — varied timing per item keeps movement organic */
        @keyframes floatItem {
          0%,100% { transform: translateY(0px)   rotate(var(--f-rot)); }
          50%      { transform: translateY(-13px) rotate(calc(var(--f-rot) * -0.5)); }
        }

        /* card image scale on link hover */
        .pcard-link:hover .pcard-img  { transform: scale(1.06) !important; }

        /* "View" label slides up on link hover */
        .pcard-link:hover .pcard-view { opacity: 1 !important; transform: translateY(0) !important; }
      `
            }, void 0, false, {
                fileName: "[project]/components/home/ProductsSection.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    width: 440,
                    height: 440,
                    top: -80,
                    left: -100,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(226,0,16,0.06) 0%, transparent 70%)',
                    pointerEvents: 'none',
                    zIndex: 0
                }
            }, void 0, false, {
                fileName: "[project]/components/home/ProductsSection.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    width: 400,
                    height: 400,
                    bottom: 0,
                    right: -90,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(226,0,16,0.06) 0%, transparent 70%)',
                    pointerEvents: 'none',
                    zIndex: 0
                }
            }, void 0, false, {
                fileName: "[project]/components/home/ProductsSection.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            FLOATERS.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'absolute',
                        width: f.size,
                        height: f.size,
                        top: f.topPct,
                        [f.side]: f.sidePos,
                        zIndex: 4,
                        pointerEvents: 'none',
                        // feed rotation into the CSS keyframe as a variable
                        ['--f-rot']: `${f.rot}deg`,
                        animation: `floatItem ${f.dur}s cubic-bezier(0.37,0,0.63,1) ${f.delay}s infinite`
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: 'absolute',
                                inset: -16,
                                borderRadius: '50%',
                                background: 'radial-gradient(circle, rgba(226,0,16,0.11) 0%, transparent 65%)',
                                zIndex: -1
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/home/ProductsSection.tsx",
                            lineNumber: 160,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: f.src,
                            alt: "",
                            draggable: false,
                            style: {
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                                // clean single-layer shadow — not stacked
                                filter: 'drop-shadow(0 10px 24px rgba(226,0,16,0.32)) drop-shadow(0 3px 8px rgba(0,0,0,0.28))',
                                userSelect: 'none'
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/home/ProductsSection.tsx",
                            lineNumber: 169,
                            columnNumber: 11
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/components/home/ProductsSection.tsx",
                    lineNumber: 144,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 1280,
                    margin: '0 auto',
                    padding: '0 6vw 52px',
                    position: 'relative',
                    zIndex: 3
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'space-between',
                        gap: 20,
                        flexWrap: 'wrap'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: 10,
                                            fontSize: 10,
                                            fontWeight: 700,
                                            color: '#E20010',
                                            letterSpacing: '5px',
                                            textTransform: 'uppercase',
                                            marginBottom: 16
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    width: 24,
                                                    height: 2,
                                                    background: '#E20010',
                                                    display: 'inline-block',
                                                    flexShrink: 0
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/ProductsSection.tsx",
                                                lineNumber: 191,
                                                columnNumber: 17
                                            }, this),
                                            "Our Products"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/home/ProductsSection.tsx",
                                        lineNumber: 190,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/home/ProductsSection.tsx",
                                    lineNumber: 189,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                    delay: 0.05,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontFamily: "'Barlow Condensed', sans-serif",
                                            fontSize: 'clamp(38px,4.5vw,60px)',
                                            fontWeight: 900,
                                            lineHeight: 0.92,
                                            letterSpacing: '-2px',
                                            color: '#111',
                                            textTransform: 'uppercase',
                                            margin: 0
                                        },
                                        children: [
                                            "Products Built for",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/home/ProductsSection.tsx",
                                                lineNumber: 197,
                                                columnNumber: 35
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: '#E20010'
                                                },
                                                children: "Every Industry"
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/ProductsSection.tsx",
                                                lineNumber: 198,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/home/ProductsSection.tsx",
                                        lineNumber: 196,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/home/ProductsSection.tsx",
                                    lineNumber: 195,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/ProductsSection.tsx",
                            lineNumber: 188,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                            delay: 0.1,
                            dir: "right",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: 13,
                                    color: '#6b6b6b',
                                    lineHeight: 1.75,
                                    maxWidth: 300,
                                    margin: 0
                                },
                                children: "Oil & gas, construction, healthcare, automation, coal & cement, metal & mines — solutions for every sector."
                            }, void 0, false, {
                                fileName: "[project]/components/home/ProductsSection.tsx",
                                lineNumber: 203,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/home/ProductsSection.tsx",
                            lineNumber: 202,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/ProductsSection.tsx",
                    lineNumber: 187,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/home/ProductsSection.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 1280,
                    margin: '0 auto',
                    padding: '0 8vw',
                    position: 'relative',
                    zIndex: 3
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: 2,
                        borderRadius: 12,
                        overflow: 'hidden',
                        background: '#d8d8d8'
                    },
                    children: PRODUCTS.slice(0, 9).map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                            delay: i % 3 * 0.07,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/products/${p.slug}`,
                                className: "pcard-link",
                                style: {
                                    textDecoration: 'none',
                                    display: 'block'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    whileHover: {
                                        y: -5,
                                        boxShadow: '0 20px 48px rgba(226,0,16,0.2)'
                                    },
                                    transition: {
                                        duration: 0.28,
                                        ease: 'easeOut'
                                    },
                                    style: {
                                        position: 'relative',
                                        overflow: 'hidden',
                                        cursor: 'pointer',
                                        background: '#1a1a1a',
                                        height: 280
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: p.image,
                                            alt: p.name,
                                            fill: true,
                                            className: "pcard-img",
                                            style: {
                                                objectFit: 'cover',
                                                transition: 'transform .55s cubic-bezier(.25,.1,.25,1)'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/ProductsSection.tsx",
                                            lineNumber: 236,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: 'absolute',
                                                inset: 0,
                                                background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.28) 45%, rgba(0,0,0,0) 100%)'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/ProductsSection.tsx",
                                            lineNumber: 245,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: 'absolute',
                                                top: 12,
                                                left: 14,
                                                fontSize: 9,
                                                fontWeight: 800,
                                                color: 'rgba(255,255,255,0.2)',
                                                letterSpacing: '3px',
                                                zIndex: 2
                                            },
                                            children: String(i + 1).padStart(2, '0')
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/ProductsSection.tsx",
                                            lineNumber: 248,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: 'absolute',
                                                top: 10,
                                                right: 10,
                                                width: 30,
                                                height: 30,
                                                borderRadius: 7,
                                                background: 'rgba(226,0,16,0.9)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                zIndex: 2,
                                                color: '#fff'
                                            },
                                            children: renderIcon(p.iconType, 13)
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/ProductsSection.tsx",
                                            lineNumber: 253,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                right: 0,
                                                padding: '16px 18px',
                                                zIndex: 2
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: 8,
                                                        fontWeight: 700,
                                                        color: '#E20010',
                                                        letterSpacing: '2.5px',
                                                        textTransform: 'uppercase',
                                                        marginBottom: 5
                                                    },
                                                    children: [
                                                        "Category ",
                                                        String(i + 1).padStart(2, '0')
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/home/ProductsSection.tsx",
                                                    lineNumber: 259,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    style: {
                                                        fontFamily: "'Barlow Condensed', sans-serif",
                                                        fontSize: 19,
                                                        fontWeight: 900,
                                                        color: '#fff',
                                                        margin: 0,
                                                        lineHeight: 1.05,
                                                        textTransform: 'uppercase'
                                                    },
                                                    children: p.name
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/ProductsSection.tsx",
                                                    lineNumber: 262,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pcard-view",
                                                    style: {
                                                        marginTop: 9,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: 6,
                                                        opacity: 0,
                                                        transform: 'translateY(6px)',
                                                        transition: 'opacity .28s, transform .28s'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                width: 18,
                                                                height: 1,
                                                                background: 'rgba(226,0,16,0.8)'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/home/ProductsSection.tsx",
                                                            lineNumber: 270,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: 8,
                                                                fontWeight: 700,
                                                                color: 'rgba(255,255,255,0.5)',
                                                                letterSpacing: '2px',
                                                                textTransform: 'uppercase'
                                                            },
                                                            children: "View"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/home/ProductsSection.tsx",
                                                            lineNumber: 271,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/home/ProductsSection.tsx",
                                                    lineNumber: 266,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/home/ProductsSection.tsx",
                                            lineNumber: 258,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0
                                            },
                                            whileHover: {
                                                opacity: 1
                                            },
                                            style: {
                                                position: 'absolute',
                                                inset: 0,
                                                boxShadow: 'inset 0 0 0 1.5px rgba(226,0,16,0.55)',
                                                pointerEvents: 'none',
                                                zIndex: 3
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/ProductsSection.tsx",
                                            lineNumber: 276,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/home/ProductsSection.tsx",
                                    lineNumber: 230,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/home/ProductsSection.tsx",
                                lineNumber: 229,
                                columnNumber: 15
                            }, this)
                        }, p.slug, false, {
                            fileName: "[project]/components/home/ProductsSection.tsx",
                            lineNumber: 228,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/home/ProductsSection.tsx",
                    lineNumber: 217,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/home/ProductsSection.tsx",
                lineNumber: 216,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: 'center',
                    marginTop: 60,
                    padding: '0 8vw',
                    position: 'relative',
                    zIndex: 3
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                    delay: 0.2,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        whileHover: {
                            backgroundColor: '#E20010',
                            color: '#fff'
                        },
                        onClick: ()=>window.location.href = '/products',
                        style: {
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 10,
                            fontSize: 11,
                            fontWeight: 700,
                            letterSpacing: '3px',
                            textTransform: 'uppercase',
                            padding: '15px 48px',
                            border: '2px solid #E20010',
                            color: '#E20010',
                            background: 'transparent',
                            borderRadius: 6,
                            cursor: 'pointer',
                            fontFamily: "'Barlow', sans-serif",
                            transition: 'all .3s'
                        },
                        children: [
                            "View All Products ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/components/home/ProductsSection.tsx",
                                lineNumber: 303,
                                columnNumber: 31
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/ProductsSection.tsx",
                        lineNumber: 291,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/home/ProductsSection.tsx",
                    lineNumber: 290,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/home/ProductsSection.tsx",
                lineNumber: 289,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/ProductsSection.tsx",
        lineNumber: 108,
        columnNumber: 5
    }, this);
}
_c1 = ProductsSection;
var _c, _c1;
__turbopack_context__.k.register(_c, "Reveal");
__turbopack_context__.k.register(_c1, "ProductsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home/HomeReferenceLayout.tsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/components/home/HomeReferenceLayout.tsx'\n\nUnterminated regexp literal");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
]);

//# sourceMappingURL=components_03nqu7j._.js.map