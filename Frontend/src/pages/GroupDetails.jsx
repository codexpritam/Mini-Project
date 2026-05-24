// src/pages/GroupDetails.jsx

import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import api from "../api/axios"
import Navbar from "../components/Navbar"

function GroupDetails() {

  const { groupId } = useParams()

  const navigate = useNavigate()

  const [expenses, setExpenses] =
    useState([])

  const [balances, setBalances] =
    useState([])

  const [members, setMembers] =
    useState([])

  const [showModal, setShowModal] =
    useState(false)

  const [showHistory, setShowHistory] =
    useState(false)

  const [loading, setLoading] =
    useState(true)

  const [amount, setAmount] =
    useState("")

  const [description, setDescription] =
    useState("")

  const [paidBy, setPaidBy] =
    useState("")

  const [selectedMembers, setSelectedMembers] =
    useState([])

  const [userId, setUserId] =
    useState("")

  const [settlements, setSettlements] =
    useState([])

  const [expenseDate, setExpenseDate] =
    useState(
      new Date()
        .toISOString()
        .split("T")[0]
    )

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {

    try {

      setLoading(true)

      const [
        expenseRes,
        balanceRes,
        groupRes,
        userRes,
        settlementRes
      ] = await Promise.all([

        api.get(
          `/api/group/${groupId}/expenses`
        ),

        api.get(
          `/api/group/${groupId}/balance`
        ),

        api.get(
          `/api/group/${groupId}`
        ),

        api.get("/me"),

        api.get(
          `/api/group/${groupId}/settlements`
        )

      ])

      setExpenses(

        [...expenseRes.data].sort(
          (a, b) =>
            b._id.localeCompare(a._id)
        )

      )

      setBalances(
        balanceRes.data
      )

      setSettlements(
        settlementRes.data
      )

      setUserId(
        userRes.data._id
      )

      const group =
        groupRes.data

      setMembers(
        group.members || []
      )

      setSelectedMembers(

        (group.members || []).map(
          (item) => item._id
        )

      )

      if (
        group.members?.length > 0
      ) {

        setPaidBy(
          group.members[0]._id
        )
      }

    } catch (err) {

      console.log(err)

    } finally {

      setLoading(false)

    }
  }

  const toggleMember = (id) => {

    if (
      selectedMembers.includes(id)
    ) {

      setSelectedMembers(

        selectedMembers.filter(
          (item) => item !== id
        )

      )

    } else {

      setSelectedMembers([
        ...selectedMembers,
        id
      ])

    }
  }

  const handleAddExpense =
    async (e) => {

      e.preventDefault()

      if (!description.trim()) {

        alert(
          "Please enter description"
        )

        return
      }

      try {

        await api.post(
          "/api/group/addGroupExpense",
          {
            groupId,
            amount,
            description,
            paidBy,
            createdAt: expenseDate,
            splitBetween:
              selectedMembers
          }
        )

        setAmount("")
        setDescription("")
        setShowModal(false)

        fetchData()

      } catch (err) {

        console.log(err)

      }
    }

  const handleSettle =
    async (to, amount) => {

      try {

        await api.post(
          "/api/group/settle",
          {
            groupId,
            to,
            amount
          }
        )

        fetchData()

      } catch (err) {

        console.log(err)

      }
    }

  const handleDeleteGroup =
    async () => {

      const ok =
        window.confirm(
          "Delete this group permanently?"
        )

      if (!ok) return

      try {

        await api.delete(
          `/api/group/${groupId}`
        )

        navigate("/groups")

      } catch (err) {

        console.log(err)

      }
    }

  if (loading) {

    return (

      <div className="min-h-screen bg-slate-50">

        <Navbar />

        <div className="max-w-[1800px] mx-auto px-4 md:px-16 lg:px-24 py-10 text-xl font-semibold text-slate-600">

          Loading...

        </div>

      </div>

    )
  }

  return (

    <div className="min-h-screen bg-slate-50">

      <Navbar />

      <div className="max-w-[1800px] mx-auto px-4 md:px-16 lg:px-24 py-8">

        {/* Header */}
        <div className="
          flex
          flex-col
          xl:flex-row
          xl:items-center
          xl:justify-between
          gap-5
          mb-10
        ">

          <div>

            <h1 className="text-3xl md:text-5xl font-bold text-slate-900">

              Group Details

            </h1>

            <p className="text-slate-500 text-base md:text-lg mt-2">

              Manage shared expenses smartly

            </p>

          </div>

          <div className="
            flex
            flex-col
            sm:flex-row
            flex-wrap
            gap-3
            w-full
            xl:w-auto
          ">

            <button
              onClick={() =>
                setShowHistory(true)
              }
              className="
                w-full sm:w-auto
                px-5 py-3
                rounded-2xl
                bg-blue-600
                text-white
                hover:bg-blue-700
                cursor-pointer
              "
            >
              Settle History
            </button>

            <button
              onClick={handleDeleteGroup}
              className="
                w-full sm:w-auto
                px-5 py-3
                rounded-2xl
                bg-red-500
                text-white
                hover:bg-red-600
                cursor-pointer
              "
            >
              Delete Group
            </button>

            <button
              onClick={() =>
                setShowModal(true)
              }
              className="
                w-full sm:w-auto
                px-6 py-3
                rounded-2xl
                bg-gradient-to-r
                from-cyan-500
                to-blue-600
                text-white
                font-semibold
                shadow
                cursor-pointer
              "
            >
              + Add Expense
            </button>

          </div>

        </div>

        {/* Main */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-7">

          {/* Transactions */}
          <div className="
            xl:col-span-2
            bg-white
            rounded-3xl
            border
            border-slate-200
            shadow-sm
            p-4 md:p-8
            overflow-x-auto
          ">

            <h2 className="text-2xl md:text-3xl font-bold mb-7">

              Transactions

            </h2>

            <div className="space-y-4">

              {
                expenses.length === 0 && (

                  <p className="text-slate-400">

                    No expenses yet

                  </p>

                )
              }

              {
                expenses.map((item) => (

                  <div
                    key={item._id}
                    className="
                      grid
                      grid-cols-1
                      md:grid-cols-4
                      gap-4
                      border
                      border-slate-100
                      rounded-2xl
                      p-4 md:p-5
                      hover:bg-slate-50
                      transition
                    "
                  >

                    <div>

                      <p className="text-sm text-slate-500">

                        Date

                      </p>

                      <p className="font-medium">

                        {
                          new Date(
                            item.createdAt
                          ).toLocaleDateString(
                            "en-GB"
                          )
                        }

                      </p>

                    </div>

                    <div>

                      <p className="text-sm text-slate-500">

                        Description

                      </p>

                      <p className="font-medium">

                        {item.description}

                      </p>

                    </div>

                    <div>

                      <p className="text-sm text-slate-500">

                        Paid By

                      </p>

                      <p className="font-medium">

                        {item.paidBy?.name}

                      </p>

                    </div>

                    <div>

                      <p className="text-sm text-slate-500">

                        Amount

                      </p>

                      <p className="font-bold text-red-500 text-lg">

                        ₹{item.amount}

                      </p>

                    </div>

                  </div>

                ))
              }

            </div>

          </div>

          {/* Balances */}
          <div className="
            bg-white
            rounded-3xl
            border
            border-slate-200
            shadow-sm
            p-4 md:p-8
            self-start
          ">

            <h2 className="text-2xl md:text-3xl font-bold mb-7">

              Who Owes Whom

            </h2>

            <div className="space-y-4">

              {
                balances.length === 0 && (

                  <p className="text-slate-400">

                    All settled 🎉

                  </p>

                )
              }

              {
                balances.map(
                  (item, index) => (

                    <div
                      key={index}
                      className="border border-slate-200 rounded-2xl p-5"
                    >

                      <p className="font-semibold text-slate-900">

                        {item.fromName}

                      </p>

                      <p className="text-red-500 mt-1">

                        Pays ₹{item.amount}

                      </p>

                      <p className="font-semibold text-slate-900 mt-4">

                        {item.toName}

                      </p>

                      <p className="text-green-600 mt-1">

                        Receives ₹{item.amount}

                      </p>

                      {
                        String(item.from) ===
                        String(userId) && (

                          <button
                            onClick={() =>
                              handleSettle(
                                item.to,
                                item.amount
                              )
                            }
                            className="
                              mt-5
                              w-full
                              py-3
                              rounded-2xl
                              bg-gradient-to-r
                              from-cyan-500
                              to-blue-600
                              text-white
                              font-semibold
                              cursor-pointer
                            "
                          >
                            Settle Up
                          </button>

                        )
                      }

                    </div>

                  )
                )
              }

            </div>

          </div>

        </div>

      </div>

    </div>

  )
}

export default GroupDetails