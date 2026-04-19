// ============================================================
//  APP.JS — Enhanced Renderer with Animations v2
// ============================================================

(function () {
  "use strict";

  const d = resumeData;
  const app = document.getElementById("app");

  // ── Helper ─────────────────────────────────────────────────
  function html(tag, className, innerHTML) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (innerHTML) el.innerHTML = innerHTML;
    return el;
  }

  // ── 1. Hero Section ────────────────────────────────────────
  function renderHero() {
    const phones = d.phones
      .map(
        (p) =>
          `<a class="contact-chip" href="tel:${p}"><span class="chip-icon">📱</span><span>${p}</span></a>`
      )
      .join("");

    const firstName = d.name.split(" ")[0];
    const lastName = d.name.split(" ").slice(1).join(" ");

    const section = html(
      "section",
      "hero section",
      `
      <div class="hero-badge">
        <span class="hero-badge-dot"></span>
        Available for opportunities
      </div>
      <h1 class="hero-name" id="hero">
        <span class="hero-name-white">${firstName} </span><span class="hero-name-gradient">${lastName}</span>
      </h1>
      <p class="hero-title"><span class="hero-title-typing" id="typing-text"></span></p>
      <div class="hero-contact">
        <a class="contact-chip" href="mailto:${d.email}">
          <span class="chip-icon">✉️</span><span>${d.email}</span>
        </a>
        ${phones}
        <span class="contact-chip">
          <span class="chip-icon">📍</span><span>${d.location}</span>
        </span>
      </div>
      <div class="hero-visa">${d.visa}</div>
      <p class="hero-summary">${d.summary}</p>
      <div class="stats-row">
        <div class="stat-item">
          <div class="stat-number" data-count="5">0+</div>
          <div class="stat-label">Years Experience</div>
        </div>
        <div class="stat-item">
          <div class="stat-number" data-count="${d.projects.length}">0</div>
          <div class="stat-label">Projects Delivered</div>
        </div>
        <div class="stat-item">
          <div class="stat-number" data-count="${d.skills.reduce((a, c) => a + c.items.length, 0)}">0+</div>
          <div class="stat-label">Technologies</div>
        </div>
      </div>
    `
    );
    app.appendChild(section);
  }

  // ── 2. Skills Section ──────────────────────────────────────
  function renderSkills() {
    const cards = d.skills
      .map(
        (cat) => `
      <div class="skill-card">
        <div class="skill-card-header">
          <span class="skill-card-icon">${cat.icon}</span>
          <span class="skill-card-title">${cat.category}</span>
        </div>
        <div class="skill-pills">
          ${cat.items.map((s) => `<span class="skill-pill">${s}</span>`).join("")}
        </div>
      </div>`
      )
      .join("");

    const section = html(
      "section",
      "section",
      `<h2 class="section-title" id="skills"><span class="section-number">01.</span> Core Competencies</h2>
       <div class="skills-grid">${cards}</div>`
    );
    app.appendChild(section);
  }

  // ── 3. Experience Section ──────────────────────────────────
  function renderExperience() {
    const items = d.experience
      .map(
        (exp) => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-header">
          <span class="timeline-company">${exp.company}</span>
          <span class="timeline-role">${exp.role}</span>
          <span class="timeline-period">${exp.period}</span>
        </div>
        <ul class="timeline-highlights">
          ${exp.highlights.map((h) => `<li>${h}</li>`).join("")}
        </ul>
      </div>`
      )
      .join("");

    const section = html(
      "section",
      "section",
      `<h2 class="section-title" id="experience"><span class="section-number">02.</span> Professional Experience</h2>
       <div class="timeline">${items}</div>`
    );
    app.appendChild(section);
  }

  // ── 4. Projects Section ────────────────────────────────────
  function renderProjects() {
    const cards = d.projects
      .map(
        (p, i) => `
      <div class="project-card">
        <div class="project-number">Project ${String(i + 1).padStart(2, "0")}</div>
        <div class="project-name">${p.name}</div>
        <div class="project-tagline">${p.tagline}</div>
        <div class="project-desc">${p.description}</div>
        <div class="project-tech">
          ${p.tech.map((t) => `<span class="project-tech-tag">${t}</span>`).join("")}
        </div>
      </div>`
      )
      .join("");

    const section = html(
      "section",
      "section",
      `<h2 class="section-title" id="projects"><span class="section-number">03.</span> Project Experience</h2>
       <div class="projects-grid">${cards}</div>`
    );
    app.appendChild(section);
  }

  // ── 5. Education ───────────────────────────────────────────
  function renderEducation() {
    const certs = d.certifications
      .map((c) => `<span class="info-tag">${c}</span>`)
      .join("");
    const langs = d.languages
      .map((l) => `<span class="info-tag">${l}</span>`)
      .join("");
    const interests = d.interests
      .map((i) => `<span class="info-tag">${i}</span>`)
      .join("");

    const section = html(
      "section",
      "section",
      `<h2 class="section-title" id="education"><span class="section-number">04.</span> Education & More</h2>
       <div class="edu-card">
         <div class="edu-degree">${d.education.degree}</div>
         <div class="edu-institution">${d.education.institution}</div>
         <div class="edu-meta">${d.education.year} · ${d.education.cgpa}</div>
       </div>
       <div class="info-row">
         <div class="info-group">
           <div class="info-group-title">🏅 Certifications</div>
           <div class="info-tags">${certs}</div>
         </div>
         <div class="info-group">
           <div class="info-group-title">🌐 Languages</div>
           <div class="info-tags">${langs}</div>
         </div>
       </div>
       <div class="info-row" style="margin-top:20px;">
         <div class="info-group">
           <div class="info-group-title">🎯 Interests</div>
           <div class="info-tags">${interests}</div>
         </div>
       </div>`
    );
    app.appendChild(section);
  }

  // ── 6. Footer ──────────────────────────────────────────────
  function renderFooter() {
    const footer = html(
      "footer",
      "footer section",
      `<p>© ${new Date().getFullYear()} ${d.name} · Built with <span class="footer-heart">♥</span></p>`
    );
    app.appendChild(footer);
  }

  // ── Typing Animation ──────────────────────────────────────
  function initTypingEffect() {
    const el = document.getElementById("typing-text");
    if (!el) return;
    const text = d.title;
    let i = 0;

    function type() {
      if (i <= text.length) {
        el.textContent = text.slice(0, i);
        i++;
        setTimeout(type, 60 + Math.random() * 40);
      }
    }

    setTimeout(type, 1200);
  }

  // ── Counter Animation ─────────────────────────────────────
  function initCounters() {
    const counters = document.querySelectorAll(".stat-number[data-count]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.dataset.count, 10);
            const suffix = el.textContent.includes("+") ? "+" : "";
            let current = 0;
            const step = Math.ceil(target / 40);
            const timer = setInterval(() => {
              current += step;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              el.textContent = current + suffix;
            }, 35);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((c) => observer.observe(c));
  }

  // ── Staggered Card Animations ─────────────────────────────
  function initStaggerAnimations() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(
              ".skill-card, .project-card, .timeline-item"
            );
            cards.forEach((card, i) => {
              setTimeout(() => {
                card.classList.add("animate-in");
              }, i * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document
      .querySelectorAll(".skills-grid, .projects-grid, .timeline")
      .forEach((el) => observer.observe(el));
  }

  // ── Card Mouse Glow Effect ────────────────────────────────
  function initCardGlow() {
    document.querySelectorAll(".skill-card, .project-card").forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty("--mouse-x", x + "%");
        card.style.setProperty("--mouse-y", y + "%");
      });
    });
  }

  // ── Mouse Glow Follower ───────────────────────────────────
  function initMouseGlow() {
    const glow = document.getElementById("mouse-glow");
    if (!glow) return;

    let mx = 0, my = 0, cx = 0, cy = 0;

    document.addEventListener("mousemove", (e) => {
      mx = e.clientX;
      my = e.clientY;
    });

    function animate() {
      cx += (mx - cx) * 0.08;
      cy += (my - cy) * 0.08;
      glow.style.left = cx + "px";
      glow.style.top = cy + "px";
      requestAnimationFrame(animate);
    }
    animate();
  }

  // ── Active Nav on Scroll ──────────────────────────────────
  function initActiveNav() {
    const sections = ["skills", "experience", "projects", "education"];
    const navLinks = document.querySelectorAll(".nav-link");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((link) => {
              link.classList.toggle(
                "active",
                link.dataset.section === entry.target.id
              );
            });
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -50% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
  }

  // ── Futuristic AI Universe Background ──────────────────────
  function initBackground() {
    const canvas = document.getElementById("bg-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let w, h, mouse = { x: -1000, y: -1000 };
    let codeStreams = [];
    let neuralNodes = [];
    let orbitRings = [];
    let dataParticles = [];
    let time = 0;

    // Code symbols: binary, brackets, AI terms
    const codeChars = "01{}[]<>/\\|=+*#@$%&!?;:._~^ΔΣΩλπ∞≈≠∫∂⟨⟩⊕⊗▸▹◆◇●○".split("");
    const aiWords = ["AI", "ML", "API", "npm", "git", "def", "fn()", "let", "var", "int", "for", "if", "==>", "( )", "{ }", "< >", "++", "0x", "//", "/**", "***", "React", "Next", "Node", "async", "await", "const", "true", "null", "=>{", "...x", "jsx", "tsx"];

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      init();
    }

    function init() {
      // ── Code Rain Streams ──
      const streamCount = Math.floor(w / 18);
      codeStreams = [];
      for (let i = 0; i < streamCount; i++) {
        codeStreams.push({
          x: (i / streamCount) * w + Math.random() * 12,
          y: Math.random() * h * 2 - h,
          speed: 0.4 + Math.random() * 1.8,
          chars: [],
          length: Math.floor(Math.random() * 22) + 8,
          opacity: Math.random() * 0.35 + 0.08,
          fontSize: Math.random() > 0.5 ? 14 : 11,
          isWord: Math.random() > 0.6,
        });

        // Fill with characters
        const stream = codeStreams[codeStreams.length - 1];
        for (let j = 0; j < stream.length; j++) {
          stream.chars.push(
            stream.isWord
              ? aiWords[Math.floor(Math.random() * aiWords.length)]
              : codeChars[Math.floor(Math.random() * codeChars.length)]
          );
        }
      }

      // ── Neural Network Nodes ──
      const nodeCount = Math.min(Math.floor((w * h) / 25000), 60);
      neuralNodes = [];
      for (let i = 0; i < nodeCount; i++) {
        neuralNodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          baseX: 0,
          baseY: 0,
          r: Math.random() * 2.5 + 1,
          dx: (Math.random() - 0.5) * 0.3,
          dy: (Math.random() - 0.5) * 0.3,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.01 + Math.random() * 0.03,
          layer: Math.random(), // depth
        });
        neuralNodes[neuralNodes.length - 1].baseX = neuralNodes[neuralNodes.length - 1].x;
        neuralNodes[neuralNodes.length - 1].baseY = neuralNodes[neuralNodes.length - 1].y;
      }

      // ── Orbiting Data Rings ──
      orbitRings = [];
      const ringCount = 3;
      for (let i = 0; i < ringCount; i++) {
        orbitRings.push({
          cx: w * (0.15 + Math.random() * 0.7),
          cy: h * (0.2 + Math.random() * 0.6),
          rx: 80 + Math.random() * 160,
          ry: 30 + Math.random() * 60,
          rotation: Math.random() * Math.PI,
          rotSpeed: (0.002 + Math.random() * 0.005) * (Math.random() > 0.5 ? 1 : -1),
          particles: Math.floor(Math.random() * 8) + 5,
          color: i === 0 ? [0, 229, 255] : i === 1 ? [168, 85, 247] : [244, 114, 182],
        });
      }

      // ── Floating Data Particles ──
      const dpCount = Math.min(Math.floor((w * h) / 12000), 80);
      dataParticles = [];
      for (let i = 0; i < dpCount; i++) {
        dataParticles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          size: Math.random() * 1.5 + 0.3,
          speedX: (Math.random() - 0.5) * 0.15,
          speedY: -0.1 - Math.random() * 0.4,
          opacity: Math.random() * 0.4 + 0.1,
          flicker: Math.random() * Math.PI * 2,
        });
      }
    }

    // ── Draw Functions ──

    function drawCodeRain() {
      for (const stream of codeStreams) {
        stream.y += stream.speed;

        for (let j = 0; j < stream.chars.length; j++) {
          const charY = stream.y - j * 16;
          if (charY < -20 || charY > h + 20) continue;

          const fade = j === 0 ? 1 : Math.max(0, 1 - j / stream.length);
          const brightness = j === 0 ? 1 : 0.5;

          // Head character glows brighter
          if (j === 0) {
            ctx.fillStyle = `rgba(0, 255, 200, ${Math.min(stream.opacity * 4, 0.95)})`;
            ctx.shadowBlur = 15;
            ctx.shadowColor = "rgba(0, 229, 255, 0.6)";
          } else if (j < 3) {
            ctx.fillStyle = `rgba(0, 255, 220, ${stream.opacity * fade * 1.5})`;
            ctx.shadowBlur = 4;
            ctx.shadowColor = "rgba(0, 229, 255, 0.2)";
          } else {
            const g = Math.floor(180 + 75 * brightness);
            ctx.fillStyle = `rgba(0, ${g}, ${Math.floor(200 * brightness)}, ${stream.opacity * fade})`;
            ctx.shadowBlur = 0;
          }

          ctx.font = `${stream.fontSize}px "JetBrains Mono", monospace`;
          ctx.fillText(stream.chars[j], stream.x, charY);
        }
        ctx.shadowBlur = 0;

        // Reset when off screen
        if (stream.y - stream.length * 16 > h) {
          stream.y = -Math.random() * 200;
          // Randomize characters occasionally
          if (Math.random() > 0.5) {
            for (let j = 0; j < stream.chars.length; j++) {
              stream.chars[j] = stream.isWord
                ? aiWords[Math.floor(Math.random() * aiWords.length)]
                : codeChars[Math.floor(Math.random() * codeChars.length)];
            }
          }
        }
      }
    }

    function drawNeuralNetwork() {
      // Draw connections first
      for (let i = 0; i < neuralNodes.length; i++) {
        for (let j = i + 1; j < neuralNodes.length; j++) {
          const a = neuralNodes[i];
          const b = neuralNodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 180;

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.25;
            // Pulsing connection
            const pulseAlpha = alpha * (0.5 + 0.5 * Math.sin(time * 0.02 + i * 0.5));

            // Color based on depth
            const mix = (a.layer + b.layer) / 2;
            const r = Math.floor(0 + mix * 168);
            const g = Math.floor(229 - mix * 144);
            const bl = Math.floor(255);

            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(${r}, ${g}, ${bl}, ${pulseAlpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();

            // Data pulse traveling along connection
            if (Math.random() < 0.001) {
              const t = (time * 0.01) % 1;
              const px = a.x + (b.x - a.x) * t;
              const py = a.y + (b.y - a.y) * t;
              ctx.beginPath();
              ctx.arc(px, py, 2, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(0, 229, 255, 0.6)`;
              ctx.fill();
            }
          }
        }
      }

      // Draw nodes
      for (const node of neuralNodes) {
        node.pulse += node.pulseSpeed;
        const pulseFactor = 0.6 + 0.4 * Math.sin(node.pulse);

        // Mouse attraction
        const mdx = mouse.x - node.x;
        const mdy = mouse.y - node.y;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mDist < 200) {
          const force = (200 - mDist) / 200 * 0.5;
          node.x += mdx * force * 0.01;
          node.y += mdy * force * 0.01;
        } else {
          // Drift back slowly
          node.x += node.dx;
          node.y += node.dy;
        }

        // Wrap
        if (node.x < -10) node.x = w + 10;
        if (node.x > w + 10) node.x = -10;
        if (node.y < -10) node.y = h + 10;
        if (node.y > h + 10) node.y = -10;

        // Outer glow
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.r * 8);
        const mix = node.layer;
        const r = Math.floor(mix * 168);
        const g = Math.floor(229 - mix * 144);
        gradient.addColorStop(0, `rgba(${r}, ${g}, 255, ${0.25 * pulseFactor})`);
        gradient.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r * 8, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r * pulseFactor, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, 255, ${0.65 + 0.35 * pulseFactor})`;
        ctx.fill();
      }
    }

    function drawOrbitRings() {
      for (const ring of orbitRings) {
        ring.rotation += ring.rotSpeed;
        const [cr, cg, cb] = ring.color;

        ctx.save();
        ctx.translate(ring.cx, ring.cy);
        ctx.rotate(ring.rotation);

        // Draw ellipse path
        ctx.beginPath();
        ctx.ellipse(0, 0, ring.rx, ring.ry, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${cr}, ${cg}, ${cb}, 0.04)`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Draw orbiting particles
        for (let i = 0; i < ring.particles; i++) {
          const angle = (Math.PI * 2 * i) / ring.particles + time * ring.rotSpeed * 3;
          const px = Math.cos(angle) * ring.rx;
          const py = Math.sin(angle) * ring.ry;
          const particleSize = 1.5 + Math.sin(time * 0.03 + i) * 0.8;

          // Particle glow
          const grd = ctx.createRadialGradient(px, py, 0, px, py, particleSize * 5);
          grd.addColorStop(0, `rgba(${cr}, ${cg}, ${cb}, 0.4)`);
          grd.addColorStop(1, "transparent");
          ctx.beginPath();
          ctx.arc(px, py, particleSize * 5, 0, Math.PI * 2);
          ctx.fillStyle = grd;
          ctx.fill();

          // Particle core
          ctx.beginPath();
          ctx.arc(px, py, particleSize, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${cr}, ${cg}, ${cb}, 0.8)`;
          ctx.fill();

          // Trail
          const trailAngle = angle - ring.rotSpeed * 15;
          const tx = Math.cos(trailAngle) * ring.rx;
          const ty = Math.sin(trailAngle) * ring.ry;
          ctx.beginPath();
          ctx.moveTo(px, py);
          ctx.lineTo(tx, ty);
          ctx.strokeStyle = `rgba(${cr}, ${cg}, ${cb}, 0.08)`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }

        ctx.restore();
      }
    }

    function drawDataParticles() {
      for (const p of dataParticles) {
        p.x += p.speedX;
        p.y += p.speedY;
        p.flicker += 0.05;

        const flickerOpacity = p.opacity * (0.5 + 0.5 * Math.sin(p.flicker));

        // Random shape: circle, square, diamond
        ctx.fillStyle = `rgba(0, 229, 255, ${flickerOpacity})`;
        if (p.size > 1.2) {
          // Diamond shape
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(Math.PI / 4);
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
          ctx.restore();
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }

        // Wrap
        if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w; }
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
      }
    }

    function drawCosmicGlow() {
      // Subtle nebula gradients
      const nebulaPositions = [
        { x: w * 0.2, y: h * 0.3, r: 350, color: [0, 229, 255, 0.025] },
        { x: w * 0.8, y: h * 0.6, r: 400, color: [168, 85, 247, 0.02] },
        { x: w * 0.5, y: h * 0.1, r: 300, color: [244, 114, 182, 0.015] },
      ];

      for (const neb of nebulaPositions) {
        const breathe = 1 + 0.15 * Math.sin(time * 0.005 + neb.x * 0.01);
        const grd = ctx.createRadialGradient(neb.x, neb.y, 0, neb.x, neb.y, neb.r * breathe);
        grd.addColorStop(0, `rgba(${neb.color[0]}, ${neb.color[1]}, ${neb.color[2]}, ${neb.color[3]})`);
        grd.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.arc(neb.x, neb.y, neb.r * breathe, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
      }
    }

    // ── Main Draw Loop ──
    function draw() {
      ctx.clearRect(0, 0, w, h);
      time++;

      drawCosmicGlow();
      drawCodeRain();
      drawNeuralNetwork();
      drawOrbitRings();
      drawDataParticles();

      requestAnimationFrame(draw);
    }

    // Mouse tracking
    document.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    resize();
    draw();

    window.addEventListener("resize", resize);
  }

  // ── Scroll Reveal ─────────────────────────────────────────
  function initScrollReveal() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );

    document.querySelectorAll(".section").forEach((el) => observer.observe(el));
  }

  // ── Hamburger Menu Toggle ──────────────────────────────────
  function initHamburger() {
    const btn = document.getElementById("nav-hamburger");
    const links = document.getElementById("nav-links");
    if (!btn || !links) return;

    btn.addEventListener("click", () => {
      btn.classList.toggle("open");
      links.classList.toggle("open");
    });

    // Close when a link is clicked
    links.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        btn.classList.remove("open");
        links.classList.remove("open");
      });
    });

    // Close when clicking outside
    document.addEventListener("click", (e) => {
      if (!btn.contains(e.target) && !links.contains(e.target)) {
        btn.classList.remove("open");
        links.classList.remove("open");
      }
    });
  }

  // ── Bootstrap ──────────────────────────────────────────────
  renderHero();
  renderSkills();
  renderExperience();
  renderProjects();
  renderEducation();
  renderFooter();
  initBackground();
  initTypingEffect();
  initMouseGlow();
  initHamburger();

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      initScrollReveal();
      initStaggerAnimations();
      initCounters();
      initCardGlow();
      initActiveNav();
    });
  });
})();
