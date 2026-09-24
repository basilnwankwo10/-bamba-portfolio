// Bamba Portfolio Interactive Controller
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons if available
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // --- Project Data Store ---
  const projectsData = {
    'fliphub': {
      title: 'FLIPhub.ng — Campus Marketplace & WhatsApp Order Engine',
      subtitle: 'Live Production Web Platform for Student Peer-to-Peer Commerce',
      category: 'Marketplace & Fullstack',
      status: 'Live in Production',
      statusColor: 'emerald',
      liveUrl: 'https://fliphub.ng',
      githubUrl: 'https://github.com/basilnwankwo10/fliphub',
      heroImage: 'assets/Fliphub_Build_Metrics_Card.png',
      badge: 'Full-Stack & Business Analysis',
      problem: `University campuses suffer from highly fragmented and unsafe student commerce. Students buy and sell items across chaotic WhatsApp groups where posts get buried, scams occur, and item discovery is virtually impossible.`,
      solution: `Engineered FLIPhub (fliphub.ng), a centralized campus marketplace supporting item listings, public buyer request boards, and direct WhatsApp Business API messaging. Designed an admin operations hub with inventory management, token security, and real-time order processing.`,
      architecture: [
        'Client: Responsive web interface with real-time item cards, seller upload forms, and buyer request feed.',
        'Backend: Node.js & Express server hosting REST endpoints, session stores, and file upload handlers.',
        'Integrations: Meta WhatsApp Cloud API & Webhook for instant student notification and inquiries.',
        'DevOps: DigitalOcean cloud droplet running reverse-proxied production server with automated process supervision.'
      ],
      baHighlights: [
        'Conducted user journey mapping for Nigerian university students to reduce listing time to under 60 seconds.',
        'Implemented zero-leakage order workflows ensuring items remain visible until verified and marked sold by admin.',
        'Formulated inventory control rules and created an admin queue to eliminate duplicate and spam submissions.'
      ],
      techStack: ['Node.js', 'Express', 'Meta WhatsApp API', 'DigitalOcean VPS', 'systemd', 'REST API', 'JavaScript', 'CSS3']
    },
    'bamba-shop': {
      title: 'Bamba Tech & Gaming Hub — Telegram Virtual Repair Shop',
      subtitle: 'Conversational Commerce, Technician Dispatch & Gaming Catalog',
      category: 'Telegram & AI Bots',
      status: 'Live on Telegram',
      statusColor: 'cyan',
      liveUrl: 'https://t.me/BambaShop_bot',
      githubUrl: '#',
      heroImage: 'assets/device_unlock_metric_card.png',
      badge: 'Conversational Ops & Automation',
      problem: `As a hands-on Mobile Software Technician and Game Console Specialist, Bamba faced operational bottlenecks: gadget repair and console software services (firmware flashing, carrier/FRP unlocking, OS formatting, console jailbreaking, and game installs) suffer from severe quoting complexity. Standard fixed prices fail because work depends on device make, fault diagnosis, and parts availability.`,
      solution: `Built @BambaShop_bot on Telegram to transform Bamba's physical repair & gaming shop into an automated virtual storefront. Customers submit mobile/console issues for custom diagnosis quotes, select specific vetted technicians, schedule repair slots, browse console games/accessories, and track repair status directly in Telegram.`,
      architecture: [
        'Bot Engine: Telegraf.js handling complex conversational flows, state machines, and callback queries.',
        'Database: Lightweight JSON store tracking technicians, appointments, repair tickets, and game inventory.',
        'Admin Portal: Role-restricted admin panel protected by password and Telegram ID allowlisting.',
        'Features: Dynamic quote intake for mobile flashing/unlocking, console repair booking, technician availability toggles, bulk game uploads, and promo broadcasts.'
      ],
      baHighlights: [
        'Translated real-world mobile flashing, carrier unlocking, and console repair edge cases into a frictionless Telegram quote workflow.',
        'Designed technician allocation workflows allowing the shop owner to onboard and schedule techs seamlessly.',
        'Integrated a full console gaming catalog with bulk upload, pagination, cart system, and gaming accessories distribution.',
        'Generated a standardized Bamba Bot Business Proposal to license the solution to third-party tech repair shops.'
      ],
      techStack: ['Node.js', 'Telegraf.js', 'Telegram Bot API', 'Mobile Firmware & Unlocking', 'Console Software', 'DigitalOcean']
    },
    'basil-agent': {
      title: 'Basil Agent — Private Telegram AI Operations Operator',
      subtitle: 'Autonomous Cloud System Administrator with Human-in-the-Loop Safeguards',
      category: 'Telegram & AI Bots',
      status: 'Deployed on VPS',
      statusColor: 'purple',
      liveUrl: '#',
      githubUrl: '#',
      heroImage: 'assets/Sammy_Work_Metrics_Card.png',
      badge: 'Autonomous AI & Cloud Ops',
      problem: `Managing cloud VPS infrastructure on the go usually requires opening an SSH terminal on a laptop. Traditional AI agents with arbitrary bash execution pose severe security risks and risk accidental system destruction.`,
      solution: `Architected Basil Agent, a private Telegram AI operator powered by Groq (Llama-3.1-8B). Deployed directly on DigitalOcean with strict human-in-the-loop verification: system commands generated by the AI require an explicit approval code from the authenticated admin Telegram ID before execution.`,
      architecture: [
        'Inference: Groq Cloud API running ultra-fast Llama-3.1-8B-instant reasoning.',
        'Security Layer: Two-step authorization (/run generates one-time verification token, /approve [TOKEN] triggers execution).',
        'Filesystem Guard: Blacklisted access to sensitive files (SSH keys, .env configs, root credentials).',
        'Runtime: Node.js running under systemd daemon with automated crash restart and persistent state logs.'
      ],
      baHighlights: [
        'Engineered fail-safe security protocol balancing operator mobility with strict infrastructure defense.',
        'Formalized audit logs tracking all AI-suggested commands, execution codes, and terminal output.',
        'Enabled high-speed devops management from a smartphone while traveling internationally.'
      ],
      techStack: ['Node.js', 'Groq SDK (Llama-3.1)', 'Telegraf.js', 'systemd', 'DigitalOcean', 'Human-in-the-Loop Security']
    },
    'qa-audit': {
      title: 'AI Website QA & Business Analysis Audit Engine',
      subtitle: 'Standardized 50+ Metric Audit Checklist & Automated Report Generator',
      category: 'Business Analysis & QA',
      status: 'Methodology Framework',
      statusColor: 'emerald',
      liveUrl: '#',
      githubUrl: '#',
      heroImage: 'assets/Fliphub_WhatsApp_Milestone_Flyer.png',
      badge: 'Certified Business Analysis (NCBA)',
      problem: `AI-vibe-coded tools and freelance websites frequently ship with invisible edge-case failures, broken responsiveness, untracked errors, and confusing user funnels that destroy client trust.`,
      solution: `Created an end-to-end QA Audit Framework and Python automation engine. Evaluates digital products across 50+ criteria spanning functional correctness, responsive UX, API resilience, and performance, generating executive-ready audit reports.`,
      architecture: [
        'Audit Engine: Python script parsing structured inspection checklists and severity matrices.',
        'Artifacts: Generates formatted Markdown and executive PDF summary scorecards for C-level stakeholders.',
        'Issue Tracking: Standardized taxonomy categorizing bugs by severity (Critical, Major, Minor, Polish) and business impact.'
      ],
      baHighlights: [
        'Built directly on Nebiant Certified Business Analyst (NCBA™) frameworks.',
        'Bridges technical code inspection with business value, conversion rates, and risk mitigation.',
        'Used to audit, harden, and verify FLIPhub and Bamba Shop prior to public release.'
      ],
      techStack: ['Python', 'Business Analysis (NCBA)', 'Quality Assurance', 'Markdown/PDF Generator', 'Risk Assessment']
    }
  };

  // --- Modal Logic ---
  const modal = document.getElementById('project-modal');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  function openProjectModal(projectId) {
    const data = projectsData[projectId];
    if (!data) return;

    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-subtitle').textContent = data.subtitle;
    document.getElementById('modal-badge').textContent = data.badge;
    document.getElementById('modal-status').textContent = data.status;
    document.getElementById('modal-image').src = data.heroImage;
    document.getElementById('modal-problem').textContent = data.problem;
    document.getElementById('modal-solution').textContent = data.solution;

    // Architecture List
    const archList = document.getElementById('modal-architecture');
    archList.innerHTML = '';
    data.architecture.forEach(item => {
      const li = document.createElement('li');
      li.className = 'text-sm text-slate-300 flex items-start gap-2';
      li.innerHTML = `<span class="text-cyan-400 font-bold mt-0.5">▹</span> <span>${item}</span>`;
      archList.appendChild(li);
    });

    // BA Highlights List
    const baList = document.getElementById('modal-ba');
    baList.innerHTML = '';
    data.baHighlights.forEach(item => {
      const li = document.createElement('li');
      li.className = 'text-sm text-slate-300 flex items-start gap-2';
      li.innerHTML = `<span class="text-emerald-400 font-bold mt-0.5">✓</span> <span>${item}</span>`;
      baList.appendChild(li);
    });

    // Tech Stack Badges
    const stackContainer = document.getElementById('modal-stack');
    stackContainer.innerHTML = '';
    data.techStack.forEach(tech => {
      const span = document.createElement('span');
      span.className = 'px-2.5 py-1 text-xs font-mono rounded bg-slate-800/90 text-cyan-300 border border-slate-700';
      span.textContent = tech;
      stackContainer.appendChild(span);
    });

    // Live links
    const liveLink = document.getElementById('modal-live-link');
    if (data.liveUrl && data.liveUrl !== '#') {
      liveLink.href = data.liveUrl;
      liveLink.classList.remove('hidden');
    } else {
      liveLink.classList.add('hidden');
    }

    const githubLink = document.getElementById('modal-github-link');
    if (data.githubUrl && data.githubUrl !== '#') {
      githubLink.href = data.githubUrl;
      githubLink.classList.remove('hidden');
    } else {
      githubLink.classList.add('hidden');
    }

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    if (window.lucide) window.lucide.createIcons();
  }

  function closeProjectModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  // Attach modal trigger listeners to all project cards
  document.querySelectorAll('[data-project-trigger]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const pid = btn.getAttribute('data-project-trigger');
      openProjectModal(pid);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeProjectModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeProjectModal();
    }
  });

  // --- Project Filtering ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('[data-category]');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active', 'bg-cyan-500/20', 'text-cyan-400', 'border-cyan-500/40'));
      filterBtns.forEach(b => b.classList.add('text-slate-400', 'border-slate-800'));
      btn.classList.add('active', 'bg-cyan-500/20', 'text-cyan-400', 'border-cyan-500/40');
      btn.classList.remove('text-slate-400', 'border-slate-800');

      const filter = btn.getAttribute('data-filter');
      projectCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // --- Interactive Terminal Logic ---
  const terminalInput = document.getElementById('term-input');
  const terminalHistory = document.getElementById('term-history');
  const commandHistory = [];
  let historyIndex = -1;

  const terminalCommands = {
    'help': `Available commands:
  <span class="text-cyan-400 font-bold">whoami</span>    - Learn about Basil "Bamba" Nwankwo
  <span class="text-amber-400 font-bold">mantra</span>    - The core operator & BA philosophies
  <span class="text-amber-400 font-bold">setup</span>     - Tour the multi-screen battlestation
  <span class="text-cyan-400 font-bold">tech</span>      - Mobile software & console engineering capabilities
  <span class="text-cyan-400 font-bold">gaming</span>    - Console game installation, software & accessories
  <span class="text-cyan-400 font-bold">skills</span>    - Core competencies & tech arsenal
  <span class="text-cyan-400 font-bold">projects</span>  - Flagship shipped products
  <span class="text-cyan-400 font-bold">stats</span>     - Real-world production metrics
  <span class="text-cyan-400 font-bold">china</span>     - Language immersion & cross-border advantage
  <span class="text-cyan-400 font-bold">goal100k</span>  - The $100k barbell strategy & execution plan
  <span class="text-cyan-400 font-bold">contact</span>   - Direct channels to collaborate or hire
  <span class="text-cyan-400 font-bold">clear</span>     - Clear terminal buffer`,

    'mantra': `<div class="space-y-1.5 text-slate-300">
  <div>☕ <span class="text-amber-400 font-bold">FOCUS • BUILD • EARN • REPEAT</span></div>
  <div class="text-xs text-slate-400 pl-4">The operator code — razor discipline, continuous shipping, and asymmetric execution.</div>
  <div>📓 <span class="text-cyan-400 font-bold">IDEAS • PLANS • EXECUTION</span></div>
  <div class="text-xs text-slate-400 pl-4">The BA methodology — turning raw user concepts into structured PRDs, clean workflows, and live production software.</div>
</div>`,

    'setup': `<div class="space-y-1 text-slate-300">
  <span class="text-cyan-400 font-bold">BAMBA Battlestation Setup:</span>
  <div>🖥️ <span class="text-white font-semibold">Primary Curved Display:</span> Central command center running BAMBA ops, dev dashboards, and real-time on-chain feeds.</div>
  <div>💻 <span class="text-white font-semibold">Dual Laptops:</span> Primary rapid AI vibe-coding machine + dedicated Linux server & terminal management station.</div>
  <div>📱 <span class="text-white font-semibold">Mobile Testbed:</span> Live crypto/portfolio tracker ($12k+ active portfolio) + smartphone firmware flashing/diagnostics.</div>
  <div>💡 <span class="text-white font-semibold">Studio Ambience:</span> Warm amber ring light for late-night build sprints, content creation, and product demos.</div>
</div>`,

    'whoami': `<div class="space-y-1">
  <span class="text-emerald-400 font-bold">Basil Chinaza Nwankwo ("Bamba")</span>
  <div class="text-slate-300">▹ <span class="text-cyan-300">Brand:</span> BAMBA — Tech • Gaming • Blockchain</div>
  <div class="text-slate-300">▹ <span class="text-amber-300">Identity:</span> AI Operator & Vibe Coder | Certified Business Analyst</div>
  <div class="text-slate-300">▹ <span class="text-yellow-300">Hardware & Tech:</span> Master Software Tech (2018–2026) • 10,000+ Gadgets Serviced</div>
  <div class="text-slate-300">▹ <span class="text-slate-400">Mantras:</span> FOCUS • BUILD • EARN • REPEAT | IDEAS • PLANS • EXECUTION</div>
  <div class="text-slate-300">▹ <span class="text-cyan-300">Current Base:</span> China 🇨🇳 (Language immersion & Pre-Master's)</div>
</div>`,

    'tech': `<div class="space-y-1 text-slate-300">
  <span class="text-cyan-400 font-bold">Software Technician & Diagnostics (2018–2026 • 10k+ Gadgets):</span>
  <div>📱 <span class="text-white font-semibold">Mobile Firmware:</span> Stock & custom ROM flashing, bootloader unlocking, baseband/IMEI troubleshooting, FRP bypass & carrier unlocking.</div>
  <div>💻 <span class="text-white font-semibold">MacBooks & Laptops:</span> macOS corruptions, T2/Apple Silicon recovery, EFI/OS formatting, bad software diagnostics.</div>
  <div>🎮 <span class="text-white font-semibold">Game Consoles:</span> Firmware updates, storage upgrades, softmodding, resolving broken game databases & system crashes.</div>
  <div>🛒 <span class="text-white font-semibold">Gaming Retail:</span> Console game sales, digital installations, controllers, mod parts & accessories.</div>
</div>`,

    'gaming': `<div class="space-y-1 text-slate-300">
  <span class="text-emerald-400 font-bold">Gaming Hub & Distribution:</span>
  <div>▹ Digital and physical game library installations for PlayStation, Xbox, and Nintendo ecosystems.</div>
  <div>▹ Console hardware maintenance, thermal repasting, storage expansion, and firmware stabilization.</div>
  <div>▹ Sourcing & retailing high-demand gaming accessories, controllers, and specialized cables.</div>
  <div>▹ Operating @BambaShop_bot as an automated catalog and booking system for gamers and repair clients.</div>
</div>`,

    'skills': `<div class="space-y-2">
  <div><span class="text-cyan-400 font-bold">[Business Analysis]</span> Requirements Elicitation, PRDs, BPMN Workflows, Gap Analysis, Stakeholder Mgmt, Tableau & Power BI</div>
  <div><span class="text-yellow-400 font-bold">[Software Tech • 10k+ Units]</span> 8+ Yrs (2018–2026): Phone Flashing, MacBooks OS Recovery, FRP/Carrier Unlocking, Console Softmods & Fixes</div>
  <div><span class="text-emerald-400 font-bold">[AI Vibe Coding]</span> Node.js, Express, Telegraf.js, Groq / Llama-3.1 API, Meta WhatsApp Graph API, Automation Scripts</div>
  <div><span class="text-purple-400 font-bold">[Web3 & Trading]</span> On-Chain Analysis, Meme Coin Market Cycles, Telegram Mini Apps, TON Blockchain, Tokenomics Modeling</div>
  <div><span class="text-slate-300 font-bold">[Global & Languages]</span> English (Fluent), Igbo (Native), Mandarin Chinese (In Progress)</div>
</div>`,

    'projects': `<div class="space-y-1.5">
  <div>🚀 <a href="https://fliphub.ng" target="_blank" class="text-cyan-400 underline font-bold">FLIPhub.ng</a> - Live Campus Student Marketplace & WhatsApp commerce engine</div>
  <div>🤖 <a href="https://t.me/BambaShop_bot" target="_blank" class="text-emerald-400 underline font-bold">@BambaShop_bot</a> - Telegram virtual repair shop & gaming console booking system</div>
  <div>⚡ <span class="text-purple-400 font-bold">Basil Agent</span> - Private Telegram AI system administrator running on DigitalOcean VPS</div>
  <div>📊 <span class="text-slate-300 font-bold">QA Audit Engine</span> - 50+ point BA/QA automated inspection & reporting framework</div>
</div>`,

    'stats': `<div class="grid grid-cols-2 gap-2 text-xs">
  <div class="p-2 bg-slate-900 border border-slate-800 rounded">🛠️ 10,000+ Gadgets Restored</div>
  <div class="p-2 bg-slate-900 border border-slate-800 rounded">⏱️ 8+ Years Tech Lead (2018-2026)</div>
  <div class="p-2 bg-slate-900 border border-slate-800 rounded">🌐 1 Live Marketplace (fliphub.ng)</div>
  <div class="p-2 bg-slate-900 border border-slate-800 rounded">🤖 2 Production Telegram Bots</div>
  <div class="p-2 bg-slate-900 border border-slate-800 rounded">📜 1 NCBA™ BA Certification</div>
  <div class="p-2 bg-slate-900 border border-slate-800 rounded">🎓 2:1 B.Sc UNIZIK Degree</div>
  <div class="p-2 bg-slate-900 border border-slate-800 rounded">🚀 1 Autonomous AI Agent Deployed</div>
  <div class="p-2 bg-slate-900 border border-slate-800 rounded">🌏 Based in China 🇨🇳</div>
</div>`,

    'china': `<div class="text-slate-300">
  Currently residing in China undergoing intensive Mandarin Chinese language study while preparing for Master's studies. 
  Leveraging direct geographic proximity to Asia's tech hardware supply chains and Web3/crypto developer hubs to act as a cross-border bridge between Western & Asian digital ecosystems.
</div>`,

    'goal100k': `<div class="space-y-1">
  <span class="text-yellow-400 font-bold">Target: $100,000 USD via Asymmetric Barbell Execution</span>
  <div class="text-slate-300">1. <span class="text-cyan-300">Predictable Foundation:</span> High-ticket AI-assisted Business Analysis & technical consulting.</div>
  <div class="text-slate-300">2. <span class="text-emerald-300">Scalable Multipliers:</span> Vibe-coded Micro-SaaS, Telegram Mini-Apps, and paid crypto tools.</div>
  <div class="text-slate-300">3. <span class="text-purple-300">Asymmetric Upside:</span> Strictly risk-managed on-chain & meme coin trading (profits channeled from cashflow).</div>
</div>`,

    'contact': `<div class="space-y-1.5 text-slate-300">
  <div>💬 <span class="text-cyan-400 font-bold">Telegram (Direct):</span> <a href="https://t.me/kryptBamba" target="_blank" class="underline text-cyan-300">@kryptBamba</a></div>
  <div>🐦 <span class="text-cyan-400 font-bold">X (Work & Shipping):</span> <a href="https://x.com/KryptBamba10" target="_blank" class="underline text-cyan-300">@KryptBamba10</a></div>
  <div>🐦 <span class="text-amber-400 font-bold">X (Primary Profile):</span> <a href="https://x.com/Bamba_IqL?s=20" target="_blank" class="underline text-amber-300">@Bamba_IqL</a></div>
  <div>🤖 <span class="text-emerald-400 font-bold">Shop Bot Demo:</span> <a href="https://t.me/BambaShop_bot" target="_blank" class="underline text-emerald-300">@BambaShop_bot</a></div>
  <div>📱 <span class="text-emerald-400 font-bold">WhatsApp:</span> <a href="https://wa.me/2348061157423" target="_blank" class="underline text-emerald-300">+234 806 115 7423</a></div>
  <div>📧 <span class="text-purple-400 font-bold">Email:</span> <a href="mailto:basilnwankwo10@gmail.com" class="underline text-purple-300">basilnwankwo10@gmail.com</a></div>
  <div>💼 <span class="text-blue-400 font-bold">LinkedIn:</span> <a href="https://linkedin.com/in/basil-nwankwo" target="_blank" class="underline text-blue-300">linkedin.com/in/basil-nwankwo</a></div>
  <div>🐙 <span class="text-slate-200 font-bold">GitHub:</span> <a href="https://github.com/basilnwankwo10" target="_blank" class="underline text-slate-300">github.com/basilnwankwo10</a></div>
</div>`,

    'sudo': `<div class="text-red-400">Nice try! User 'guest' is not in the sudoers file. This incident will be reported to Bamba. 😉</div>`
  };

  if (terminalInput && terminalHistory) {
    terminalInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const cmdText = terminalInput.value.trim().toLowerCase();
        if (cmdText) {
          commandHistory.push(cmdText);
          historyIndex = commandHistory.length;

          // Echo user command
          const userLine = document.createElement('div');
          userLine.className = 'flex items-center gap-2 text-slate-300';
          userLine.innerHTML = `<span class="text-cyan-400 font-mono">bamba@battlestation:~$</span> <span class="text-white font-mono">${cmdText}</span>`;
          terminalHistory.appendChild(userLine);

          // Handle command
          if (cmdText === 'clear') {
            terminalHistory.innerHTML = '';
          } else {
            const resp = terminalCommands[cmdText] || `<span class="text-red-400">Command not recognized: '${cmdText}'. Type <span class="text-cyan-400 font-bold">help</span> to view available commands.</span>`;
            const respLine = document.createElement('div');
            respLine.className = 'text-slate-300 font-mono text-xs pl-2 border-l border-cyan-500/30 my-1 py-1 leading-relaxed';
            respLine.innerHTML = resp;
            terminalHistory.appendChild(respLine);
          }

          terminalInput.value = '';
          terminalHistory.scrollTop = terminalHistory.scrollHeight;
        }
      } else if (e.key === 'ArrowUp') {
        if (historyIndex > 0) {
          historyIndex--;
          terminalInput.value = commandHistory[historyIndex];
        }
      } else if (e.key === 'ArrowDown') {
        if (historyIndex < commandHistory.length - 1) {
          historyIndex++;
          terminalInput.value = commandHistory[historyIndex];
        } else {
          historyIndex = commandHistory.length;
          terminalInput.value = '';
        }
      }
    });
  }

  // --- Copy Contact Action ---
  const copyEmailBtn = document.getElementById('copy-email-btn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('basilnwankwo10@gmail.com').then(() => {
        const origText = copyEmailBtn.innerText;
        copyEmailBtn.innerText = 'Copied to Clipboard! ✓';
        copyEmailBtn.classList.add('bg-emerald-500/20', 'text-emerald-400', 'border-emerald-500/40');
        setTimeout(() => {
          copyEmailBtn.innerText = origText;
          copyEmailBtn.classList.remove('bg-emerald-500/20', 'text-emerald-400', 'border-emerald-500/40');
        }, 2000);
      });
    });
  }

  // --- Mobile Menu Toggle ---
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    // Close mobile menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });
  }
});
