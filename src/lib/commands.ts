import type { NavigateFunction } from 'react-router-dom'

export type LineType = 'output' | 'success' | 'error' | 'warning' | 'muted' | 'blank'

export interface OutputLine {
  type: LineType
  text: string
}

type CommandFn = (args: string[], navigate: NavigateFunction) => OutputLine[]
type CommandStream = (
  args: string[],
  navigate: NavigateFunction,
  push: (line: OutputLine) => void,
) => void

interface CommandDef {
  description: string
  hidden?: boolean
  fn: CommandFn
  stream?: CommandStream
}

// Helpers
const out = (text: string): OutputLine => ({ type: 'output', text })
const ok = (text: string): OutputLine => ({ type: 'success', text })
const err = (text: string): OutputLine => ({ type: 'error', text })
const warn = (text: string): OutputLine => ({ type: 'warning', text })
const dim = (text: string): OutputLine => ({ type: 'muted', text })
const gap = (): OutputLine => ({ type: 'blank', text: '' })

// Registry — add new commands here
const COMMAND_DEFS: ({ name: string } & CommandDef)[] = [
  {
    name: 'help',
    description: 'List available commands',
    fn: (args) => {
      const showAll = args.includes('-a') || args.includes('--all')
      if (showAll) {
        return [
          dim('All commands (including hidden):'),
          gap(),
          ...COMMAND_DEFS.filter((c) => !c.hidden).map((c) =>
            out(`  ${c.name.padEnd(14)} — ${c.description}`),
          ),
          gap(),
          dim('── hidden ───────────────────────────────────────'),
          gap(),
          ...COMMAND_DEFS.filter((c) => c.hidden).map((c) =>
            dim(`  ${c.name}`),
          ),
          gap(),
          dim('You found them. Try a few.'),
          gap(),
        ]
      }
      return [
        dim('Available commands:'),
        gap(),
        ...COMMAND_DEFS.filter((c) => !c.hidden).map((c) =>
          out(`  ${c.name.padEnd(14)} — ${c.description}`),
        ),
        gap(),
        dim('Tip: ↑ / ↓ to navigate command history.'),
        gap(),
        dim('(there might be more... try help -a)'),
        gap(),
      ]
    },
  },

  {
    name: 'whoami',
    hidden: true,
    description: '',
    fn: () => [
      gap(),
      warn('whoami: that question is above my pay grade.'),
      dim("You typed 'whoami' into a stranger's portfolio terminal."),
      dim('That probably says something about you. Not sure what.'),
      gap(),
      dim("Try 'about' if you meant to ask about the person who built this."),
      gap(),
    ],
  },

  {
    name: 'about',
    description: 'About Sam Mosios',
    fn: () => [
      gap(),
      ok('Sam Mosios'),
      out('SRE & Platform Engineer'),
      dim('Originally from 🇬🇷, currently based in 🇸🇪'),
      dim('MSc Distributed Systems @ KTH (in progress)'),
      gap(),
      dim('Five pillars:'),
      out('  - Security'),
      out('  - Reliability'),
      out('  - Observability'),
      out('  - Scalability'),
      out('  - Developer Experience'),
      gap(),
      dim('Approach: explore → resolve → amplify → automate'),
      gap(),
      dim("Run 'philosophy' or 'stack' to go deeper."),
      gap(),
    ],
  },

  {
    name: 'philosophy',
    description: 'The five-pillar SRE framework',
    fn: () => [
      gap(),
      dim('── FIVE PILLARS ─────────────────────────────────'),
      gap(),
      ok('01  Security'),
      out('  - Zero-trust credentials. Least privilege. Small blast radius.'),
      gap(),
      ok('02  Reliability'),
      out('  - Uptime targets and failure budgets. Graceful degradation.'),
      gap(),
      ok('03  Observability'),
      out('  - Actionable alerting. Visibility into what matters.'),
      gap(),
      ok('04  Scalability'),
      out('  - Systems that grow with load. Testing at scale.'),
      gap(),
      ok('05  Developer Experience'),
      out('  - Feedback before it reaches production.'),
      out('  - Dev environments that mirror production.'),
      gap(),
      dim('The job is making the right trade-offs between these.'),
      dim('Not maximising all five at once.'),
      gap(),
    ],
  },

  {
    name: 'approach',
    description: 'How I work',
    fn: () => [
      gap(),
      dim('── THE APPROACH ─────────────────────────────────'),
      gap(),
      ok('01  EXPLORE'),
      out('  Understand the system. Talk to the team. No assumptions.'),
      gap(),
      ok('02  RESOLVE'),
      out('  Find friction. Flaky pipelines, manual steps, unclear runbooks. Fix those first.'),
      gap(),
      ok('03  AMPLIFY'),
      out('  Find what is working. Codify it. Make it the default.'),
      gap(),
      ok('04  AUTOMATE'),
      out('  Did it twice manually? It should be a script.'),
      out('  Is it a script? It should be a pipeline.'),
      gap(),
    ],
  },

  {
    name: 'stack',
    description: 'Tools and technologies',
    fn: () => [
      gap(),
      dim('── INFRASTRUCTURE AS CODE ───────────────────────'),
      out('  - Terraform'),
      out('  - AWS'),
      gap(),
      dim('── CONTAINER ORCHESTRATION ──────────────────────'),
      out('  - Kubernetes'),
      out('  - Docker'),
      out('  - AWS Fargate'),
      out('  - Flux (GitOps)'),
      gap(),
      dim('── CI/CD ─────────────────────────────────────────'),
      out('  - GitHub Actions'),
      out('  - Scripting (Bash, Python, JavaScript)'),
      out('  - Release tracking'),
      gap(),
      dim('── OBSERVABILITY ─────────────────────────────────'),
      out('  - Grafana'),
      out('  - OpenTelemetry'),
      out('  - Distributed tracing'),
      gap(),
      dim('── SECURITY & RELIABILITY ────────────────────────'),
      out('  - IAM'),
      out('  - Secrets management'),
      out('  - Network segmentation'),
      out('  - SLO design'),
      gap(),
      dim('Tools are learnable in weeks. The judgment behind them takes years.'),
      gap(),
    ],
  },

  {
    name: 'consult',
    description: 'Get in touch',
    fn: (_args, navigate) => {
      setTimeout(() => navigate('/consult'), 900)
      return [
        gap(),
        dim('Routing to /consult...'),
        ok('[OK]  Session initialised.'),
        dim('Redirecting...'),
        gap(),
      ]
    },
  },

  {
    name: 'version',
    description: 'Show site version',
    fn: () => [gap(), out(`v${__APP_VERSION__}`), gap()],
  },

  {
    name: 'clear',
    description: 'Clear the terminal',
    // Handled directly in Terminal — fn never runs
    fn: () => [],
  },

  // ── Fake Linux commands ───────────────────────────────────────────────────

  {
    name: 'ls',
    hidden: true,
    description: '',
    fn: (args) => {
      if (args.includes('/etc') || args.includes('/var') || args.includes('/home')) {
        return [
          gap(),
          err('ls: permission denied'),
          dim("Nice try. There's no filesystem here."),
          gap(),
        ]
      }
      return [
        gap(),
        warn('total 0'),
        dim('This is a browser. There are no files. There is no ls.'),
        dim("Try 'help' for commands that actually do something."),
        gap(),
      ]
    },
  },

  {
    name: 'cd',
    hidden: true,
    description: '',
    fn: (args) => {
      const dest = args[0] ?? '~'
      return [
        gap(),
        err(`cd: ${dest}: No such directory`),
        dim('You are already exactly where you need to be.'),
        gap(),
      ]
    },
  },

  {
    name: 'pwd',
    hidden: true,
    description: '',
    fn: () => [gap(), out('/dev/null/your-browser/somewhere-on-the-internet'), gap()],
  },

  {
    name: 'cat',
    hidden: true,
    description: '',
    fn: (args) => {
      const file = args[0] ?? ''
      if (!file) return [gap(), err('cat: missing operand'), gap()]
      return [
        gap(),
        err(`cat: ${file}: No such file or directory`),
        dim('Ummm... this is just running in your browser, remember?'),
        gap(),
      ]
    },
  },

  {
    name: 'sudo',
    hidden: true,
    description: '',
    fn: (args) => {
      const subcmd = args.join(' ')
      return [
        gap(),
        err(`sudo: ${subcmd || 'command'}: not found`),
        warn('Also, you are not in the sudoers file.'),
        dim('This incident has been reported. (It has not.)'),
        gap(),
      ]
    },
  },

  {
    name: 'rm',
    hidden: true,
    description: '',
    fn: () => [gap(), err('rm: cannot remove: Read-only filesystem'), dim("Please don't."), gap()],
  },

  {
    name: 'ssh',
    hidden: true,
    description: '',
    fn: (args) => {
      const host = args[0] ?? 'localhost'
      return [
        gap(),
        dim(`ssh: connect to host ${host} port 22: Connection refused`),
        dim("This is not a real server. There's nothing to SSH into."),
        gap(),
      ]
    },
  },

  {
    name: 'curl',
    hidden: true,
    description: '',
    fn: (args) => {
      const url = args.find((a) => !a.startsWith('-')) ?? ''
      return [
        gap(),
        err(`curl: (6) Could not resolve host: ${url || 'unknown'}`),
        dim("You're inside a portfolio site, not a terminal emulator. But points for trying."),
        gap(),
      ]
    },
  },

  {
    name: 'top',
    hidden: true,
    description: '',
    fn: () => [
      gap(),
      out('  PID  USER       %CPU  COMMAND'),
      ok('    1  you         0.0  staring-at-a-fake-terminal'),
      out('    2  browser    4.2  rendering-this-page'),
      out('    3  react     12.1  reconciling-your-curiosity'),
      gap(),
    ],
  },

  {
    name: 'ping',
    hidden: true,
    description: '',
    fn: () => [],
    stream: (args, _navigate, push) => {
      const host = args[0] ?? 'localhost'
      const count = 3
      push(gap())
      push(dim(`PING ${host}: 56 data bytes`))

      let seq = 0
      const fire = () => {
        if (seq >= count) {
          push(gap())
          push(dim(`--- ${host} ping statistics ---`))
          push(out(`${count} packets transmitted, ${count} received, 0% packet loss`))
          push(dim('...okay this one kind of works. Still fake though.'))
          push(gap())
          return
        }
        const ms = (Math.random() * 0.8 + 0.1).toFixed(3)
        push(out(`64 bytes from ${host}: icmp_seq=${seq} ttl=64 time=${ms} ms`))
        seq++
        setTimeout(fire, 1000)
      }
      setTimeout(fire, 1000)
    },
  },

  {
    name: 'git',
    hidden: true,
    description: '',
    fn: (args) => {
      const sub = args[0] ?? ''

      if (!sub)
        return [
          gap(),
          out('usage: git <command> [options]'),
          gap(),
          dim('These are the common git commands:'),
          out('   status   — show the working tree status'),
          out('   log      — show commit logs'),
          out('   add      — stage changes'),
          out('   commit   — record changes'),
          out('   push     — push to remote (bold of you)'),
          out('   pull     — fetch and merge'),
          out('   clone    — clone a repository'),
          out('   branch   — list branches'),
          out('   diff     — show changes'),
          out('   rebase   — rebase onto a branch (good luck)'),
          out('   blame    — find someone to blame'),
          gap(),
          dim("None of them will work. But you're still welcome to try."),
          gap(),
        ]

      if (sub === 'status')
        return [
          gap(),
          out('On branch main'),
          out("Your branch is up to date with 'origin/main'."),
          gap(),
          ok('nothing to commit, working tree clean'),
          dim('For once.'),
          gap(),
        ]

      if (sub === 'log')
        return [
          gap(),
          ok('commit a1b2c3d'),
          out('Author: Sam Mosios <sam@sammosios.com>'),
          out('Date:   Wed Apr 9 2026'),
          gap(),
          out('    feat: add terminal nobody asked for'),
          gap(),
          ok('commit d4e5f6a'),
          out('Author: Sam Mosios <sam@sammosios.com>'),
          out('Date:   Mon Apr 7 2026'),
          gap(),
          out('    fix: actually fix the thing I said I fixed yesterday'),
          gap(),
          ok('commit 7b8c9d0'),
          out('Author: Sam Mosios <sam@sammosios.com>'),
          out('Date:   Sat Apr 5 2026'),
          gap(),
          out('    chore: remove TODO comments by deleting the file'),
          gap(),
          dim('(END)'),
          gap(),
        ]

      if (sub === 'push')
        return [
          gap(),
          dim('Pushing to origin/main...'),
          gap(),
          out('Everything pushed. You are looking at the result.'),
          gap(),
        ]

      if (sub === 'pull')
        return [
          gap(),
          dim('From origin/main'),
          out('Already up to date.'),
          dim('(There is no remote. There never was.)'),
          gap(),
        ]

      if (sub === 'clone') {
        const repo = args[1] ?? '<repo>'
        return [
          gap(),
          err(`fatal: destination path '${repo}' already exists`),
          dim('Also, there is nowhere to clone to. This is a browser.'),
          gap(),
        ]
      }

      if (sub === 'add') {
        const target = args[1] ?? '.'
        return [
          gap(),
          dim(`git add ${target}`),
          out('Nothing staged. There are no files to add.'),
          dim('Though the ambition is noted.'),
          gap(),
        ]
      }

      if (sub === 'commit')
        return [gap(), out('On branch main'), out('nothing to commit, working tree clean'), gap()]

      if (sub === 'init')
        return [
          gap(),
          out('Reinitialized existing Git repository in /dev/null/your-browser/.git/'),
          dim('Congratulations. Nothing changed.'),
          gap(),
        ]

      if (sub === 'diff')
        return [
          gap(),
          dim('No changes. Nothing is different. Everything is fine.'),
          dim('(This is the most unrealistic output in this entire terminal.)'),
          gap(),
        ]

      if (sub === 'branch') return [gap(), ok('* main'), gap()]

      if (sub === 'checkout' || sub === 'switch') {
        const branch = args[1] ?? ''
        if (!branch) return [gap(), err(`error: missing branch name`), gap()]
        return [
          gap(),
          err(`error: pathspec '${branch}' did not match any known branch`),
          dim('There is only main. There has only ever been main.'),
          gap(),
        ]
      }

      if (sub === 'rebase') {
        const target = args[1] ?? 'main'
        return [
          gap(),
          dim(`First, rewinding head to replay your work on top of it...`),
          out(`Applying: feat: add terminal nobody asked for`),
          gap(),
          warn(`CONFLICT (content): Merge conflict in your-life-choices.ts`),
          err('error: could not apply a1b2c3d'),
          dim('hint: Resolve all conflicts manually, then run git rebase --continue'),
          dim(`hint: Or just git rebase --abort and pretend ${target} never happened.`),
          gap(),
        ]
      }

      if (sub === 'stash') return [gap(), out('No local changes to save'), gap()]

      if (sub === 'reset') {
        const flag = args[1] ?? ''
        if (flag === '--hard')
          return [
            gap(),
            warn('HEAD is now at a1b2c3d feat: add terminal nobody asked for'),
            dim('Nothing was actually reset. You are still here.'),
            gap(),
          ]
        return [gap(), out('Unstaged changes after reset: none'), gap()]
      }

      if (sub === 'blame') {
        const file = args[1] ?? ''
        if (!file) return [gap(), err('fatal: no path specified'), gap()]
        return [
          gap(),
          out(`e3f7a12 (Sam Mosios 2026-04-09 14:23:01 +0200  1) fix: actually fix the thing`),
          out(`9c2b8d4 (Sam Mosios 2026-04-09 16:55:32 +0200  2) fix: revert "actually fix the thing"`),
          out(`1a4f6e0 (Sam Mosios 2026-04-10 09:41:17 +0200  3) fix: fix the revert`),
          out(`b7d3c91 (Sam Mosios 2026-04-10 18:37:04 +0200  4) chore: remove console.log (there were 47)`),
          out(`f05a2e8 (Sam Mosios 2026-04-11 03:42:07 +0200  5) feat: woke up to pee, had a thought`),
          gap(),
          dim('One author. No excuses.'),
          gap(),
        ]
      }

      return [
        gap(),
        err(`git: '${sub}' is not a git command`),
        dim("Run 'git' to see a list of commands that also won't work."),
        gap(),
      ]
    },
  },

  {
    name: 'apt',
    hidden: true,
    description: '',
    fn: (args) => {
      const sub = args[0] ?? ''
      if (!sub)
        return [
          gap(),
          err('apt: command requires a subcommand'),
          dim('Try apt install hope  —  spoiler: it will also fail.'),
          gap(),
        ]
      if (sub === 'update')
        return [
          gap(),
          dim('Hit:1 https://browser.local InMemory Release'),
          warn('E: This is not a real package manager. Nothing was updated.'),
          gap(),
        ]
      if (sub === 'upgrade')
        return [
          gap(),
          dim('Calculating upgrade...'),
          out('0 upgraded, 0 newly installed, 0 to remove, 0 not upgraded.'),
          dim('You are already running the latest version of this fake terminal.'),
          gap(),
        ]
      if (sub === 'install') {
        const pkg = args[1] ?? 'package'
        return [
          gap(),
          dim(`Reading package lists... Done`),
          dim(`Building dependency tree... Done`),
          err(`E: Unable to locate package ${pkg}`),
          dim('Have you tried not installing things in a browser?'),
          gap(),
        ]
      }
      if (sub === 'remove' || sub === 'purge') {
        const pkg = args[1] ?? 'package'
        return [
          gap(),
          err(`E: Unable to locate package ${pkg}`),
          dim('There is nothing here to remove. It was never installed.'),
          gap(),
        ]
      }
      return [gap(), err(`apt: invalid operation ${sub}`), gap()]
    },
  },

  {
    name: 'apt-get',
    hidden: true,
    description: '',
    fn: (args) => {
      const sub = args[0] ?? ''
      if (sub === 'install') {
        const pkg = args[1] ?? 'package'
        return [
          gap(),
          dim('Reading package lists... Done'),
          dim('Building dependency tree... Done'),
          err(`E: Unable to locate package ${pkg}`),
          dim("apt-get? Respect for the classics. Still won't work though."),
          gap(),
        ]
      }
      return [
        gap(),
        err(`E: Invalid operation ${sub || '(none)'}`),
        dim("apt-get? Respect for the classics. Still won't work though."),
        gap(),
      ]
    },
  },

  {
    name: 'exit',
    hidden: true,
    description: '',
    fn: () => [
      gap(),
      dim('There is no exit. Only the void.'),
      dim('(And the rest of the site. Click around.)'),
      gap(),
    ],
  },

  {
    name: 'echo',
    hidden: true,
    description: '',
    fn: (args) => [gap(), out(args.join(' ') || ''), gap()],
  },

  {
    name: 'grep',
    hidden: true,
    description: '',
    fn: (args) => {
      const pattern = args[0] ?? ''
      return [
        gap(),
        err(`grep: ${pattern}: No files to search`),
        dim('There is nothing here to grep through. Trust me, I checked.'),
        gap(),
      ]
    },
  },

  {
    name: 'mkdir',
    hidden: true,
    description: '',
    fn: (args) => {
      const dir = args[0] ?? 'newdir'
      return [
        gap(),
        err(`mkdir: cannot create directory '${dir}': Read-only filesystem`),
        dim("You can't build directories here. Ironic, given the site's theme."),
        gap(),
      ]
    },
  },

  {
    name: 'touch',
    hidden: true,
    description: '',
    fn: (args) => {
      const file = args[0] ?? 'file'
      return [gap(), err(`touch: cannot touch '${file}': Read-only filesystem`), gap()]
    },
  },

  {
    name: 'vim',
    hidden: true,
    description: '',
    fn: () => [gap(), warn('vim: no terminal. Also, how were you planning to exit?'), gap()],
  },

  {
    name: 'vi',
    hidden: true,
    description: '',
    fn: () => [gap(), warn('vi: no terminal. Also, how were you planning to exit?'), gap()],
  },

  {
    name: 'nano',
    hidden: true,
    description: '',
    fn: () => [
      gap(),
      out('nano: starting editor...'),
      gap(),
      out('  GNU nano — <new buffer>'),
      gap(),
      dim('  [ just kidding. this is not nano. ]'),
      gap(),
      dim('^X Exit   ^O Write Out   ^G Help'),
      dim('  (none of these work)'),
      gap(),
    ],
  },

  {
    name: 'history',
    hidden: true,
    description: '',
    fn: () => [
      gap(),
      dim('Your history in this session is already visible above.'),
      dim('Your broader history is none of my business.'),
      gap(),
    ],
  },

  {
    name: 'man',
    hidden: true,
    description: '',
    fn: (args) => {
      const cmd = args[0] ?? ''
      if (!cmd) return [gap(), err('What manual page do you want?'), gap()]
      return [
        gap(),
        warn(`No manual entry for ${cmd}`),
        dim('This is a portfolio, not a man page server.'),
        gap(),
      ]
    },
  },

  {
    name: 'env',
    hidden: true,
    description: '',
    fn: () => [
      gap(),
      out('NODE_ENV=production'),
      out('SHELL=/bin/fake'),
      out('USER=curious'),
      out('HOME=/dev/null'),
      out('TERM=browser'),
      out('PATH=/usr/bin:/bin:/usr/sbin:/you-get-the-idea'),
      gap(),
    ],
  },

  {
    name: 'printenv',
    hidden: true,
    description: '',
    fn: (args) => {
      const vars: Record<string, string> = {
        NODE_ENV: 'production',
        SHELL: '/bin/fake',
        USER: 'curious',
        HOME: '/dev/null',
        TERM: 'browser',
      }
      if (args[0]) {
        const val = vars[args[0].toUpperCase()]
        return val ? [gap(), out(val), gap()] : [gap(), gap()]
      }
      return [gap(), ...Object.entries(vars).map(([k, v]) => out(`${k}=${v}`)), gap()]
    },
  },

  {
    name: 'ps',
    hidden: true,
    description: '',
    fn: () => [
      gap(),
      out('  PID TTY          TIME CMD'),
      out('    1 pts/0    00:00:00 bash (fake)'),
      out('    2 pts/0    00:00:00 react'),
      out('    3 pts/0    00:00:00 tailwind'),
      out('    4 pts/0    00:00:00 your-curiosity'),
      gap(),
    ],
  },

  {
    name: 'chmod',
    hidden: true,
    description: '',
    fn: (args) => {
      const [mode, file] = args
      if (!mode || !file) return [gap(), err('chmod: missing operand'), gap()]
      return [
        gap(),
        err(`chmod: changing permissions of '${file}': Operation not permitted`),
        dim("There's nothing to chmod. There's nothing to protect either."),
        gap(),
      ]
    },
  },

  {
    name: 'kill',
    hidden: true,
    description: '',
    fn: (args) => {
      const pid = args[0] ?? ''
      if (!pid) return [gap(), err('kill: usage: kill pid'), gap()]
      if (pid === '1')
        return [
          gap(),
          err('kill: (1) Operation not permitted'),
          dim("That's the browser tab. Don't."),
          gap(),
        ]
      return [
        gap(),
        err(`kill: (${pid}) No such process`),
        dim('Nothing to kill. Everything here is already stateless.'),
        gap(),
      ]
    },
  },
]

export type { CommandDef }

export const COMMANDS = Object.fromEntries(
  COMMAND_DEFS.map(({ name, description, hidden, fn, stream }) => [
    name,
    { description, hidden, fn, stream },
  ]),
) as Record<string, CommandDef>

export const BOOT_LINES: OutputLine[] = [
  dim('Initialising very-real-terminal...'),
  gap(),
  out("Type 'help' to see available commands."),
  gap(),
]

export function processCommand(raw: string, navigate: NavigateFunction): OutputLine[] {
  const [name, ...args] = raw.trim().split(/\s+/)

  const def = COMMANDS[name.toLowerCase()]
  if (!def) {
    return [err(`command not found: ${name}`), dim("Type 'help' to see available commands."), gap()]
  }
  return def.fn(args, navigate)
}
