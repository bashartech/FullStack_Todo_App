

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
