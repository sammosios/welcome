import { useState, useRef, useEffect, useCallback, type KeyboardEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  processCommand,
  COMMANDS,
  BOOT_LINES,
  type LineType,
  type OutputLine,
} from '../lib/commands'

interface Line extends OutputLine {
  id: number
  isInput?: boolean
}

let _id = 0
const uid = () => ++_id

const LINE_CLASS: Record<LineType, string> = {
  output: 'text-on-surface',
  success: 'text-primary',
  error: 'text-error',
  warning: 'text-tertiary',
  muted: 'text-on-surface-variant',
  blank: '',
}

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>([])
  const [input, setInput] = useState('')
  const [cmdHistory, setCmdHistory] = useState<string[]>([])
  const [histIdx, setHistIdx] = useState(-1)
  const [booted, setBooted] = useState(false)

  const inputRef = useRef<HTMLInputElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  // Boot sequence — stagger lines in
  useEffect(() => {
    let i = 0
    const tick = () => {
      if (i >= BOOT_LINES.length) {
        setBooted(true)
        return
      }
      setLines((prev) => [...prev, { ...BOOT_LINES[i], id: uid() }])
      i++
      setTimeout(tick, 100)
    }
    const init = setTimeout(tick, 400)
    return () => clearTimeout(init)
  }, [])

  // Scroll terminal container — never touches the page scroll
  useEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [lines, booted])

  const focusInput = useCallback(() => inputRef.current?.focus(), [])

  const submit = useCallback(() => {
    const cmd = input.trim()
    if (!cmd) return

    // Handle clear locally
    if (cmd.toLowerCase() === 'clear') {
      setLines([])
      setCmdHistory((prev) => [cmd, ...prev])
      setHistIdx(-1)
      setInput('')
      return
    }

    const [cmdName, ...args] = cmd.toLowerCase().split(/\s+/)
    const inputLine: Line = { id: uid(), type: 'output', text: cmd, isInput: true }
    const def = COMMANDS[cmdName]

    if (def?.stream) {
      setLines((prev) => [...prev, inputLine])
      def.stream(args, navigate, (line) => {
        setLines((prev) => [...prev, { ...line, id: uid() }])
      })
    } else {
      const result = processCommand(cmd, navigate)
      setLines((prev) => [...prev, inputLine, ...result.map((r) => ({ ...r, id: uid() }))])
    }
    setCmdHistory((prev) => [cmd, ...prev])
    setHistIdx(-1)
    setInput('')
  }, [input, navigate])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        submit()
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        const next = Math.min(histIdx + 1, cmdHistory.length - 1)
        setHistIdx(next)
        setInput(cmdHistory[next] ?? '')
      } else if (e.key === 'ArrowDown') {
        e.preventDefault()
        const next = Math.max(histIdx - 1, -1)
        setHistIdx(next)
        setInput(next === -1 ? '' : cmdHistory[next])
      }
    },
    [submit, histIdx, cmdHistory],
  )

  return (
    <div
      className="bg-surface-container-high rounded-xl border-t border-white/5 overflow-hidden shadow-2xl flex flex-col h-full cursor-text select-none"
      onClick={focusInput}
    >
      {/* Title bar */}
      <div className="bg-[#131313] px-4 py-2 flex items-center justify-between border-b border-black/20 shrink-0">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-error-container" />
          <div className="w-2.5 h-2.5 rounded-full bg-tertiary-container" />
          <div className="w-2.5 h-2.5 rounded-full bg-primary" />
        </div>
        <div className="font-label text-[10px] text-gray-500 uppercase tracking-tighter">
          very-real-terminal // user@sammosios.com
        </div>
      </div>

      {/* Output area */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-6 font-label text-sm bg-surface-container-lowest/50 space-y-0.5"
      >
        {lines.map((line) => (
          <div key={line.id} className={LINE_CLASS[line.type]}>
            {line.isInput ? (
              <span>
                <span className="text-secondary">➜ </span>
                <span className="text-on-surface-variant">~ </span>
                <span className="select-text">{line.text}</span>
              </span>
            ) : line.type === 'blank' ? (
              <span className="block h-2" />
            ) : (
              <span className="select-text">{line.text}</span>
            )}
          </div>
        ))}

        {/* Active prompt — only shown after boot */}
        {booted && (
          <div className="flex items-center gap-1 mt-0.5">
            <span className="text-secondary">➜ </span>
            <span className="text-on-surface-variant">~ </span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
              spellCheck={false}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              className="flex-1 bg-transparent outline-none text-on-surface caret-primary font-label text-sm select-text"
            />
          </div>
        )}
      </div>
    </div>
  )
}
