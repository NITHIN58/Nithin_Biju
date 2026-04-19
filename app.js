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

  // ── Interactive Particle Constellation Background ─────────
  function initBackground() {
    const canvas = document.getElementById("bg-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let w, h, particles, mouse = { x: -1000, y: -1000 };

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }

    function createParticles() {
      const count = Math.min(Math.floor((w * h) / 15000), 120);
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 1.8 + 0.4,
          dx: (Math.random() - 0.5) * 0.4,
          dy: (Math.random() - 0.5) * 0.4,
          opacity: Math.random() * 0.5 + 0.1,
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 229, 255, ${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw particles + mouse interaction
      for (const p of particles) {
        // Mouse repulsion
        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mDist < 150) {
          const force = (150 - mDist) / 150;
          p.x += (mdx / mDist) * force * 1.5;
          p.y += (mdy / mDist) * force * 1.5;
        }

        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 229, 255, ${p.opacity})`;
        ctx.fill();
      }

      requestAnimationFrame(draw);
    }

    canvas.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    canvas.style.pointerEvents = "all";
    canvas.style.cursor = "default";

    resize();
    createParticles();
    draw();

    window.addEventListener("resize", () => {
      resize();
      createParticles();
    });
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
