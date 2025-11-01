const imgData = [
  { src: "https://picsum.photos/id/1015/400/300", tag: "Nature" },
  { src: "https://picsum.photos/id/1025/400/300", tag: "Animal" },
  { src: "https://picsum.photos/id/1035/400/300", tag: "Building" },
  { src: "https://picsum.photos/id/1045/400/300", tag: "People" },
  { src: "https://picsum.photos/id/1055/400/300", tag: "Food" },
  { src: "https://picsum.photos/id/1065/400/300", tag: "Art" }
];

const p2 = document.getElementById("p2");
imgData.forEach((item, i) => {
  const col = document.createElement("div");
  col.className = "col-md-4 mb-4";

  const card = document.createElement("div");
  card.className = "card shadow-sm tests card classes";

  const img = document.createElement("img");
  img.src = item.src;
  img.alt = item.tag;
  img.className = "card-img-top";
  img.setAttribute("data-bs-toggle", "modal");
  img.setAttribute("data-bs-target", "#lightboxModal");

  const cardBody = document.createElement("div");
  cardBody.className = "card-body text-center";

  const p = document.createElement("p");
  p.textContent = item.tag;
  p.className = "card-text fw-semibold";

  cardBody.appendChild(p);
  card.appendChild(img);
  card.appendChild(cardBody);
  col.appendChild(card);
  p2.appendChild(col);

  // Lightbox click
  img.addEventListener("click", () => {
    const lightboxImage = document.getElementById("lightboxImage");
    lightboxImage.src = item.src;
  });
});
