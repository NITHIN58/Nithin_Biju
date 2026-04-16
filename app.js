// ============================================================
//  APP.JS — Renders the resume from data.js
//  You rarely need to edit this file.
// ============================================================

(function () {
  "use strict";

  const d = resumeData;
  const app = document.getElementById("app");

  // ── Helper: create element with innerHTML ──────────────────
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
          `<a class="contact-chip" href="tel:${p}"><span class="chip-icon">📱</span>${p}</a>`
      )
      .join("");

    const section = html(
      "section",
      "hero section",
      `
      <h1 class="hero-name">${d.name}</h1>
      <p class="hero-title">${d.title}</p>
      <div class="hero-contact">
        <a class="contact-chip" href="mailto:${d.email}">
          <span class="chip-icon">✉️</span>${d.email}
        </a>
        ${phones}
        <span class="contact-chip">
          <span class="chip-icon">📍</span>${d.location}
        </span>
      </div>
      <div class="hero-visa">${d.visa}</div>
      <p class="hero-summary">${d.summary}</p>
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
      `<h2 class="section-title">Core Competencies</h2>
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
      `<h2 class="section-title">Professional Experience</h2>
       <div class="timeline">${items}</div>`
    );
    app.appendChild(section);
  }

  // ── 4. Projects Section ────────────────────────────────────
  function renderProjects() {
    const cards = d.projects
      .map(
        (p) => `
      <div class="project-card">
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
      `<h2 class="section-title">Project Experience</h2>
       <div class="projects-grid">${cards}</div>`
    );
    app.appendChild(section);
  }

  // ── 5. Education + Certs + Languages + Interests ───────────
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
      `<h2 class="section-title">Education & More</h2>

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

  // ── Animated Background Particles ──────────────────────────
  function initBackground() {
    const canvas = document.getElementById("bg-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let w, h, particles;

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }

    function createParticles() {
      const count = Math.floor((w * h) / 18000);
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 1.5 + 0.5,
          dx: (Math.random() - 0.5) * 0.3,
          dy: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.4 + 0.1,
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
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

    resize();
    createParticles();
    draw();

    window.addEventListener("resize", () => {
      resize();
      createParticles();
    });
  }

  // ── Scroll Reveal Observer ─────────────────────────────────
  function initScrollReveal() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".section").forEach((el) => observer.observe(el));
  }

  // ── Bootstrap ──────────────────────────────────────────────
  renderHero();
  renderSkills();
  renderExperience();
  renderProjects();
  renderEducation();
  renderFooter();
  initBackground();

  // Small delay so the DOM paints first, then animate in
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      initScrollReveal();
    });
  });
})();
