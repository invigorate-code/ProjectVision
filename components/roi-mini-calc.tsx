"use client"

import { useMemo, useState } from "react"
import { contractor } from "@/lib/tokens"

export function RoiMiniCalc() {
  const [leads, setLeads] = useState(12)
  const [closeRate, setCloseRate] = useState(0.28)
  const [avgProfit, setAvgProfit] = useState(2400)
  const [cpl, setCpl] = useState(55)

  const monthlyROI = useMemo(() => {
    const wins = leads * closeRate
    const gross = wins * avgProfit
    const spend = leads * cpl
    const roi = gross - spend
    return { wins, gross, spend, roi }
  }, [leads, closeRate, avgProfit, cpl])

  return (
    <div
      className="mt-6 rounded-xl border bg-white/70 p-4 shadow-sm"
      style={{ borderColor: contractor.accent }}
    >
      <h3 className="mb-4 text-sm font-bold uppercase tracking-wide" style={{ color: contractor.primary }}>
        Calculate Your Monthly ROI
      </h3>
      <div className="grid gap-3 sm:grid-cols-4">
        <label className="text-sm">
          <span className="mb-1 block font-medium text-gray-700">Leads/mo</span>
          <input
            type="number"
            className="w-full rounded border border-gray-300 p-2 text-sm transition-colors focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-200"
            value={leads}
            onChange={(e) => setLeads(Number(e.target.value))}
            min="1"
          />
        </label>
        <label className="text-sm">
          <span className="mb-1 block font-medium text-gray-700">Close rate</span>
          <input
            type="number"
            step="0.01"
            className="w-full rounded border border-gray-300 p-2 text-sm transition-colors focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-200"
            value={closeRate}
            onChange={(e) => setCloseRate(Number(e.target.value))}
            min="0"
            max="1"
          />
        </label>
        <label className="text-sm">
          <span className="mb-1 block font-medium text-gray-700">Avg profit $</span>
          <input
            type="number"
            className="w-full rounded border border-gray-300 p-2 text-sm transition-colors focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-200"
            value={avgProfit}
            onChange={(e) => setAvgProfit(Number(e.target.value))}
            min="0"
          />
        </label>
        <label className="text-sm">
          <span className="mb-1 block font-medium text-gray-700">Cost/lead $</span>
          <input
            type="number"
            className="w-full rounded border border-gray-300 p-2 text-sm transition-colors focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-200"
            value={cpl}
            onChange={(e) => setCpl(Number(e.target.value))}
            min="0"
          />
        </label>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-6 rounded-lg bg-sky-50/50 p-4 text-sm">
        <div>
          <strong className="text-gray-900">Wins/mo:</strong>{" "}
          <span className="font-semibold" style={{ color: contractor.primary }}>
            {monthlyROI.wins.toFixed(1)}
          </span>
        </div>
        <div>
          <strong className="text-gray-900">Revenue:</strong>{" "}
          <span className="font-semibold" style={{ color: contractor.primary }}>
            ${monthlyROI.gross.toFixed(0)}
          </span>
        </div>
        <div>
          <strong className="text-gray-900">Spend:</strong>{" "}
          <span className="font-semibold text-gray-700">${monthlyROI.spend.toFixed(0)}</span>
        </div>
        <div>
          <strong className="text-gray-900">Net ROI:</strong>{" "}
          <span className="text-lg font-bold" style={{ color: contractor.primary }}>
            ${monthlyROI.roi.toFixed(0)}
          </span>
        </div>
      </div>
    </div>
  )
}
