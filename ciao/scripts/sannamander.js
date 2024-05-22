const imageData = [
  { src: "../immagini/sanna-mander/AP_Sanna_Mander_daydreaming_01_2x.jpg" }, 
  { src: "../immagini/sanna-mander/AP_Sanna_Mander_daydreaming_05_2x.jpg" },
  { src: "../immagini/sanna-mander/AP_Sanna_Mander_daydreaming_04_2x.jpg" },
  { src: "../immagini/sanna-mander/AP_Sanna_Mander_daydreaming_09_2x.jpg"},
  { src: "../immagini/sanna-mander/AP_Sanna_Mander_daydreaming_06_2x.jpg" },
  { src: "../immagini/sanna-mander/AP_Sanna_Mander_daydreaming_07_2x.jpg"},
  { src: "../immagini/sanna-mander/AP_Sanna_Mander_daydreaming_10_2x.jpg"},
  { src: "../immagini/sanna-mander/AP_Sanna_Mander_havisamanda_2x.jpg"},
  { src: "../immagini/sanna-mander/AP_Sanna_Mander_havisamanda_2_2x-scaled.jpg"},
  { src: "../immagini/sanna-mander/AP_Sanna_Mander_daydreaming_07_2x.jpg"},
  { src: "../immagini/sanna-mander/AP_Sanna_Mander_thecock-hotshots_2x-scaled.jpg"},
  { src: "../immagini/sanna-mander/AP_Sanna_Mander_Vappu2021_2x.jpg"},
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
