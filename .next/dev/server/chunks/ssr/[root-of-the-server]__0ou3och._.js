module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/lib/constants.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BRANDS",
    ()=>BRANDS,
    "EMAIL",
    ()=>EMAIL,
    "INDUSTRIES",
    ()=>INDUSTRIES,
    "LOCATIONS",
    ()=>LOCATIONS,
    "NAV_LINKS",
    ()=>NAV_LINKS,
    "PHONE_MOBILE",
    ()=>PHONE_MOBILE,
    "PHONE_MUSCAT",
    ()=>PHONE_MUSCAT,
    "PRODUCTS",
    ()=>PRODUCTS,
    "SITE_NAME",
    ()=>SITE_NAME,
    "SITE_TAGLINE",
    ()=>SITE_TAGLINE,
    "SITE_URL",
    ()=>SITE_URL,
    "STATS",
    ()=>STATS,
    "WHATSAPP",
    ()=>WHATSAPP
]);
const SITE_URL = 'https://www.mactechoman.com';
const SITE_NAME = 'Mactech Building Materials Trading LLC';
const SITE_TAGLINE = 'Your Industrial Partner in Oman';
const PHONE_MUSCAT = '+968 2421 8110';
const PHONE_MOBILE = '+968 9798 4810';
const EMAIL = 'info@mactechoman.com';
const WHATSAPP = '+96897984810';
const LOCATIONS = [
    {
        city: 'Muscat',
        country: 'Sultanate of Oman',
        address: 'Al Jami Al Akbar St, Ghala Industrial Area',
        pobox: 'P.O. Box 870, PC 115',
        phone: '+968 2421 8110 / 8111',
        mobile: '+968 9798 4810',
        email: 'info@mactechoman.com',
        mapUrl: 'https://maps.google.com/?q=Ghala+Industrial+Area+Muscat+Oman',
        slug: 'muscat',
        primary: true
    }
];
const PRODUCTS = [
    {
        slug: 'fasteners',
        name: 'Fasteners',
        shortDesc: 'High-tensile bolts, nuts, screws, washers & precision fasteners',
        longDesc: 'Complete range of industrial fasteners including high-tensile bolts, nuts, all types of screws, washers, pins, circlips, cotter pins, T-bolts, square head tool post bolts, allen plugs, grease nipples and more. Sourced to international standards for Oil & Gas, construction and heavy industry.',
        icon: '⚙️',
        image: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=800',
        keywords: [
            'industrial fasteners Muscat',
            'bolts nuts supplier Oman',
            'high tensile fasteners',
            'fastener supplier Muscat'
        ],
        features: [
            'High Tensile Grade 8.8, 10.9, 12.9',
            'Stainless Steel SS304 / SS316',
            'Galvanized & Hot-dip coated',
            'Custom lengths and threads',
            'DIN / ISO / ASTM standards'
        ]
    },
    {
        slug: 'ppe-safety',
        name: 'PPE & Safety Equipment',
        shortDesc: 'Head-to-toe personal protective equipment for all industries',
        longDesc: 'Comprehensive range of personal protective equipment (PPE) including safety helmets, harnesses, fall protection, safety gloves, safety shoes, hi-visibility clothing, eye protection, hearing protection, respiratory protection and flame-retardant workwear.',
        icon: '🦺',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800',
        keywords: [
            'PPE supplier Muscat',
            'safety equipment Oman',
            'safety helmets Muscat',
            'Portwest distributor Oman'
        ],
        features: [
            'ANSI / EN / ISO Certified',
            'Portwest & Delta-Plus brands',
            'Oil & Gas rated FR clothing',
            'Full fall protection systems',
            'Head-to-toe safety solutions'
        ]
    },
    {
        slug: 'welding-consumables',
        name: 'Welding Consumables',
        shortDesc: 'Professional welding electrodes, wires, rods and accessories',
        longDesc: 'Full range of welding consumables and accessories including welding electrodes, MIG/MAG wires, TIG rods, flux-cored wires, welding helmets, gloves and accessories. Used in construction, oil & gas pipelines, fabrication and heavy steel structures.',
        icon: '🔥',
        image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800',
        keywords: [
            'welding consumables Oman',
            'welding electrodes Muscat',
            'MIG welding wire supplier'
        ],
        features: [
            'AWS / EN / ISO classified',
            'Carbon steel, stainless, aluminium',
            'MIG, TIG, MMA, flux-cored',
            'Pipeline welding qualified grades',
            'Full welding accessory range'
        ]
    },
    {
        slug: 'hand-tools',
        name: 'Hand Tools',
        shortDesc: 'Professional-grade hand tools from leading global brands',
        longDesc: 'Extensive range of professional hand tools including spanners, pliers, screwdrivers, hammers, chisels, files, saws, measuring tools, pipe wrenches and socket sets from top brands including Stanley, Grip-on and others.',
        icon: '🔧',
        image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800',
        keywords: [
            'hand tools supplier Muscat',
            'Stanley tools Oman',
            'professional tools Muscat'
        ],
        features: [
            'Stanley, Grip-on & premium brands',
            'Spanners, sockets & wrenches',
            'Measuring & marking tools',
            'Cutting & striking tools',
            'Pipe & plumbing tools'
        ]
    },
    {
        slug: 'power-tools',
        name: 'Power Tools',
        shortDesc: 'Electric and cordless power tools for industrial applications',
        longDesc: 'Professional power tools range including angle grinders, drills, impact wrenches, circular saws, jigsaws, rotary hammers, and cordless tools from Geepas, Clarke and other quality brands suitable for industrial and construction use.',
        icon: '⚡',
        image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800',
        keywords: [
            'power tools Muscat',
            'angle grinder Oman',
            'cordless drill Muscat'
        ],
        features: [
            'Clarke & Geepas brands',
            'Angle grinders, drills, saws',
            'Rotary hammers & breakers',
            'Cordless tool systems',
            'Accessories & spare parts'
        ]
    },
    {
        slug: 'lifting-solutions',
        name: 'Lifting Solutions',
        shortDesc: 'Certified lifting equipment — slings, shackles, hoists & more',
        longDesc: 'Complete lifting and rigging solutions including wire rope slings, chain slings, webbing slings, shackles, hooks, eye bolts, chain hoists, lever hoists, beam clamps and lifting accessories — all certified to international safety standards.',
        icon: '🏗️',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
        keywords: [
            'lifting equipment Oman',
            'wire rope slings Muscat',
            'chain hoist supplier'
        ],
        features: [
            'WLL Certified & tested',
            'Wire rope & chain slings',
            'Webbing & polyester slings',
            'Manual & electric hoists',
            'LEEA standard compliance'
        ]
    },
    {
        slug: 'pipes-fittings',
        name: 'Pipes & Fittings',
        shortDesc: 'Industrial pipes, valves and pipe fittings for all applications',
        longDesc: 'Wide range of industrial piping solutions including GI pipes, MS pipes, PVC pipes, pipe fittings, elbows, tees, flanges, couplings, gate valves, ball valves and industrial hoses for construction, oil & gas and general industry.',
        icon: '🔩',
        image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800',
        keywords: [
            'pipes fittings Oman',
            'GI pipes Muscat',
            'pipe fittings supplier'
        ],
        features: [
            'GI, MS, SS, PVC options',
            'BSP & NPT thread fittings',
            'Flanged connections',
            'Industrial valves & controls',
            'Custom pipe fabrication'
        ]
    },
    {
        slug: 'abrasives-adhesives',
        name: 'Abrasives & Adhesives',
        shortDesc: 'Industrial abrasives, sealants and adhesive solutions',
        longDesc: 'Comprehensive range of cutting and grinding discs, flap discs, sandpapers, wire brushes, industrial adhesives, sealants, epoxies and thread-locking compounds for all industrial maintenance and construction applications.',
        icon: '💎',
        image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800',
        keywords: [
            'abrasives supplier Oman',
            'cutting disc Muscat',
            'industrial adhesive Oman'
        ],
        features: [
            'Cutting & grinding discs',
            'Flap discs & fibre discs',
            'Coated & bonded abrasives',
            'Industrial epoxies & sealants',
            'Thread lockers & gasket makers'
        ]
    },
    {
        slug: 'construction-consumables',
        name: 'Construction Consumables',
        shortDesc: 'Building materials, anchors, chemicals and construction supplies',
        longDesc: 'Full range of construction consumables including chemical anchors, anchor bolts, caulks, grouts, waterproofing systems, masonry drill bits, concrete fasteners, tie wires, safety barriers and general building materials.',
        icon: '🏢',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800',
        keywords: [
            'construction supplies Muscat',
            'chemical anchors Oman',
            'building materials'
        ],
        features: [
            'Chemical & mechanical anchors',
            'Caulks, grouts & waterproofing',
            'Masonry & concrete fixings',
            'Construction tapes & films',
            'Safety barriers & signage'
        ]
    }
];
const INDUSTRIES = [
    {
        slug: 'oil-gas',
        name: 'Oil & Gas',
        icon: '🛢️',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800',
        desc: 'Certified PPE, flanges, valves and safety equipment for upstream, midstream and downstream operations.'
    },
    {
        slug: 'construction',
        name: 'Construction',
        icon: '🏗️',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800',
        desc: 'Fasteners, power tools, abrasives and building materials for large-scale construction projects across Oman.'
    },
    {
        slug: 'manufacturing',
        name: 'Manufacturing',
        icon: '🏭',
        image: 'https://images.unsplash.com/photo-1565793979451-98b27b2fa0be?w=800',
        desc: 'Machine tools, pneumatic equipment and industrial consumables for fabrication and manufacturing facilities.'
    },
    {
        slug: 'automotive',
        name: 'Automotive',
        icon: '🚗',
        image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800',
        desc: 'Workshop tools, lifting equipment, fasteners and safety products for automobile service and repair.'
    }
];
const BRANDS = [
    {
        name: 'Portwest',
        category: 'PPE & Workwear',
        logo: '/images/brands/portwest.png'
    },
    {
        name: 'Stanley',
        category: 'Hand & Power Tools',
        logo: '/images/brands/stanley.png'
    },
    {
        name: 'Ansell',
        category: 'Protective Gloves',
        logo: '/images/brands/ansell.png'
    },
    {
        name: 'Delta-Plus',
        category: 'Safety Equipment',
        logo: '/images/brands/deltaplus.png'
    },
    {
        name: 'Gazelle',
        category: 'Safety Footwear',
        logo: '/images/brands/gazelle.png'
    },
    {
        name: 'Clarke',
        category: 'Power Tools',
        logo: '/images/brands/clarke.png'
    },
    {
        name: 'Geepas',
        category: 'Power Tools',
        logo: '/images/brands/geepas.png'
    },
    {
        name: 'Grip-on',
        category: 'Hand Tools',
        logo: '/images/brands/gripon.png'
    },
    {
        name: 'Milano',
        category: 'Workwear',
        logo: '/images/brands/milano.png'
    },
    {
        name: 'Uken',
        category: 'Industrial Products',
        logo: '/images/brands/uken.png'
    }
];
const STATS = [
    {
        value: 145,
        suffix: '+',
        label: 'Projects Completed'
    },
    {
        value: 150,
        suffix: '+',
        label: 'Business Partners'
    },
    {
        value: 17,
        suffix: '+',
        label: 'Years of Experience'
    },
    {
        value: 19,
        suffix: '+',
        label: 'Professional Staff'
    }
];
const NAV_LINKS = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'About Us',
        href: '/about'
    },
    {
        label: 'Services',
        href: '/services'
    },
    {
        label: 'Gallery',
        href: '/gallery'
    },
    {
        label: 'Blog',
        href: '/blog'
    },
    {
        label: 'Contact',
        href: '/contact'
    }
];
}),
"[project]/components/layout/Navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function Navbar() {
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return ()=>window.removeEventListener('scroll', handleScroll);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: `sticky top-0 z-50 bg-white transition-all duration-300 ${isScrolled ? 'border-b border-gray-200 shadow-md' : 'border-b border-gray-100'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-custom flex items-center justify-between h-16 lg:h-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center gap-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: "/mactech-logo.avif",
                                alt: "Mactech Oman logo",
                                width: 56,
                                height: 56,
                                className: "h-12 w-auto object-contain",
                                unoptimized: true,
                                priority: true
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Navbar.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Navbar.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden lg:flex items-center gap-1",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NAV_LINKS"].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: link.href,
                                    className: "flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-red-600 transition-colors rounded-lg hover:bg-red-50",
                                    children: link.label
                                }, link.href, false, {
                                    fileName: "[project]/components/layout/Navbar.tsx",
                                    lineNumber: 45,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Navbar.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden lg:flex items-center gap-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/contact",
                                className: "inline-flex items-center gap-2 px-6 py-2.5 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors",
                                style: {
                                    background: '#E20010'
                                },
                                children: "Contact Us"
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Navbar.tsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Navbar.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setMobileOpen(!mobileOpen),
                            className: "lg:hidden p-2 text-gray-700 hover:text-red-600",
                            children: mobileOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiX"], {
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Navbar.tsx",
                                lineNumber: 67,
                                columnNumber: 27
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiMenu"], {
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Navbar.tsx",
                                lineNumber: 67,
                                columnNumber: 47
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Navbar.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layout/Navbar.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/layout/Navbar.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: mobileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        x: '100%'
                    },
                    animate: {
                        opacity: 1,
                        x: 0
                    },
                    exit: {
                        opacity: 0,
                        x: '100%'
                    },
                    transition: {
                        type: 'tween',
                        duration: 0.3
                    },
                    className: "fixed inset-0 z-40 lg:hidden overflow-y-auto bg-white",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-20 pb-8 px-6",
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NAV_LINKS"].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: link.href,
                                        onClick: ()=>setMobileOpen(false),
                                        className: "block py-3 text-lg font-medium text-gray-800 border-b border-gray-200 hover:text-red-600 transition-colors",
                                        children: link.label
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Navbar.tsx",
                                        lineNumber: 85,
                                        columnNumber: 19
                                    }, this)
                                }, link.href, false, {
                                    fileName: "[project]/components/layout/Navbar.tsx",
                                    lineNumber: 84,
                                    columnNumber: 17
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/contact",
                                    className: "w-full justify-center inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-lg text-white transition-colors",
                                    style: {
                                        background: '#E20010'
                                    },
                                    onClick: ()=>setMobileOpen(false),
                                    children: "Contact Us"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Navbar.tsx",
                                    lineNumber: 95,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Navbar.tsx",
                                lineNumber: 94,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/layout/Navbar.tsx",
                        lineNumber: 82,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/layout/Navbar.tsx",
                    lineNumber: 75,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/layout/Navbar.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/components/layout/Footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function Footer() {
    const currentYear = new Date().getFullYear();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        style: {
            background: '#111',
            color: '#fff',
            fontFamily: "'Plus Jakarta Sans', sans-serif"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                padding: '80px 8vw 40px',
                maxWidth: 1400,
                margin: '0 auto'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: 60,
                        marginBottom: 60
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        fontSize: 18,
                                        fontWeight: 900,
                                        marginBottom: 16,
                                        color: '#E20010'
                                    },
                                    children: "Mactech Oman"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Footer.tsx",
                                    lineNumber: 17,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: 13,
                                        color: 'rgba(255,255,255,0.6)',
                                        lineHeight: 1.8,
                                        marginBottom: 20
                                    },
                                    children: "ISO 9001 certified industrial & building materials supplier in Oman. Your trusted partner for fasteners, PPE, welding, tools and more."
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Footer.tsx",
                                    lineNumber: 18,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        gap: 12,
                                        flexWrap: 'wrap'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://wa.me/96897984810",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            style: {
                                                width: 36,
                                                height: 36,
                                                borderRadius: '50%',
                                                background: 'rgba(226,0,16,0.2)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                textDecoration: 'none',
                                                color: '#E20010',
                                                fontSize: 16,
                                                transition: 'all .3s'
                                            },
                                            className: "hover:bg-red-600 hover:text-white",
                                            children: "💬"
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/Footer.tsx",
                                            lineNumber: 22,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "tel:+96824218110",
                                            style: {
                                                width: 36,
                                                height: 36,
                                                borderRadius: '50%',
                                                background: 'rgba(226,0,16,0.2)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                textDecoration: 'none',
                                                color: '#E20010',
                                                transition: 'all .3s'
                                            },
                                            className: "hover:bg-red-600 hover:text-white",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Footer.tsx",
                                                lineNumber: 23,
                                                columnNumber: 307
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/Footer.tsx",
                                            lineNumber: 23,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "mailto:info@mactechoman.com",
                                            style: {
                                                width: 36,
                                                height: 36,
                                                borderRadius: '50%',
                                                background: 'rgba(226,0,16,0.2)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                textDecoration: 'none',
                                                color: '#E20010',
                                                transition: 'all .3s'
                                            },
                                            className: "hover:bg-red-600 hover:text-white",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Footer.tsx",
                                                lineNumber: 24,
                                                columnNumber: 318
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/Footer.tsx",
                                            lineNumber: 24,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/layout/Footer.tsx",
                                    lineNumber: 21,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/Footer.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    style: {
                                        fontSize: 13,
                                        fontWeight: 700,
                                        marginBottom: 20,
                                        color: '#fff',
                                        letterSpacing: '2px',
                                        textTransform: 'uppercase'
                                    },
                                    children: "Quick Links"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Footer.tsx",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    style: {
                                        listStyle: 'none',
                                        padding: 0,
                                        margin: 0,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: 12
                                    },
                                    children: [
                                        {
                                            label: 'Home',
                                            href: '/'
                                        },
                                        {
                                            label: 'Products',
                                            href: '/products'
                                        },
                                        {
                                            label: 'About Us',
                                            href: '/about'
                                        },
                                        {
                                            label: 'Contact',
                                            href: '/contact'
                                        }
                                    ].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: link.href,
                                                style: {
                                                    fontSize: 13,
                                                    color: 'rgba(255,255,255,0.6)',
                                                    textDecoration: 'none',
                                                    transition: 'color .3s',
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    gap: 6
                                                },
                                                className: "hover:text-red-500",
                                                children: link.label
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Footer.tsx",
                                                lineNumber: 39,
                                                columnNumber: 19
                                            }, this)
                                        }, link.href, false, {
                                            fileName: "[project]/components/layout/Footer.tsx",
                                            lineNumber: 38,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Footer.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/Footer.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    style: {
                                        fontSize: 13,
                                        fontWeight: 700,
                                        marginBottom: 20,
                                        color: '#fff',
                                        letterSpacing: '2px',
                                        textTransform: 'uppercase'
                                    },
                                    children: "Our Products"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Footer.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    style: {
                                        listStyle: 'none',
                                        padding: 0,
                                        margin: 0,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: 12
                                    },
                                    children: [
                                        {
                                            label: 'Fasteners',
                                            href: '/products/fasteners'
                                        },
                                        {
                                            label: 'Welding Consumables',
                                            href: '/products/welding-consumables'
                                        },
                                        {
                                            label: 'Safety PPE',
                                            href: '/products/ppe-safety'
                                        },
                                        {
                                            label: 'Power Tools',
                                            href: '/products/power-tools'
                                        }
                                    ].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: link.href,
                                                style: {
                                                    fontSize: 13,
                                                    color: 'rgba(255,255,255,0.6)',
                                                    textDecoration: 'none',
                                                    transition: 'color .3s'
                                                },
                                                className: "hover:text-red-500",
                                                children: link.label
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Footer.tsx",
                                                lineNumber: 58,
                                                columnNumber: 19
                                            }, this)
                                        }, link.href, false, {
                                            fileName: "[project]/components/layout/Footer.tsx",
                                            lineNumber: 57,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Footer.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/Footer.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    style: {
                                        fontSize: 13,
                                        fontWeight: 700,
                                        marginBottom: 20,
                                        color: '#fff',
                                        letterSpacing: '2px',
                                        textTransform: 'uppercase'
                                    },
                                    children: "Contact Us"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Footer.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: 16
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            whileHover: {
                                                x: 4
                                            },
                                            style: {
                                                display: 'flex',
                                                gap: 10,
                                                alignItems: 'flex-start'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                    size: 16,
                                                    style: {
                                                        color: '#E20010',
                                                        marginTop: 2,
                                                        flexShrink: 0
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/Footer.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: 11,
                                                                color: 'rgba(255,255,255,0.5)',
                                                                letterSpacing: '1px',
                                                                marginBottom: 4
                                                            },
                                                            children: "PHONE"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/layout/Footer.tsx",
                                                            lineNumber: 73,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "tel:+96824218110",
                                                            style: {
                                                                fontSize: 13,
                                                                color: '#fff',
                                                                textDecoration: 'none',
                                                                fontWeight: 600
                                                            },
                                                            children: "+968 2421 8110"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/layout/Footer.tsx",
                                                            lineNumber: 74,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/layout/Footer.tsx",
                                                    lineNumber: 72,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/layout/Footer.tsx",
                                            lineNumber: 70,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            whileHover: {
                                                x: 4
                                            },
                                            style: {
                                                display: 'flex',
                                                gap: 10,
                                                alignItems: 'flex-start'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                    size: 16,
                                                    style: {
                                                        color: '#E20010',
                                                        marginTop: 2,
                                                        flexShrink: 0
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/Footer.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: 11,
                                                                color: 'rgba(255,255,255,0.5)',
                                                                letterSpacing: '1px',
                                                                marginBottom: 4
                                                            },
                                                            children: "ADDRESS"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/layout/Footer.tsx",
                                                            lineNumber: 80,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: 13,
                                                                color: 'rgba(255,255,255,0.8)',
                                                                lineHeight: 1.5
                                                            },
                                                            children: [
                                                                "Ghala Industrial Area",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                    fileName: "[project]/components/layout/Footer.tsx",
                                                                    lineNumber: 81,
                                                                    columnNumber: 119
                                                                }, this),
                                                                "Muscat, Oman"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/layout/Footer.tsx",
                                                            lineNumber: 81,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/layout/Footer.tsx",
                                                    lineNumber: 79,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/layout/Footer.tsx",
                                            lineNumber: 77,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            whileHover: {
                                                x: 4
                                            },
                                            style: {
                                                display: 'flex',
                                                gap: 10,
                                                alignItems: 'flex-start'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                    size: 16,
                                                    style: {
                                                        color: '#E20010',
                                                        marginTop: 2,
                                                        flexShrink: 0
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/Footer.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: 11,
                                                                color: 'rgba(255,255,255,0.5)',
                                                                letterSpacing: '1px',
                                                                marginBottom: 4
                                                            },
                                                            children: "EMAIL"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/layout/Footer.tsx",
                                                            lineNumber: 87,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "mailto:info@mactechoman.com",
                                                            style: {
                                                                fontSize: 13,
                                                                color: '#fff',
                                                                textDecoration: 'none',
                                                                fontWeight: 600
                                                            },
                                                            children: "info@mactechoman.com"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/layout/Footer.tsx",
                                                            lineNumber: 88,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/layout/Footer.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/layout/Footer.tsx",
                                            lineNumber: 84,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/layout/Footer.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/Footer.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layout/Footer.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    whileHover: {
                        boxShadow: '0 20px 40px rgba(226,0,16,0.2)'
                    },
                    style: {
                        background: 'linear-gradient(135deg, #E20010 0%, #ff3b47 100%)',
                        padding: '32px 40px',
                        borderRadius: 12,
                        marginBottom: 40,
                        transition: 'box-shadow .3s'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: 20,
                            flexWrap: 'wrap'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1,
                                    minWidth: 250
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            fontSize: 20,
                                            fontWeight: 900,
                                            marginBottom: 6,
                                            color: '#fff'
                                        },
                                        children: "Need a Quote?"
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Footer.tsx",
                                        lineNumber: 99,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: 13,
                                            color: 'rgba(255,255,255,0.9)',
                                            margin: 0
                                        },
                                        children: "Contact us today for custom quotes and technical consultation."
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Footer.tsx",
                                        lineNumber: 100,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/layout/Footer.tsx",
                                lineNumber: 98,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/contact",
                                style: {
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: 8,
                                    background: '#fff',
                                    color: '#E20010',
                                    fontWeight: 700,
                                    fontSize: 12,
                                    padding: '12px 28px',
                                    borderRadius: 6,
                                    textDecoration: 'none',
                                    letterSpacing: '1.5px',
                                    textTransform: 'uppercase',
                                    transition: 'all .3s',
                                    flexShrink: 0
                                },
                                className: "hover:scale-105 hover:shadow-lg",
                                children: [
                                    "Get Quote ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Footer.tsx",
                                        lineNumber: 103,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/layout/Footer.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/layout/Footer.tsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/layout/Footer.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        height: '1px',
                        background: 'rgba(255,255,255,0.1)',
                        marginBottom: 32
                    }
                }, void 0, false, {
                    fileName: "[project]/components/layout/Footer.tsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: 20
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: 12,
                                color: 'rgba(255,255,255,0.5)',
                                letterSpacing: '1px'
                            },
                            children: [
                                "© ",
                                currentYear,
                                " Mactech Building Materials Trading LLC. All rights reserved."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/Footer.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: 24,
                                flexWrap: 'wrap'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    style: {
                                        fontSize: 12,
                                        color: 'rgba(255,255,255,0.5)',
                                        textDecoration: 'none',
                                        transition: 'color .3s'
                                    },
                                    className: "hover:text-white",
                                    children: "Privacy Policy"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Footer.tsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    style: {
                                        fontSize: 12,
                                        color: 'rgba(255,255,255,0.5)',
                                        textDecoration: 'none',
                                        transition: 'color .3s'
                                    },
                                    className: "hover:text-white",
                                    children: "Terms of Service"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Footer.tsx",
                                    lineNumber: 118,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    style: {
                                        fontSize: 12,
                                        color: 'rgba(255,255,255,0.5)',
                                        textDecoration: 'none',
                                        transition: 'color .3s'
                                    },
                                    className: "hover:text-white",
                                    children: "Sitemap"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Footer.tsx",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/Footer.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layout/Footer.tsx",
                    lineNumber: 112,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/layout/Footer.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/layout/Footer.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/shared/WhatsAppButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WhatsAppButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-ssr] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function WhatsAppButton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].a, {
        href: `https://wa.me/${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WHATSAPP"]}?text=Hello%20Mactech%2C%20I%27d%20like%20to%20inquire%20about%20your%20products.`,
        target: "_blank",
        rel: "noopener noreferrer",
        initial: {
            scale: 0,
            opacity: 0
        },
        animate: {
            scale: 1,
            opacity: 1
        },
        transition: {
            delay: 2,
            type: 'spring'
        },
        whileHover: {
            scale: 1.1
        },
        whileTap: {
            scale: 0.95
        },
        className: "fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 transition-colors",
        "aria-label": "Chat on WhatsApp",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                animate: {
                    scale: [
                        1,
                        1.2,
                        1
                    ]
                },
                transition: {
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                    size: 26,
                    className: "text-white"
                }, void 0, false, {
                    fileName: "[project]/components/shared/WhatsAppButton.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/shared/WhatsAppButton.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30"
            }, void 0, false, {
                fileName: "[project]/components/shared/WhatsAppButton.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/shared/WhatsAppButton.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/CustomCursor.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CustomCursor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const ZONES = {
    default: {
        label: '',
        size: 18
    },
    link: {
        label: '',
        size: 18
    },
    marquee: {
        label: '',
        size: 12
    },
    hero: {
        label: 'EXPLORE',
        size: 52
    },
    about: {
        label: 'OUR STORY',
        size: 46
    },
    products: {
        label: 'VIEW',
        size: 48
    },
    featured: {
        label: 'DISCOVER',
        size: 54
    },
    why: {
        label: 'QUALITY',
        size: 46
    },
    projects: {
        label: 'OPEN',
        size: 58
    },
    brands: {
        label: 'PARTNER',
        size: 42
    },
    cta: {
        label: "LET'S GO",
        size: 64
    }
};
const R = 'rgba(226,0,16,';
const lrp = (a, b, t)=>a + (b - a) * t;
const hyp = (x, y)=>Math.sqrt(x * x + y * y);
const drawCenteredSpacedText = (ctx, text, x, y, spacing)=>{
    if (!text) return;
    const chars = text.split('');
    const textWidth = chars.reduce((sum, ch)=>sum + ctx.measureText(ch).width, 0);
    const totalSpacing = spacing * Math.max(0, chars.length - 1);
    let drawX = x - (textWidth + totalSpacing) / 2;
    for(let i = 0; i < chars.length; i++){
        const ch = chars[i];
        ctx.fillText(ch, drawX, y);
        drawX += ctx.measureText(ch).width + spacing;
    }
};
function CustomCursor() {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        const resize = ()=>{
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);
        // ── State ─────────────────────────────────────────────────────────────
        let mx = innerWidth / 2, my = innerHeight / 2;
        let f1x = innerWidth / 2, f1y = innerHeight / 2;
        let f2x = innerWidth / 2, f2y = innerHeight / 2;
        let f3x = innerWidth / 2, f3y = innerHeight / 2;
        let vx = 0, vy = 0, spd = 0;
        let zone = 'default', linkHov = false;
        let pressing = false, visible = true;
        let curSize = 18, tgtSize = 18;
        let rot = 0;
        let magX = 0, magY = 0, magOn = false, magStr = 0;
        const particles = [];
        const drops = [];
        let ldx = -999, ldy = -999;
        let raf;
        // ── FIX 1: Snap all followers to real mouse position on first move ─────
        // After Next.js client-side navigation the component remounts but no
        // mousemove fires, so the canvas stays blank. Grabbing the first event
        // and teleporting all lerp followers fixes the blank + swim-from-center.
        const snapOnFirstMove = (e)=>{
            mx = e.clientX;
            my = e.clientY;
            f1x = mx;
            f1y = my;
            f2x = mx;
            f2y = my;
            f3x = mx;
            f3y = my;
            visible = true;
            document.removeEventListener('mousemove', snapOnFirstMove, true);
        };
        document.addEventListener('mousemove', snapOnFirstMove, {
            capture: true,
            passive: true
        });
        // ── FIX 2: Release pressing state via multiple safety nets ────────────
        // When a link is clicked, the browser navigates before mouseup fires on
        // the document, leaving pressing=true forever → cursor shrinks & freezes.
        // We catch mouseup on window (capture), tab blur, and page hide.
        const releasePressing = ()=>{
            pressing = false;
        };
        window.addEventListener('mouseup', releasePressing, true);
        window.addEventListener('blur', releasePressing);
        document.addEventListener('visibilitychange', releasePressing);
        const detect = (el)=>{
            const link = !!el?.closest('a,button,[role="button"],[data-cursor="link"]');
            const sec = el?.closest('[data-cursor-zone]');
            return {
                zone: sec?.dataset.cursorZone ?? 'default',
                link
            };
        };
        const burst = (bx, by)=>{
            for(let i = 0; i < 10; i++){
                const a = i / 10 * Math.PI * 2 + Math.random() * 0.4;
                const s = 1.8 + Math.random() * 3.6;
                particles.push({
                    x: bx,
                    y: by,
                    vx: Math.cos(a) * s,
                    vy: Math.sin(a) * s - 1.2,
                    life: 1,
                    decay: 0.03 + Math.random() * 0.025,
                    r: 1.5 + Math.random() * 2.5
                });
            }
        };
        const onMove = (e)=>{
            const px = mx, py = my;
            mx = e.clientX;
            my = e.clientY;
            vx = mx - px;
            vy = my - py;
            spd = hyp(vx, vy);
            visible = true;
            const d = detect(document.elementFromPoint(mx, my));
            zone = d.zone;
            linkHov = d.link;
            const mEl = document.elementFromPoint(mx, my)?.closest('[data-magnetic]');
            if (mEl) {
                const r = mEl.getBoundingClientRect();
                magX = r.left + r.width / 2;
                magY = r.top + r.height / 2;
                magOn = true;
            } else {
                magOn = false;
            }
            if (hyp(mx - ldx, my - ldy) > 9) {
                ldx = mx;
                ldy = my;
                drops.push({
                    x: mx,
                    y: my,
                    life: 1,
                    r: Math.min(spd * 0.22 + 1.2, 5)
                });
                if (drops.length > 28) drops.shift();
            }
        };
        const onDown = (e)=>{
            pressing = true;
            burst(e.clientX, e.clientY);
            // FIX 3: Hard timeout safety net — if mouseup is never received
            // (e.g. navigation swallows it), force-release after 350 ms.
            setTimeout(releasePressing, 350);
        };
        const onUp = ()=>{
            pressing = false;
        };
        const onOut = ()=>{
            visible = true;
        };
        const onIn = ()=>{
            visible = true;
        };
        document.addEventListener('mousemove', onMove, {
            passive: true
        });
        document.addEventListener('mousedown', onDown);
        document.addEventListener('mouseup', onUp);
        document.addEventListener('mouseleave', onOut);
        document.addEventListener('mouseenter', onIn);
        const tick = ()=>{
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            rot += 0.011;
            f1x = lrp(f1x, mx, 0.22);
            f1y = lrp(f1y, my, 0.22);
            f2x = lrp(f2x, mx, 0.10);
            f2y = lrp(f2y, my, 0.10);
            f3x = lrp(f3x, mx, 0.05);
            f3y = lrp(f3y, my, 0.05);
            // magnetic pull on tight follower
            if (magOn) {
                const dx = f1x - magX, dy = f1y - magY;
                const pull = Math.max(0, 1 - hyp(dx, dy) / 130);
                magStr = lrp(magStr, pull, 0.12);
                f1x -= dx * magStr * 0.38;
                f1y -= dy * magStr * 0.38;
            } else {
                magStr = lrp(magStr, 0, 0.07);
            }
            const active = linkHov || zone !== 'default' && zone !== 'marquee';
            const cfg = ZONES[linkHov ? 'link' : zone] ?? ZONES.default;
            tgtSize = active ? cfg.size : 18;
            curSize = lrp(curSize, tgtSize, 0.11);
            const ps = pressing ? 0.72 : 1.0;
            // ── 1) INK TRAIL ──────────────────────────────────────────────────
            for(let i = drops.length - 1; i >= 0; i--)drops[i].life -= 0.042;
            for(let i = 1; i < drops.length; i++){
                const c = drops[i], p = drops[i - 1], prog = i / drops.length;
                const a = c.life * prog;
                ctx.beginPath();
                ctx.arc(c.x, c.y, c.r * prog, 0, Math.PI * 2);
                ctx.fillStyle = R + a * 0.38 + ')';
                ctx.fill();
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(c.x, c.y);
                ctx.strokeStyle = R + a * 0.18 + ')';
                ctx.lineWidth = c.r * prog * 1.1;
                ctx.lineCap = 'round';
                ctx.stroke();
            }
            for(let i = drops.length - 1; i >= 0; i--)if (drops[i].life <= 0) drops.splice(i, 1);
            // ── 2) CLICK BURST PARTICLES ───────────────────────────────────────
            for(let i = particles.length - 1; i >= 0; i--){
                const p = particles[i];
                p.vy += 0.09;
                p.vx *= 0.96;
                p.x += p.vx;
                p.y += p.vy;
                p.life -= p.decay;
                if (p.life <= 0) {
                    particles.splice(i, 1);
                    continue;
                }
                const pr = Math.max(0.001, p.r * p.life);
                ctx.beginPath();
                ctx.arc(p.x, p.y, pr, 0, Math.PI * 2);
                ctx.fillStyle = R + p.life * 0.95 + ')';
                ctx.fill();
            }
            // ── 3) GHOST RING (slowest) ────────────────────────────────────────
            ctx.beginPath();
            ctx.arc(f3x, f3y, (curSize + 18) * ps, 0, Math.PI * 2);
            ctx.strokeStyle = R + (active ? 0.10 : 0.06) + ')';
            ctx.lineWidth = 1;
            ctx.stroke();
            // ── 4) MID RING (squash/stretch along velocity) ────────────────────
            {
                const angle = Math.atan2(vy, vx), stretch = Math.min(spd / 22, 0.65);
                ctx.save();
                ctx.translate(f2x, f2y);
                ctx.rotate(angle);
                ctx.scale(1 + stretch, 1 / (1 + stretch * 0.55));
                ctx.beginPath();
                ctx.arc(0, 0, (curSize + 7) * ps, 0, Math.PI * 2);
                ctx.strokeStyle = R + (active ? 0.20 : 0.13) + ')';
                ctx.lineWidth = 1.5;
                ctx.stroke();
                ctx.restore();
            }
            // ── 5) ROTATING DASHES (active only) ──────────────────────────────
            if (active && curSize > 14) {
                const dash = Math.max(3, curSize * 0.22);
                ctx.save();
                ctx.translate(f1x, f1y);
                ctx.rotate(rot);
                ctx.beginPath();
                ctx.arc(0, 0, curSize * ps + 11, 0, Math.PI * 2);
                ctx.strokeStyle = R + '0.32)';
                ctx.lineWidth = 1.2;
                ctx.setLineDash([
                    dash,
                    dash * 2.2
                ]);
                ctx.stroke();
                ctx.setLineDash([]);
                ctx.restore();
            }
            // ── 6) MAIN RING ──────────────────────────────────────────────────
            {
                const r = curSize * ps;
                ctx.beginPath();
                ctx.arc(f1x, f1y, r, 0, Math.PI * 2);
                if (active) {
                    const gf = ctx.createRadialGradient(f1x, f1y, 0, f1x, f1y, r);
                    gf.addColorStop(0, 'rgba(226,0,16,0.95)');
                    gf.addColorStop(1, 'rgba(180,0,10,0.82)');
                    ctx.fillStyle = gf;
                    ctx.fill();
                    const gg = ctx.createRadialGradient(f1x, f1y, r * 0.6, f1x, f1y, r * 2.2);
                    gg.addColorStop(0, 'rgba(226,0,16,0.18)');
                    gg.addColorStop(1, 'rgba(226,0,16,0)');
                    ctx.beginPath();
                    ctx.arc(f1x, f1y, r * 2.2, 0, Math.PI * 2);
                    ctx.fillStyle = gg;
                    ctx.fill();
                } else {
                    ctx.strokeStyle = 'rgba(226,0,16,0.65)';
                    ctx.lineWidth = 1.5;
                    ctx.stroke();
                }
            }
            // ── 7) LABEL ──────────────────────────────────────────────────────
            if (cfg.label && curSize > 22) {
                const alpha = Math.min(1, (curSize - 22) / 18);
                ctx.save();
                ctx.translate(f1x, f1y);
                ctx.font = '700 8px -apple-system,"Helvetica Neue",sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillStyle = `rgba(255,255,255,${alpha})`;
                // Avoid CanvasRenderingContext2D.letterSpacing so the loop does not crash
                // on browsers that do not implement that property.
                drawCenteredSpacedText(ctx, cfg.label, 0, 0, 2.5);
                ctx.restore();
            }
            // ── 8) CENTER DOT ─────────────────────────────────────────────────
            const dr = pressing ? 2.5 : 4.5;
            ctx.beginPath();
            ctx.arc(mx, my, dr, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(226,0,16,1)';
            ctx.fill();
            ctx.beginPath();
            ctx.arc(mx - 1, my - 1, dr * 0.28, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255,255,255,0.55)';
            ctx.fill();
            // ── 9) MAGNETIC TETHER ────────────────────────────────────────────
            if (magStr > 0.04) {
                const ang = Math.atan2(magY - f1y, magX - f1x);
                ctx.save();
                ctx.globalAlpha = magStr * 0.38;
                ctx.beginPath();
                ctx.moveTo(f1x + Math.cos(ang) * curSize, f1y + Math.sin(ang) * curSize);
                ctx.lineTo(magX, magY);
                ctx.strokeStyle = 'rgba(226,0,16,1)';
                ctx.lineWidth = 1;
                ctx.setLineDash([
                    3,
                    7
                ]);
                ctx.stroke();
                ctx.setLineDash([]);
                ctx.restore();
                ctx.beginPath();
                ctx.arc(magX, magY, 3, 0, Math.PI * 2);
                ctx.fillStyle = R + magStr * 0.7 + ')';
                ctx.fill();
            }
            raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return ()=>{
            cancelAnimationFrame(raf);
            document.removeEventListener('mousemove', snapOnFirstMove, true);
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mousedown', onDown);
            document.removeEventListener('mouseup', onUp);
            document.removeEventListener('mouseleave', onOut);
            document.removeEventListener('mouseenter', onIn);
            window.removeEventListener('mouseup', releasePressing, true);
            window.removeEventListener('blur', releasePressing);
            document.removeEventListener('visibilitychange', releasePressing);
            window.removeEventListener('resize', resize);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        *, *::before, *::after { cursor: none !important; }
        canvas { display: block; }
      `
            }, void 0, false, {
                fileName: "[project]/components/CustomCursor.tsx",
                lineNumber: 312,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                style: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    width: '100vw',
                    height: '100vh',
                    pointerEvents: 'none',
                    zIndex: 999999,
                    display: 'block',
                    willChange: 'transform'
                }
            }, void 0, false, {
                fileName: "[project]/components/CustomCursor.tsx",
                lineNumber: 316,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0ou3och._.js.map