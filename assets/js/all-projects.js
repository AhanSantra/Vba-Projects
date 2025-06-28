document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("project-list");

  // Simulated dynamic project data
  const projects = [
    {
      title: "Auto Formatter",
      desc: "A macro that auto-formats documents in seconds.",
      img: "projects/project1/thumbnail.png"
    },
    {
      title: "Image Extractor",
      desc: "Extracts and saves images from Word files easily.",
      img: "projects/project2/thumbnail.png"
    },
    {
      title: "Text Replacer",
      desc: "Quickly replaces predefined keywords in documents.",
      img: "projects/project3/thumbnail.png"
    }
    // Add more if needed
  ];

  projects.forEach(p => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
      <img src="${p.img}" alt="${p.title} Thumbnail" />
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
    `;
    container.appendChild(card);
  });
});
window.addEventListener("load", () => {
  const splash = document.getElementById("splash-screen");
  splash.style.opacity = "0";
  setTimeout(() => splash.style.display = "none", 600);
});
