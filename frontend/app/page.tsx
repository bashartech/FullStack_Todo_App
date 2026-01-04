

// "use client"

// import Link from "next/link"
// import { useState, useEffect } from "react"

// export default function Home() {
//   const [isVisible, setIsVisible] = useState(false)

//   useEffect(() => {
//     setIsVisible(true)
//   }, [])

//   return (
//     <div className="min-h-screen bg-black overflow-hidden">
//       {/* Animated background with premium gradient orbs */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
//         <div
//           className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
//           style={{ animationDelay: "1s" }}
//         ></div>
//         <div
//           className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-pulse"
//           style={{ animationDelay: "2s" }}
//         ></div>
//       </div>

//       <div className="relative z-10">
//         {/* Navigation Header */}
//         <nav className="border-b border-neutral-800/50 backdrop-blur-md bg-black/40 sticky top-0 z-50">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
//             <div className="flex items-center gap-2">
//               <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
//                 <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                 </svg>
//               </div>
//               <span className="text-xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
//                 TaskStudio
//               </span>
//             </div>
//             <div className="flex items-center gap-4">
//               <Link href="/login" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
//                 Sign In
//               </Link>
//               <Link
//                 href="/signup"
//                 className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
//               >
//                 Get Started
//               </Link>
//             </div>
//           </div>
//         </nav>

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
//           {/* Hero Section */}
//           <div className="text-center mb-24 animate-fade-in">
//             <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full">
//               <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
//               <span className="text-xs font-medium text-blue-300 uppercase tracking-widest">NEW ERA</span>
//             </div>
//             <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
//               <span className="block text-white mb-2">A New Era Calls for</span>
//               <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">
//                 A New Task Management
//               </span>
//             </h1>
//             <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
//               The next-generation productivity tool with advanced AI-powered insights, real-time collaboration, and
//               intelligent task automation.
//             </p>
//             <div className="flex flex-col sm:flex-row justify-center gap-4">
//               <Link
//                 href="/signup"
//                 className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 inline-flex items-center justify-center gap-2"
//               >
//                 Get Started
//                 <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                 </svg>
//               </Link>
//               <Link
//                 href="/login"
//                 className="px-8 py-3 border border-neutral-600 hover:border-neutral-500 text-white rounded-full font-semibold transition-all duration-300 hover:bg-neutral-900/50"
//               >
//                 Sign In
//               </Link>
//             </div>
//           </div>

//           {/* Features Grid */}
//           <div className="mb-24">
//             <div className="text-center mb-16">
//               <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Powerful Features</h2>
//               <p className="text-gray-400">Everything you need to stay productive and organized</p>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {[
//                 {
//                   icon: "📋",
//                   title: "Smart Task Management",
//                   description:
//                     "Create, organize, and prioritize tasks with intelligent categorization and automated workflows.",
//                 },
//                 {
//                   icon: "🔒",
//                   title: "Bank-Level Security",
//                   description:
//                     "Your data is protected with end-to-end encryption and enterprise-grade security standards.",
//                 },
//                 {
//                   icon: "🔄",
//                   title: "Cross-Device Sync",
//                   description: "Access your tasks seamlessly across all devices with real-time synchronization.",
//                 },
//                 {
//                   icon: "📊",
//                   title: "Advanced Analytics",
//                   description:
//                     "Gain insights into your productivity patterns with beautiful visualizations and reports.",
//                 },
//                 {
//                   icon: "⚡",
//                   title: "Lightning Fast",
//                   description: "Experience blazing-fast performance with optimized loading times and instant updates.",
//                 },
//                 {
//                   icon: "🤖",
//                   title: "AI-Powered Insights",
//                   description: "Get intelligent suggestions and predictions to boost your productivity automatically.",
//                 },
//               ].map((feature, idx) => (
//                 <div
//                   key={idx}
//                   className="group p-6 bg-gradient-to-br from-neutral-900 to-black border border-neutral-800 hover:border-blue-500/50 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
//                 >
//                   <div className="text-4xl mb-4">{feature.icon}</div>
//                   <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
//                   <p className="text-gray-400 text-sm">{feature.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Statistics Section */}
//           <div className="mb-24 bg-gradient-to-r from-neutral-900 via-black to-neutral-900 border border-neutral-800 rounded-2xl p-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Trusted by Teams Worldwide</h2>
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//               {[
//                 { number: "50K+", label: "Active Users" },
//                 { number: "2M+", label: "Tasks Created" },
//                 { number: "99.9%", label: "Uptime" },
//                 { number: "4.8★", label: "Average Rating" },
//               ].map((stat, idx) => (
//                 <div key={idx} className="text-center">
//                   <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
//                     {stat.number}
//                   </div>
//                   <div className="text-gray-400 text-sm">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* How It Works Section */}
//           <div className="mb-24">
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">How It Works</h2>
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//               {[
//                 { step: "01", title: "Sign Up", desc: "Create your account in seconds" },
//                 { step: "02", title: "Add Tasks", desc: "Start organizing your work" },
//                 { step: "03", title: "Collaborate", desc: "Share and work with your team" },
//                 { step: "04", title: "Achieve", desc: "Track progress and succeed" },
//               ].map((item, idx) => (
//                 <div key={idx} className="relative">
//                   <div className="p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl">
//                     <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 font-black text-white text-lg">
//                       {item.step}
//                     </div>
//                     <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
//                     <p className="text-gray-400 text-sm">{item.desc}</p>
//                   </div>
//                   {idx < 3 && (
//                     <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* CTA Section */}
//           <div className="text-center p-12 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border border-blue-500/20 rounded-2xl">
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Productivity?</h2>
//             <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
//               Join thousands of teams already using TaskStudio to stay organized and productive.
//             </p>
//             <Link
//               href="/signup"
//               className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
//             >
//               Start Your Free Trial
//               <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//               </svg>
//             </Link>
//           </div>
//         </div>

//         {/* Footer */}
//         <footer className="border-t border-neutral-800/50 mt-24 py-8 bg-black/40 backdrop-blur-md">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex flex-col md:flex-row items-center justify-between">
//               <div className="flex items-center gap-2 mb-4 md:mb-0">
//                 <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
//                   <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                   </svg>
//                 </div>
//                 <span className="font-semibold text-white">TaskStudio</span>
//               </div>
//               <div className="flex items-center gap-8 text-gray-400 text-sm">
//                 <a href="#" className="hover:text-white transition-colors">
//                   Privacy
//                 </a>
//                 <a href="#" className="hover:text-white transition-colors">
//                   Terms
//                 </a>
//                 <a href="#" className="hover:text-white transition-colors">
//                   Contact
//                 </a>
//               </div>
//             </div>
//             <div className="mt-8 pt-8 border-t border-neutral-800 text-center text-gray-500 text-sm">
//               © 2025 TaskStudio. All rights reserved.
//             </div>
//           </div>
//         </footer>
//       </div>
//     </div>
//   )
// }





"use client"

import Link from "next/link"
import { useRef, useState } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"

/* -----------------------------------------------------
   ELITE BACKGROUND + ANIMATION COMPONENTS
----------------------------------------------------- */

const HeroLineNetwork = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 flex justify-around opacity-20">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"
        />
      ))}
    </div>

    {[...Array(4)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ y: "-10%", opacity: 0 }}
        animate={{ y: "110%", opacity: [0, 0.4, 0] }}
        transition={{
          duration: 10 + i * 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 3,
        }}
        className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"
      />
    ))}

    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[120px]" />
  </div>
)

const SectionHeader = ({
  title,
  subtitle,
  badge,
}: {
  title: string
  subtitle?: string
  badge?: string
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="mb-24">
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6"
        >
          <div className="w-1 h-1 rounded-full bg-white animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
            {badge}
          </span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1 }}
        className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-[1.1]"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-neutral-500 max-w-xl text-lg font-medium leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}

/* -----------------------------------------------------
   FEATURE + STAT COMPONENTS
----------------------------------------------------- */

const FeatureCard = ({ title, description, icon: Icon, index }: any) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative p-10 bg-neutral-950/50 border border-white/[0.05] rounded-3xl overflow-hidden group hover:border-white/20 transition-all duration-700 backdrop-blur-3xl"
    >
      <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-white/[0.02] blur-[80px] group-hover:bg-white/[0.05] transition-all duration-700" />

      <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/10 group-hover:border-white/40 transition-colors" />

      <div className="relative z-10">
        <div className="mb-10 w-12 h-12 bg-white flex items-center justify-center rounded-2xl text-black shadow-[0_0_30px_rgba(255,255,255,0.15)] group-hover:scale-110 transition-transform duration-500">
          <Icon />
        </div>

        <h3 className="text-2xl font-black text-white mb-4 tracking-tight">
          {title}
        </h3>

        <p className="text-neutral-500 leading-relaxed text-base font-medium group-hover:text-neutral-300 transition-colors">
          {description}
        </p>
      </div>
    </motion.div>
  )
}

const StatItem = ({ number, label }: any) => {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0.3, 0.45], [0, 1])
  const y = useTransform(scrollYProgress, [0.3, 0.45], [50, 0])

  return (
    <motion.div style={{ opacity, y }} className="relative group">
      <div className="text-5xl md:text-8xl font-black text-white mb-4 tracking-tighter tabular-nums leading-none">
        {number}
      </div>
      <div className="h-[1px] w-12 bg-white/20 mb-4 group-hover:w-24 transition-all duration-500" />
      <div className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500 group-hover:text-white transition-colors">
        {label}
      </div>
    </motion.div>
  )
}

/* -----------------------------------------------------
   MAIN PAGE
----------------------------------------------------- */

export default function Home() {
  const containerRef = useRef(null)

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans antialiased overflow-x-hidden"
    >
      {/* ---------------- HEADER / NAV ---------------- */}
      <nav className="fixed top-0 w-full z-[100] border-b border-white/[0.05] bg-black/40 backdrop-blur-2xl">
        <div className="max-w-[1400px] mx-auto px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-white rounded-xl rotate-45 group-hover:rotate-90 transition-transform duration-700" />
              <div className="relative z-10 w-5 h-5 bg-black rounded-sm rotate-45" />
            </div>
            <span className="text-xl font-black tracking-tighter uppercase">
              TaskStudio
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-12">
            {/* {["Features", "Stats", "How It Works"].map((item) => ( */}
              <Link
                
                href="#features"
                className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500 hover:text-white transition-colors relative group py-2"
              >
                Feature
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-500" />
              </Link>
              <Link
                
                href="#implementation"
                className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500 hover:text-white transition-colors relative group py-2"
              >
                How It Works
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-500" />
              </Link>
              <Link
                
                href="#stats"
                className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500 hover:text-white transition-colors relative group py-2"
              >
                Stats
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-500" />
              </Link>
            {/* ))} */}
          </div>

          <div className="flex items-center gap-8">
            <Link
              href="/login"
              className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 hover:text-white transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="px-8 py-3 bg-white text-black text-[11px] font-black uppercase tracking-[0.2em] rounded-full hover:scale-105 active:scale-95 transition-all"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        {/* ---------------- HERO ---------------- */}
        <section id="hero" className="relative min-h-screen flex flex-col justify-center px-8 overflow-hidden">
          <HeroLineNetwork />

          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute bottom-0 w-[200%] left-[-50%] h-[70%] opacity-[0.12]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                backgroundSize: "100px 100px",
                maskImage:
                  "radial-gradient(ellipse at bottom, black, transparent 70%)",
                transform: "perspective(1200px) rotateX(75deg)",
                transformOrigin: "bottom",
              }}
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto w-full">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-[clamp(3.2rem,8vw,6rem)] font-black tracking-tighter leading-[0.85] mb-12"
            >
              A New Era of <span className="text-neutral-600">Task</span>
              <br />
              Management
            </motion.h1>

            <p className="max-w-2xl text-xl md:text-2xl text-neutral-500 mb-16 font-medium">
              AI-powered productivity, real-time collaboration, and intelligent
              automation — all in one platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="/signup">
                <button className="px-12 py-6 bg-white text-black rounded-2xl font-black text-lg hover:scale-[1.03] transition">
                  Get Started
                </button>
              </Link>
              <Link href="/login">
                <button className="px-12 py-6 border border-white/10 rounded-2xl font-black text-lg hover:bg-neutral-900 transition">
                  Sign In
                </button>
              </Link>
            </div>
          </div>
        </section>
        {/* ---------------- FEATURES ---------------- */}
        <section id="features" className="py-40 px-8 relative bg-black">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/[0.015] blur-[100px] rounded-full -translate-x-1/2" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/[0.015] blur-[100px] rounded-full translate-x-1/2" />

          <div className="max-w-[1400px] mx-auto relative z-10">
            <SectionHeader
              badge="Features"
              title="Powerful Features"
              subtitle="Everything you need to stay productive and organized."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Smart Task Management",
                  desc: "Create, organize, and prioritize tasks with intelligent categorization and automated workflows.",
                  icon: () => <div className="w-5 h-5 bg-black border-2 border-current rounded-sm rotate-45" />,
                },
                {
                  title: "Bank-Level Security",
                  desc: "Your data is protected with end-to-end encryption and enterprise-grade security standards.",
                  icon: () => <div className="w-5 h-5 rounded-full border-2 border-current" />,
                },
                {
                  title: "Cross-Device Sync",
                  desc: "Access your tasks seamlessly across all devices with real-time synchronization.",
                  icon: () => <div className="w-5 h-5 border-2 border-current rounded-md" />,
                },
                {
                  title: "Advanced Analytics",
                  desc: "Gain insights into your productivity patterns with beautiful visualizations and reports.",
                  icon: () => (
                    <div className="flex gap-1 items-end h-5">
                      <div className="w-1.5 h-full bg-current opacity-40" />
                      <div className="w-1.5 h-[60%] bg-current" />
                      <div className="w-1.5 h-[80%] bg-current opacity-70" />
                    </div>
                  ),
                },
                {
                  title: "Lightning Fast",
                  desc: "Experience blazing-fast performance with optimized loading times and instant updates.",
                  icon: () => <span className="font-black text-sm">SDK</span>,
                },
                {
                  title: "AI-Powered Insights",
                  desc: "Get intelligent suggestions and predictions to boost your productivity automatically.",
                  icon: () => <div className="w-5 h-5 bg-current rounded-full animate-pulse opacity-40" />,
                },
              ].map((f, i) => (
                <FeatureCard
                  key={i}
                  title={f.title}
                  description={f.desc}
                  icon={f.icon}
                  index={i}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- STATISTICS ---------------- */}
        <section id="stats" className="py-56 px-8 relative overflow-hidden border-y border-white/[0.05]">
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  x: [0, 100, 0],
                  y: [0, -50, 0],
                  opacity: [0.05, 0.1, 0.05],
                }}
                transition={{
                  duration: 15 + i * 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute w-[1px] h-32 bg-white"
                style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
              />
            ))}
          </div>

          <div className="flex justify-center items-center">
             <SectionHeader
              badge="Stats"
              title="Trusted by Teams Worldwide"
              subtitle="Reviews and Stats of our product."
            />
           
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 relative z-10">
            <StatItem number="50K+" label="Active Users" />
            <StatItem number="2M+" label="Tasks Created" />
            <StatItem number="99.9%" label="Uptime" />
            <StatItem number="4.8★" label="Average Rating" />
          </div>
        </section>

        {/* ---------------- IMPLEMENTATION ---------------- */}
        <section id="implementation" className="py-48 px-8 overflow-hidden">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col lg:flex-row gap-32 items-center">
              <div className="flex-1">
                <SectionHeader
                  badge="steps"
                  title="How It Works"
                />

                <div className="space-y-16">
                  {[
                    { title: "Sign Up", desc: "Create your account in seconds." },
                    { title: "Add Tasks", desc: "Start organizing your work." },
                    { title: "Collaborate", desc: "Share and work with your team." },
                    { title: "Achieve", desc: "Track progress and succeed." },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                      className="group relative pl-12 border-l border-white/10 hover:border-white/40 transition-colors"
                    >
                      <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] bg-black border border-white/20 rounded-full group-hover:bg-white group-hover:border-white transition-all" />
                      <h3 className="text-sm font-black uppercase tracking-[0.3em] text-neutral-500 group-hover:text-white transition-colors mb-4">
                        {item.title}
                      </h3>
                      <p className="text-xl font-medium text-neutral-400 group-hover:text-neutral-300 transition-colors max-w-sm">
                        {item.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="flex-1 w-full relative group">
                <div className="relative aspect-square bg-neutral-950 rounded-[4rem] border border-white/[0.07] overflow-hidden flex items-center justify-center shadow-[0_0_100px_rgba(255,255,255,0.02)] transition-transform duration-700 group-hover:scale-[1.02]">
                  <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                      backgroundImage:
                        "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #2a2828ff 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
                    }}
                  />

                  <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10 w-48 h-48 flex items-center justify-center"
                  >
                    <div className="absolute inset-0 bg-white/5 blur-[60px] rounded-full animate-pulse" />
                    <div className="w-32 h-32 bg-white rounded-[2rem] rotate-45 flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.2)]">
                      <div className="w-12 h-12 bg-black rounded-lg rotate-45" />
                    </div>
                  </motion.div>

                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear" }}
                      className="absolute w-full h-full"
                    >
                      <div
                        className="absolute top-0 left-1/2 w-[1px] h-full bg-white/10"
                        style={{ transform: `rotate(${i * 30}deg)` }}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ---------------- CTA: FINAL IMPACT ---------------- */}
        <section id="cta" className="py-48 px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto rounded-[5rem] bg-[#2a2828ff] text-white p-20 md:p-32 relative overflow-hidden text-center group"
          >
            {/* Subtle background lines for texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-full h-[1px] bg-black"
                  style={{ top: `${i * 5}%` }}
                />
              ))}
            </div>

            <h2 className="text-[clamp(2rem,6vw,5rem)] font-black tracking-tighter leading-[0.99] mb-12">
              Ready to Transform
              Your Productivity?
            </h2>
            <p className="text-xl md:text-2xl font-medium mb-16 max-w-xl mx-auto opacity-60">
              Join thousands of teams already using TaskStudio to stay organized and productive.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/signup">
              <button className="px-16 py-7 bg-white text-black rounded-3xl font-black text-xl hover:scale-105 transition-transform shadow-2xl">
                Start Your Free Trial
              </button>
              </Link>
              {/* <button className="px-16 py-7 border-2 border-black rounded-3xl font-black text-xl hover:bg-black/5 transition-colors">
                Contact Sales
              </button> */}
            </div>
          </motion.div>
        </section>

        {/* ---------------- FOOTER ---------------- */}
        <footer id="footer" className="py-32 px-8 border-t border-white/[0.05] relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 relative z-10">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded-lg rotate-45" />
                <span className="font-black tracking-tighter uppercase text-xl">TaskStudio</span>
              </div>
              <p className="text-neutral-500 font-medium text-sm leading-relaxed max-w-xs">
                Defining the next generation of professional workflow orchestration. Sub-millisecond latency for
                world-class teams.
              </p>
            </div>

        
              <div className="space-y-8">
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Links</h4>
                <ul className="space-y-4 flex lg:flex-row flex-col">
                  {/* {col.links.map((link) => ( */}
                    <li className="space-x-2 flex lg:flex-row lg:gap-[11px] flex-row">
                      <Link href="#features" className="text-sm font-medium text-neutral-500 hover:text-white transition-colors">
                        Features
                      </Link>
                      <Link href="#stats" className="text-sm font-medium text-neutral-500 hover:text-white transition-colors">
                        Stats
                      </Link>
                      <Link href="#implementation" className="text-sm font-medium text-neutral-500 hover:text-white transition-colors">
                        How It Works
                      </Link>
                      <Link href="/dashboard" className="text-sm font-medium text-neutral-500 hover:text-white transition-colors">
                        Dashboard
                      </Link>
                    </li>

                </ul>
              </div>

          </div>

          <div className="max-w-[1400px] mx-auto mt-32 pt-12 border-t border-white/[0.05] flex flex-col md:flex-row justify-center gap-8 items-center">
            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-700">
              © 2026 TaskStudio. All rights reserved.
            </div>
           
          </div>
        </footer>
      </main>
    </div>
  )
}
