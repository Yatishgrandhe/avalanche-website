'use client'

import { useState, useEffect } from 'react'
import { getAdminData, updateAdminData } from '@/app/actions/admin'

interface AdminTableProps {
  title: string
  tableName: string
  columns: { key: string; label: string; editable?: boolean; type?: 'text' | 'number' | 'email' | 'textarea' | 'array' }[]
}

export default function AdminTable({ title, tableName, columns }: AdminTableProps) {
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [editingCell, setEditingCell] = useState<{ rowId: string; columnKey: string } | null>(null)
  const [editValue, setEditValue] = useState('')
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await getAdminData(tableName)
        if (result.success) {
          setData(result.data || [])
        } else {
          // Filter out non-critical schema cache errors
          const errorMessage = result.error || ''
          if (!errorMessage.includes('schema cache') && !errorMessage.includes('Could not query the database for the schema cache')) {
            console.error('Error loading data:', result.error)
          }
          // Optionally set an error state here to show in UI
        }
      } catch (error: any) {
        // Filter out non-critical schema cache errors
        const errorMessage = error?.message || String(error || '')
        if (!errorMessage.includes('schema cache') && !errorMessage.includes('Could not query the database for the schema cache')) {
          console.error('Error loading data:', error)
        }
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [tableName])

  const handleCellClick = (rowId: string, columnKey: string, currentValue: any) => {
    setEditingCell({ rowId, columnKey })
    if (Array.isArray(currentValue)) {
      setEditValue(currentValue.join(', '))
    } else {
      setEditValue(currentValue?.toString() || '')
    }
  }

  const handleSave = async (rowId: string, columnKey: string) => {
    if (!editingCell) return

    setSaving(true)
    try {
      const column = columns.find((c) => c.key === columnKey)
      let valueToSave: any = editValue

      if (column?.type === 'number') {
        valueToSave = parseInt(editValue) || 0
      } else if (column?.type === 'array') {
        valueToSave = editValue.split(',').map((item) => item.trim()).filter(Boolean)
      }

      const result = await updateAdminData(tableName, rowId, columnKey, valueToSave)

      if (result.success) {
        // Update local state
        setData((prev) =>
          prev.map((row) => (row.id === rowId ? { ...row, [columnKey]: valueToSave } : row))
        )
        setEditingCell(null)
        setEditValue('')
      } else {
        console.error('Error saving:', result.error)
        alert(`Error saving changes: ${result.error}`)
      }
    } catch (error) {
      console.error('Error saving:', error)
      alert('Error saving changes. Please try again.')
    } finally {
      setSaving(false)
    }
  }

  const handleCancel = () => {
    setEditingCell(null)
    setEditValue('')
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center p-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent-blue"></div>
      </div>
    )
  }

  return (
    <div className="w-full">
      <div className="px-6 py-4 border-b border-white/10 bg-white/5 flex justify-between items-center">
        <h2 className="text-xl font-bold text-white">{title}</h2>
        <span className="text-sm text-gray-400">{data.length} entries</span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-max">
          <thead>
            <tr className="bg-white/5 border-b border-white/10">
              {columns.map((column) => (
                <th key={column.key} className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider whitespace-nowrap">
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {data.map((row) => (
              <tr key={row.id} className="hover:bg-white/5 transition-colors">
                {columns.map((column) => {
                  const isEditing = editingCell?.rowId === row.id && editingCell?.columnKey === column.key
                  const currentValue = row[column.key]

                  return (
                    <td key={column.key} className="px-6 py-4 text-sm text-gray-300 align-top">
                      {isEditing && column.editable ? (
                        <div className="flex flex-col space-y-2 min-w-[200px] z-10 relative">
                          {column.type === 'textarea' ? (
                            <textarea
                              value={editValue}
                              onChange={(e) => setEditValue(e.target.value)}
                              className="w-full px-3 py-2 bg-slate-800 border border-accent-blue rounded-lg text-white text-sm focus:outline-none focus:ring-1 focus:ring-accent-blue"
                              rows={3}
                              autoFocus
                            />
                          ) : (
                            <input
                              type={column.type || 'text'}
                              value={editValue}
                              onChange={(e) => setEditValue(e.target.value)}
                              className="w-full px-3 py-2 bg-slate-800 border border-accent-blue rounded-lg text-white text-sm focus:outline-none focus:ring-1 focus:ring-accent-blue"
                              autoFocus
                            />
                          )}
                          <div className="flex space-x-2">
                            <button
                              onClick={() => handleSave(row.id, column.key)}
                              disabled={saving}
                              className="px-3 py-1 bg-green-500/20 hover:bg-green-500/30 text-green-400 border border-green-500/50 rounded-md text-xs font-medium transition-colors disabled:opacity-50"
                            >
                              {saving ? '...' : 'Save'}
                            </button>
                            <button
                              onClick={handleCancel}
                              className="px-3 py-1 bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/50 rounded-md text-xs font-medium transition-colors"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div
                          onClick={() => column.editable && handleCellClick(row.id, column.key, currentValue)}
                          className={`group relative rounded px-2 py-1 -mx-2 ${column.editable
                            ? 'cursor-pointer hover:bg-white/10 hover:text-white transition-colors'
                            : ''
                            }`}
                        >
                          <div className="break-words max-w-xs">
                            {Array.isArray(currentValue)
                              ? currentValue.length > 0
                                ? <span className="inline-flex flex-wrap gap-1">
                                  {currentValue.map((item: string, i: number) => (
                                    <span key={i} className="px-2 py-0.5 bg-accent-blue/20 text-accent-blue rounded-full text-xs">
                                      {item}
                                    </span>
                                  ))}
                                </span>
                                : <span className="text-gray-600 italic">Empty</span>
                              : currentValue || <span className="text-gray-600 italic">-</span>
                            }
                          </div>
                          {column.editable && (
                            <div className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                              </svg>
                            </div>
                          )}
                        </div>
                      )}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
        {data.length === 0 && (
          <div className="text-center text-gray-500 py-12 flex flex-col items-center">
            <svg className="w-12 h-12 mb-4 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
            <p>No submissions found</p>
          </div>
        )}
      </div>
    </div>
  )
}

