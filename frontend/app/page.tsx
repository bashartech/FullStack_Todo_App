// 'use client';

// import Link from 'next/link';
// import { useState, useEffect } from 'react';

// export default function Home() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-animated bg-noise">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         {/* Hero Section */}
//         <div className="text-center animate-fade-in">
//           <h1 className="text-4xl tracking-tight font-extrabold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent sm:text-5xl md:text-6xl">
//             <span className="block">Organize Your Work. Control Your Time.</span>
//           </h1>
//           <p className="mt-6 max-w-lg mx-auto text-xl text-gray-300 sm:max-w-3xl">
//             A secure, full-featured task management application that helps you stay organized and productive.
//             Sign up today to start managing your tasks efficiently.
//           </p>
//           <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
//             <Link
//               href="/signup"
//               className="btn-primary flex items-center justify-center"
//             >
//               Get Started
//             </Link>
//             <Link
//               href="/login"
//               className="btn-secondary flex items-center justify-center"
//             >
//               Sign In
//             </Link>
//           </div>
//         </div>

//         {/* Features Section */}
//         <div className="mt-16 max-w-5xl mx-auto animate-slide-up">
//           <div className="card-glass">
//             <h2 className="text-2xl font-bold text-white mb-6 text-center">Features</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               <div className="text-center transform hover:scale-105 transition-all duration-300">
//                 <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-500/20 border border-blue-500/30">
//                   <svg className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
//                   </svg>
//                 </div>
//                 <h3 className="mt-4 text-lg font-medium text-white">Task Management</h3>
//                 <p className="mt-2 text-base text-gray-400">
//                   Create, update, and organize your tasks with ease.
//                 </p>
//               </div>

//               <div className="text-center transform hover:scale-105 transition-all duration-300">
//                 <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-500/20 border border-green-500/30">
//                   <svg className="h-8 w-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//                   </svg>
//                 </div>
//                 <h3 className="mt-4 text-lg font-medium text-white">Secure & Private</h3>
//                 <p className="mt-2 text-base text-gray-400">
//                   Your data is protected with industry-standard security.
//                 </p>
//               </div>

//               <div className="text-center transform hover:scale-105 transition-all duration-300">
//                 <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-violet-500/20 border border-violet-500/30">
//                   <svg className="h-8 w-8 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
//                   </svg>
//                 </div>
//                 <h3 className="mt-4 text-lg font-medium text-white">Cross-Device Sync</h3>
//                 <p className="mt-2 text-base text-gray-400">
//                   Access your tasks from any device, anywhere.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* How It Works Section */}
//         <div className="mt-16 max-w-3xl mx-auto animate-slide-up">
//           <div className="card-glass">
//             <h2 className="text-2xl font-bold text-white mb-6 text-center">How It Works</h2>
//             <div className="space-y-6">
//               <div className="flex items-start animate-fade-in" style={{ animationDelay: '0.1s' }}>
//                 <div className="flex-shrink-0">
//                   <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500/20 border border-blue-500/30">
//                     <span className="text-blue-400 font-bold text-lg">1</span>
//                   </div>
//                 </div>
//                 <div className="ml-4">
//                   <h3 className="text-lg font-medium text-white">Sign Up</h3>
//                   <p className="mt-2 text-base text-gray-400">
//                     Create your account in seconds with email or social login.
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start animate-fade-in" style={{ animationDelay: '0.2s' }}>
//                 <div className="flex-shrink-0">
//                   <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500/20 border border-blue-500/30">
//                     <span className="text-blue-400 font-bold text-lg">2</span>
//                   </div>
//                 </div>
//                 <div className="ml-4">
//                   <h3 className="text-lg font-medium text-white">Add Tasks</h3>
//                   <p className="mt-2 text-base text-gray-400">
//                     Create tasks with titles, descriptions, and due dates.
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start animate-fade-in" style={{ animationDelay: '0.3s' }}>
//                 <div className="flex-shrink-0">
//                   <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500/20 border border-blue-500/30">
//                     <span className="text-blue-400 font-bold text-lg">3</span>
//                   </div>
//                 </div>
//                 <div className="ml-4">
//                   <h3 className="text-lg font-medium text-white">Stay Organized</h3>
//                   <p className="mt-2 text-base text-gray-400">
//                     Mark tasks as complete and manage your productivity.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Additional Professional Sections */}
//         <div className="mt-16 max-w-5xl mx-auto animate-slide-up">
//           <div className="card-glass">
//             <h2 className="text-2xl font-bold text-white mb-6 text-center">Why Choose Our Platform?</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               <div>
//                 <h3 className="text-lg font-medium text-white mb-2">Advanced Security</h3>
//                 <p className="text-gray-400">
//                   Enterprise-grade security with end-to-end encryption, ensuring your data remains private and protected at all times.
//                 </p>
//               </div>
//               <div>
//                 <h3 className="text-lg font-medium text-white mb-2">Intuitive Interface</h3>
//                 <p className="text-gray-400">
//                   Designed with user experience in mind, our platform provides a seamless and intuitive experience for maximum productivity.
//                 </p>
//               </div>
//               <div>
//                 <h3 className="text-lg font-medium text-white mb-2">Powerful Features</h3>
//                 <p className="text-gray-400">
//                   Advanced filtering, tagging, and prioritization tools to help you manage complex workflows with ease.
//                 </p>
//               </div>
//               <div>
//                 <h3 className="text-lg font-medium text-white mb-2">Real-time Sync</h3>
//                 <p className="text-gray-400">
//                   All your data syncs in real-time across devices, ensuring you always have access to the latest information.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Testimonial Section */}
//         <div className="mt-16 max-w-3xl mx-auto animate-slide-up">
//           <div className="card-glass text-center">
//             <div className="flex justify-center mb-4">
//               <div className="flex items-center">
//                 {[...Array(5)].map((_, i) => (
//                   <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
//                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                   </svg>
//                 ))}
//               </div>
//             </div>
//             <blockquote className="text-lg text-gray-300 italic">
//               "This platform has transformed how our team manages projects. The intuitive interface and powerful features have increased our productivity by 40%."
//             </blockquote>
//             <p className="mt-4 text-gray-400 font-medium">— Sarah Johnson, Product Manager</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Animated background with premium gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10">
        {/* Navigation Header */}
        <nav className="border-b border-neutral-800/50 backdrop-blur-md bg-black/40 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                TaskFlow
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/login" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                Sign In
              </Link>
              <Link
                href="/signup"
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
              >
                Get Started
              </Link>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          {/* Hero Section */}
          <div className="text-center mb-24 animate-fade-in">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-blue-300 uppercase tracking-widest">NEW ERA</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
              <span className="block text-white mb-2">A New Era Calls for</span>
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">
                A New Task Management
              </span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              The next-generation productivity tool with advanced AI-powered insights, real-time collaboration, and
              intelligent task automation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/signup"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 inline-flex items-center justify-center gap-2"
              >
                Get Started
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/login"
                className="px-8 py-3 border border-neutral-600 hover:border-neutral-500 text-white rounded-full font-semibold transition-all duration-300 hover:bg-neutral-900/50"
              >
                Sign In
              </Link>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Powerful Features</h2>
              <p className="text-gray-400">Everything you need to stay productive and organized</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: "📋",
                  title: "Smart Task Management",
                  description:
                    "Create, organize, and prioritize tasks with intelligent categorization and automated workflows.",
                },
                {
                  icon: "🔒",
                  title: "Bank-Level Security",
                  description:
                    "Your data is protected with end-to-end encryption and enterprise-grade security standards.",
                },
                {
                  icon: "🔄",
                  title: "Cross-Device Sync",
                  description: "Access your tasks seamlessly across all devices with real-time synchronization.",
                },
                {
                  icon: "📊",
                  title: "Advanced Analytics",
                  description:
                    "Gain insights into your productivity patterns with beautiful visualizations and reports.",
                },
                {
                  icon: "⚡",
                  title: "Lightning Fast",
                  description: "Experience blazing-fast performance with optimized loading times and instant updates.",
                },
                {
                  icon: "🤖",
                  title: "AI-Powered Insights",
                  description: "Get intelligent suggestions and predictions to boost your productivity automatically.",
                },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="group p-6 bg-gradient-to-br from-neutral-900 to-black border border-neutral-800 hover:border-blue-500/50 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Statistics Section */}
          <div className="mb-24 bg-gradient-to-r from-neutral-900 via-black to-neutral-900 border border-neutral-800 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Trusted by Teams Worldwide</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "50K+", label: "Active Users" },
                { number: "2M+", label: "Tasks Created" },
                { number: "99.9%", label: "Uptime" },
                { number: "4.8★", label: "Average Rating" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works Section */}
          <div className="mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Sign Up", desc: "Create your account in seconds" },
                { step: "02", title: "Add Tasks", desc: "Start organizing your work" },
                { step: "03", title: "Collaborate", desc: "Share and work with your team" },
                { step: "04", title: "Achieve", desc: "Track progress and succeed" },
              ].map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 font-black text-white text-lg">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                  {idx < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center p-12 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border border-blue-500/20 rounded-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Productivity?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of teams already using TaskFlow to stay organized and productive.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
            >
              Start Your Free Trial
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-neutral-800/50 mt-24 py-8 bg-black/40 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center gap-2 mb-4 md:mb-0">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="font-semibold text-white">TaskFlow</span>
              </div>
              <div className="flex items-center gap-8 text-gray-400 text-sm">
                <a href="#" className="hover:text-white transition-colors">
                  Privacy
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Terms
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-neutral-800 text-center text-gray-500 text-sm">
              © 2025 TaskFlow. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
