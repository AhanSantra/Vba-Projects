window.addEventListener("load", () => {
  const splash = document.getElementById("splash-screen");
  if (splash) {
    splash.style.opacity = "0";
    setTimeout(() => splash.style.display = "none", 500);
  }

  // Load projects after splash starts fading
  fetch('assets/data/projects.json')
    .then(res => {
      if (!res.ok) throw new Error("HTTP error " + res.status);
      return res.json();
    })
    .then(projects => {
      const container = document.getElementById("project-list");
      if (!container) return;

      projects.forEach(p => {
        const card = document.createElement("div");
        card.className = "project-card";

        // Add 'TOP' ribbon if flagged
        if (p.top) {
          const topTag = document.createElement("div");
          topTag.className = "top-label";
          topTag.textContent = "TOP";
          card.appendChild(topTag);
        }

        // Add image and description
        const content = document.createElement("div");
        content.innerHTML = `
          <img src="${p.img}" alt="${p.title}">
          <h3>${p.title}</h3>
          <p>${p.desc}</p>
        `;
        card.appendChild(content);
        container.appendChild(card);
      });
    })
    .catch(err => {
      const container = document.getElementById("project-list");
      if (container) container.innerHTML = "<p>Failed to load projects.</p>";
      console.error("Failed to load projects.json", err);
    });
});
