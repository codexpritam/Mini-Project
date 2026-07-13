// src/pages/Home.jsx

import { Link } from "react-router-dom"
import { useState } from "react"

import {
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Wallet,
  Users,
  Sparkles,
  ShieldCheck,
  ChevronDown
} from "lucide-react"

function Home() {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [activeFaq, setActiveFaq] = useState(null)

  const features = [
    {
      title: "Easy to Use",
      desc: "Simple and intuitive interface to manage your money without confusion.",
      icon: CheckCircle2
    },
    {
      title: "Financial Insights",
      desc: "Understand spending patterns with smart analytics and reports.",
      icon: BarChart3
    },
    {
      title: "Daily Tracking",
      desc: "Track every rupee and stay in control of your expenses.",
      icon: Wallet
    },
    {
      title: "Group Expenses",
      desc: "Split bills and settle balances with friends easily.",
      icon: Users
    },
    {
      title: "AI Smart Advice",
      desc: "Get suggestions to save more and spend smarter.",
      icon: Sparkles
    },
    {
      title: "Safe & Secure",
      desc: "Modern authentication and protected data systems.",
      icon: ShieldCheck
    }
  ]

  const testimonials = [
    {
      text: "Spendora transformed how I manage money.",
      name: "Yash K."
    },
    {
      text: "Now I finally know where my money goes.",
      name: "Meet G."
    },
    {
      text: "The group split feature is amazing.",
      name: "Akshay L."
    }
  ]

  const faqs = [
    {
      q: "What is Spendora?",
      a: "Spendora is a smart platform for expense tracking, budgeting and group spending."
    },
    {
      q: "Is it free?",
      a: "Yes, major core features are free."
    },
    {
      q: "Is my data safe?",
      a: "Yes, your data is securely managed."
    },
    {
      q: "Can I split expenses?",
      a: "Yes, create groups and settle balances easily."
    }
  ]

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 scroll-smooth">

      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200">
        <div className="max-w-[1450px] mx-auto px-4 md:px-8 h-20 md:h-24 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-0">
            <img
              src="/logo.png"
              alt="Spendora"
              className="h-10 md:h-14 w-auto object-contain -mr-2"
            />
            <h1 className="text-2xl md:text-4xl font-bold leading-none">
              <span className="text-slate-900">Spend</span>
              <span className="text-cyan-500">ora</span>
            </h1>
          </Link>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/login"
              className="px-5 py-3 rounded-xl border border-slate-300 hover:bg-slate-100 transition"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg hover:opacity-90 transition"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden text-2xl p-2"
          >
            {mobileMenu ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="absolute top-20 right-4 w-[220px] bg-white border border-slate-200 shadow-xl rounded-2xl flex flex-col items-center gap-3 py-6 md:hidden z-50 animate-in fade-in zoom-in-95 duration-200">
            <Link
              to="/login"
              onClick={() => setMobileMenu(false)}
              className="w-[90%] text-center px-5 py-3 rounded-xl border border-slate-300 hover:bg-slate-50 transition"
            >
              Login
            </Link>
            <Link
              to="/register"
              onClick={() => setMobileMenu(false)}
              className="w-[90%] text-center px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-md"
            >
              Get Started
            </Link>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-8 py-14 md:py-24 grid lg:grid-cols-12 gap-10 md:gap-14 items-center">
        
        {/* Left Side Content */}
        <div className="lg:col-span-5">
          <p className="text-cyan-600 font-semibold mb-4 tracking-wide uppercase text-sm">
            Smart Finance Platform
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6 text-slate-900">
            Take control of <br /> your money.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-xl">
            Track expenses, manage budgets, split bills and unlock smarter
            financial decisions with Spendora.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/register"
              className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-xl flex items-center justify-center gap-2 hover:opacity-95 transition"
            >
              Start Free
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/login"
              className="w-full sm:w-auto px-7 py-4 rounded-2xl border border-slate-300 font-semibold bg-white hover:bg-slate-50 transition text-center"
            >
              Login
            </Link>
          </div>
        </div>

        {/* Right Side Updated AI Container */}
        <div className="lg:col-span-7 bg-gradient-to-br from-indigo-950 to-slate-950 text-white rounded-3xl shadow-2xl border border-indigo-500/20 p-5 md:p-8">
          
          {/* Container Header */}
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="text-amber-400 fill-amber-400 shrink-0" size={22} />
            <h3 className="text-lg md:text-xl font-bold tracking-wide">
              AI Financial Insights
            </h3>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-6">
            
            {/* Financial Score */}
            <div className="bg-indigo-900/30 border border-indigo-500/10 rounded-xl p-3 text-center backdrop-blur-sm shadow-inner">
              <p className="text-[10px] uppercase tracking-wider text-indigo-200/60 font-medium whitespace-nowrap">
                Financial Score
              </p>
              <h4 className="text-lg font-extrabold mt-2 text-emerald-400">
                85/100
              </h4>
            </div>

            {/* Next Month Pred */}
            <div className="bg-indigo-900/30 border border-indigo-500/10 rounded-xl p-3 text-center backdrop-blur-sm shadow-inner">
              <p className="text-[10px] uppercase tracking-wider text-indigo-200/60 font-medium whitespace-nowrap">
                Next Month Pred.
              </p>
              <h4 className="text-lg font-extrabold mt-2 text-slate-100">
                ₹0
              </h4>
            </div>

            {/* Top Category */}
            <div className="bg-indigo-900/30 border border-indigo-500/10 rounded-xl p-3 text-center backdrop-blur-sm shadow-inner">
              <p className="text-[10px] uppercase tracking-wider text-indigo-200/60 font-medium whitespace-nowrap">
                Top Category
              </p>
              <h4 className="text-lg font-extrabold mt-2 text-amber-500">
                Travel
              </h4>
            </div>

            {/* Target Savings */}
            <div className="bg-indigo-900/30 border border-indigo-500/10 rounded-xl p-3 text-center backdrop-blur-sm shadow-inner">
              <p className="text-[10px] uppercase tracking-wider text-indigo-200/60 font-medium whitespace-nowrap">
                Target Savings
              </p>
              <h4 className="text-lg font-extrabold mt-2 text-yellow-400">
                ₹3600
              </h4>
            </div>

            {/* Safe Daily Limit */}
            <div className="bg-indigo-900/30 border border-indigo-500/10 rounded-xl p-3 text-center backdrop-blur-sm shadow-inner col-span-2 sm:col-span-1">
              <p className="text-[10px] uppercase tracking-wider text-indigo-200/60 font-medium whitespace-nowrap">
                Safe Daily Limit
              </p>
              <h4 className="text-lg font-extrabold mt-2 text-cyan-400">
                ₹200
              </h4>
            </div>

          </div>

          {/* Bottom Advice Box */}
          <div className="bg-indigo-900/20 border border-indigo-500/10 rounded-xl px-4 py-3.5 flex items-start gap-3 shadow-inner">
            <span className="text-base leading-none shrink-0" role="img" aria-label="bulb">💡</span>
            <p className="text-xs md:text-sm text-indigo-200/90 italic leading-relaxed font-medium">
              <span className="font-bold text-white not-italic">AI Advisor Says:</span> "Budget mein ho, badhiya! Travel pe kharcha zyaada hai, thoda plan karo to aur save kar sakte ho. Aage bhi aise hi smart raho!"
            </p>
          </div>

        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white border-y border-slate-200 py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Features packed with power</h2>
            <p className="text-slate-600 text-lg">Everything you need to handle personal and group finances in one beautiful app.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feat, index) => {
              const IconComponent = feat.icon;
              return (
                <div key={index} className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-xl transition group duration-300">
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600 group-hover:bg-cyan-500 group-hover:text-white transition duration-300 mb-5">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-slate-800">{feat.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feat.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-8 py-20 md:py-28">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Loved by smart savers</h2>
          <p className="text-slate-600 text-lg">See how users are achieving financial freedom using Spendora.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <p className="text-slate-700 italic text-lg leading-relaxed mb-6">"{test.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
                  {test.name[0]}
                </div>
                <h4 className="font-bold text-slate-800">{test.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs Section */}
      <section className="bg-slate-100 border-t border-slate-200 py-20 md:py-28">
        <div className="max-w-[800px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Frequently Asked Questions</h2>
            <p className="text-slate-600">Kuch aam sawal jo log humse poochte hain.</p>
          </div>
          <div className="grid gap-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full text-left px-6 py-5 font-bold text-slate-800 flex items-center justify-between gap-4 hover:bg-slate-50 transition"
                >
                  <span>{faq.q}</span>
                  <ChevronDown size={20} className={`text-slate-400 transition-transform duration-300 ${activeFaq === index ? "rotate-180" : ""}`} />
                </button>
                {activeFaq === index && (
                  <div className="px-6 pb-5 pt-1 text-slate-600 border-t border-slate-100 bg-slate-50/50 animate-in fade-in slide-in-from-top-2 duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-slate-950 text-white py-16 md:py-24 text-center px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">Ready to master your finances?</h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
            Abhi join karein aur apne saare kharche seamlessly manage karein bilkul free me.
          </p>
          <Link
            to="/register"
            className="inline-flex items-center gap-2 bg-white text-slate-950 font-bold px-8 py-4 rounded-2xl shadow-xl hover:bg-slate-100 transition duration-200 text-lg"
          >
            Create Your Account
            <ArrowRight size={20} />
          </Link>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(6,182,212,0.15),transparent_60%)] pointer-events-none" />
      </section>

    </div>
  )
}

export default Home