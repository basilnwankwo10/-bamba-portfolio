/**
 * Basil Nwankwo [Bamba] — GROVE V7 Client Controller
 * Safe client-side interactions: Navigation, BambaOS Console, Scroll Reveal
 */

(function () {
  'use strict';

  // --- Mobile Navigation ---
  const nav = document.getElementById('navlinks');
  const toggle = document.getElementById('navToggle');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const expanded = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });

    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- Scroll Reveal Animations ---
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const elements = document.querySelectorAll('.v7-reveal');
    elements.forEach(el => el.classList.add('v7-pending'));

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('v7-pending');
          entry.target.classList.add('v7-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.06 });

    elements.forEach(el => observer.observe(el));
  }

  // --- BambaOS Interactive Console ---
  const out = document.getElementById('v7-terminal-output');
  const form = document.getElementById('v7-terminal-form');
  const field = document.getElementById('v7-command');

  // Harmonized commands database preserving original Battlestation knowledge
  const commands = {
    help: `Available commands:
  help       - List available console commands
  about      - Overview of Basil Nwankwo [Bamba]
  whoami     - Identity, brand, mantras, and active base
  projects   - Flagship shipped products & research systems
  skills     - Core competencies across BA, AI & tech
  tech       - Mobile software & hardware diagnostics (10k+ units)
  gaming     - Game console servicing, mods & retail
  mantra     - The operator code & BA methodology
  stats      - Verified production & career metrics
  china      - International base & Mandarin language immersion
  goal100k   - The asymmetric barbell execution plan
  setup      - Hardware battlestation desk layout
  contact    - Direct communication channels
  clear      - Clear terminal screen buffer`,

    about: `Basil Nwankwo [Bamba] — Business Analyst (NCBA™), AI builder and software systems practitioner. Bridging Business Analysis rigor with rapid AI development and hands-on systems expertise.`,

    whoami: `Basil Chinaza Nwankwo ("Bamba")
  • Brand: BAMBA — Tech • Gaming • Blockchain
  • Identity: Certified Business Analyst (NCBA™) & AI Operator
  • Track Record: 8+ Years (2018–2026) servicing 10,000+ smartphones, MacBooks & game consoles
  • Current Base: China 🇨🇳 (Mandarin language immersion & Pre-Master's)`,

    projects: `Flagship Shipped Products:
  1. FLIPhub.ng — Live campus peer-to-peer marketplace & WhatsApp order engine
  2. Bamba Tech & Gaming Hub — Telegram virtual repair shop bot (@BambaShop_bot)
  3. Basil Agent — Private Telegram AI operations operator on VPS (human-in-the-loop)
  4. Website QA Audit Engine — Standardized 50+ metric BA/QA inspection framework

Research & Exploration:
  • Vanta — Daily sweep trading systems research (XAUUSD / MT5)
  • Quiver — Token scanner & blockchain monitoring research
  • CreditLedger — Small business credit reconciliation discovery`,

    skills: `Technical Arsenal:
  • Business Analysis: Requirements elicitation, PRDs, BPMN workflow modeling, gap analysis, NCBA™ standards
  • Software Tech: Stock/custom ROM flashing, FRP/carrier unlocking, macOS recovery, console softmods
  • AI Engineering: Node.js, Express, Python, Telegraf.js, Groq API (Llama-3.1), Meta Graph API
  • Web3 & Analytics: On-chain analysis, tokenomics, Telegram Mini Apps, risk mitigation`,

    tech: `Mobile Software & Systems Diagnostics (2018–2026 • 10,000+ Gadgets):
  • Mobile Firmware: Stock/custom ROM flashing, bootloader diagnostics, FRP/carrier unlocks
  • Apple / MacBooks: macOS corruptions, T2/Apple Silicon recovery, EFI formatting
  • Game Consoles: PlayStation / Xbox firmware rebuilds, storage expansion, softmodding, database repair`,

    gaming: `Gaming Hub & Distribution:
  • Console software maintenance, thermal service, storage upgrades, and database recovery
  • Digital game installations for PlayStation, Xbox, and Nintendo ecosystems
  • Sourcing and distribution of controllers, mod parts, and high-demand accessories
  • Operating @BambaShop_bot as an automated catalog and booking system`,

    mantra: `Core Philosophies:
  ☕ FOCUS • BUILD • EARN • REPEAT
     The operator code — discipline, continuous shipping, and asymmetric execution.
  📓 IDEAS • PLANS • EXECUTION
     The BA methodology — turning raw concepts into structured PRDs and reliable software.`,

    stats: `Production Metrics:
  • 10,000+ Gadgets Restored (2018–2026)
  • 8+ Years Hands-on Tech Experience
  • 1 Certified Business Analyst (NCBA™) Credential
  • 1 Live Campus Marketplace (fliphub.ng)
  • 2 Production Telegram Bots Deployed
  • 2:1 B.Sc. Environmental Management (UNIZIK)
  • International base in China 🇨🇳`,

    china: `International Immersion:
  Currently residing in China undergoing intensive Mandarin Chinese language immersion while preparing for Master's studies. Leveraging direct geographic proximity to Asia's tech hardware supply chains and developer hubs to build cross-border digital bridges.`,

    goal100k: `Target: $100k Asymmetric Barbell Execution:
  1. Predictable Foundation: High-ticket AI-assisted BA consulting and process automation
  2. Scalable Multipliers: Vibe-coded micro-tools, Telegram bots, and automation templates
  3. Asymmetric Upside: Strictly risk-managed on-chain and Web3 analysis funded by cashflow`,

    setup: `Hardware Command Center:
  • Primary curved monitor for dev dashboards and real-time feeds
  • Dual laptops: rapid AI development machine + dedicated Linux terminal station
  • Mobile testing station for firmware flashing, crypto portfolio, and QA
  • Warm studio ring-light ambience for late-night build sprints`,

    contact: `Direct Communication Channels:
  • Telegram (Direct): @kryptBamba (https://t.me/kryptBamba)
  • WhatsApp: +234 806 115 7423 (https://wa.me/2348061157423)
  • Email: basilnwankwo10@gmail.com
  • GitHub: https://github.com/basilnwankwo10
  • LinkedIn: https://www.linkedin.com/in/basil-nwankwo/
  • X / Twitter: @Bamba_IqL / @KryptBamba10`,

    sudo: `Nice try! Guest user is not in the sudoers file. This incident has been logged. 😉`
  };

  const commandHistory = [];
  let historyIndex = -1;

  function run(command) {
    const rawCmd = String(command || 'help').trim();
    const cmd = rawCmd.toLowerCase();

    if (!cmd) return;

    if (cmd === 'clear') {
      out.textContent = '';
      if (field) field.value = '';
      return;
    }

    commandHistory.push(rawCmd);
    historyIndex = commandHistory.length;

    const response = commands[cmd] || `Command not recognized: '${rawCmd}'. Type 'help' for available commands.`;
    out.textContent = response;

    if (field) field.value = '';
  }

  if (form && field) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      run(field.value);
    });

    field.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowUp') {
        if (historyIndex > 0) {
          historyIndex--;
          field.value = commandHistory[historyIndex];
        }
      } else if (e.key === 'ArrowDown') {
        if (historyIndex < commandHistory.length - 1) {
          historyIndex++;
          field.value = commandHistory[historyIndex];
        } else {
          historyIndex = commandHistory.length;
          field.value = '';
        }
      }
    });
  }

  // Quick command buttons
  document.querySelectorAll('[data-v7-cmd]').forEach(btn => {
    btn.addEventListener('click', () => {
      run(btn.dataset.v7Cmd);
    });
  });
})();
