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

  const [mobileMenu, setMobileMenu] =
    useState(false)

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
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200">

        <div className="max-w-[1450px] mx-auto px-4 md:px-8 h-24 flex items-center justify-between">

          <Link
            to="/"
            className="flex items-center gap-0"
          >

            <img
              src="/logo.png"
              alt="Spendora"
              className="h-12 md:h-14 w-auto object-contain -mr-2"
            />

            <h1 className="text-3xl md:text-5xl font-bold leading-none">
              <span className="text-slate-900">
                Spend
              </span>

              <span className="text-cyan-500">
                ora
              </span>
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
            onClick={() =>
              setMobileMenu(!mobileMenu)
            }
            className="md:hidden text-3xl"
          >
            ☰
          </button>

        </div>

        {/* Mobile Menu */}
        {
          mobileMenu && (

            <div className="
              absolute
              top-20
              left-0
              w-[220px]
              bg-white
              border-b
              border-slate-200
              shadow-lg
              flex
              flex-col
              items-center
              gap-3
              py-6
              md:hidden
              z-50
            ">

              <Link
                to="/login"
                onClick={() =>
                  setMobileMenu(false)
                }
                className="
                  w-[90%]
                  text-center
                  px-5 py-3
                  rounded-xl
                  border
                  border-slate-300
                "
              >
                Login
              </Link>

              <Link
                to="/register"
                onClick={() =>
                  setMobileMenu(false)
                }
                className="
                  w-[90%]
                  text-center
                  px-5 py-3
                  rounded-xl
                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-600
                  text-white
                  font-semibold
                "
              >
                Get Started
              </Link>

            </div>

          )
        }

      </header>

      {/* Hero */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-8 py-14 md:py-24 grid md:grid-cols-2 gap-10 md:gap-20 items-center">

        <div>

          <p className="text-cyan-600 font-semibold mb-4">
            Smart Finance Platform
          </p>

          <h2 className="text-4xl md:text-8xl font-bold leading-tight tracking-tight mb-6">
            Take control of
            <br />
            your money.
          </h2>

          <p className="text-lg md:text-xl text-slate-600 leading-9 mb-10 max-w-xl">
            Track expenses, manage budgets,
            split bills and unlock smarter
            financial decisions with Spendora.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">

            <Link
              to="/register"
              className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-xl flex items-center justify-center gap-2"
            >
              Start Free
              <ArrowRight size={20} />
            </Link>

            <Link
              to="/login"
              className="w-full sm:w-auto px-7 py-4 rounded-2xl border border-slate-300 font-semibold hover:bg-white transition text-center"
            >
              Login
            </Link>

          </div>

        </div>

        {/* Right Mockup */}
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 p-5 md:p-8">

          <div className="grid gap-5">

            <div className="rounded-2xl bg-slate-900 text-white p-6">

              <p className="text-slate-400 mb-2">
                Monthly Savings
              </p>

              <h3 className="text-3xl md:text-4xl font-bold text-cyan-400">
                ₹45,220
              </h3>

            </div>

            <div className="grid grid-cols-2 gap-5">

              <div className="rounded-2xl bg-slate-100 p-5">

                <p className="text-slate-500 text-sm">
                  Expense
                </p>

                <h4 className="text-xl md:text-2xl font-bold mt-2">
                  ₹18,400
                </h4>

              </div>

              <div className="rounded-2xl bg-slate-100 p-5">

                <p className="text-slate-500 text-sm">
                  Budget Left
                </p>

                <h4 className="text-xl md:text-2xl font-bold mt-2 text-green-600">
                  ₹11,600
                </h4>

              </div>

            </div>

            <div className="rounded-2xl bg-slate-100 p-5">

              <p className="text-slate-500 text-sm">
                AI Insight
              </p>

              <p className="mt-2 font-semibold">
                Reduce food spending by 12%
                this month.
              </p>

            </div>

          </div>

        </div>

      </section>

    </div>
  )
}

export default Home