const imageData = [
  { src: "../immagini/jean-jullien/Handsome-Frank-Jean Jullien (8).jpg" }, 
  { src: "../immagini/jean-jullien/Handsome-Frank-Jean Jullien (2).jpg" },
  { src: "../immagini/jean-jullien/Handsome-Frank-Jean Jullien (4).jpg" },
  { src: "../immagini/jean-jullien/Handsome-Frank-Jean Jullien (3).jpg"},
  { src: "../immagini/jean-jullien/Handsome-Frank-Jean Jullien (5).jpg" },
  { src: "../immagini/jean-jullien/Handsome-Frank-Jean Jullien (6).jpg"},
];

const galleryContainer = document.querySelector(".gallery-container");

imageData.forEach((image) => {
  const boxElement = document.createElement("div");
  boxElement.className = "box";
  
  const imageElement = document.createElement("img");
  imageElement.src = image.src;
  imageElement.alt = image.title; // Add alt text for accessibility
  
  const titleLinkElement = document.createElement("a");
  titleLinkElement.href = image?.link;
  titleLinkElement.target = "_blank";
  
  const titleElement = document.createElement("div");
  titleElement.className = "overlay";
  titleElement.textContent = image.title;
  
  titleLinkElement.appendChild(titleElement);

  boxElement.appendChild(imageElement);
  boxElement.appendChild(titleLinkElement);
  galleryContainer.appendChild(boxElement);
});
