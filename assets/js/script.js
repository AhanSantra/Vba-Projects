fetch('assets/data/projects.json')
  .then(res => res.json())
  .then(projects => {
    const container = document.getElementById("project-list");
    projects.forEach(p => {
      const card = document.createElement("div");
      card.className = "project-card";

      if (p.top) {
        const topTag = document.createElement("div");
        topTag.className = "top-label";
        topTag.textContent = "TOP";
        card.appendChild(topTag);
      }

      card.innerHTML += `
        <img src="${p.img}" alt="${p.title}">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
      `;
      container.appendChild(card);
    });
  })
  .catch(err => {
    document.getElementById("project-list").innerHTML = "<p>Failed to load projects.</p>";
    console.error("Failed to load projects.json", err);
  });
window.addEventListener("load", () => {
  const splash = document.getElementById("splash-screen");
  splash.style.opacity = "0";
  splash.style.display = "none";
});
