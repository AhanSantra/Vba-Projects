function loadProjects(filter = "all") {
  fetch("assets/data/projects.json")
    .then(res => res.json())
    .then(projects => {
      const container = document.getElementById("project-list");
      if (!container) return;

      const filtered = (filter === "top")
        ? projects.filter(p => p.top)
        : projects;

      filtered.forEach(p => {
        const card = document.createElement("div");
        card.className = "project-card";

        if (p.top) {
          const topTag = document.createElement("div");
          topTag.className = "top-label";
          topTag.textContent = "TOP";
          card.appendChild(topTag);
        }

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
      document.getElementById("project-list").innerHTML = "<p>Failed to load projects.</p>";
      console.error("Error loading projects.json", err);
    });
}
