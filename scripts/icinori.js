const imageData = [
  { src: "../immagini/icinori/AP_Icinori_ARCHEO_1_2x-scaled.jpg" }, 
  { src: "../immagini/icinori/AP_Icinori_MOXIE_3_2x.jpg" },
  { src: "../immagini/icinori/AP_Icinori_Whereby-W_2x.jpg" },
  { src: "../immagini/icinori/AP_Icinori_ET-PUIS_PRINT_3_2x.jpg"},
  { src: "../immagini/icinori/AP_Icinori_ARCHEO_2_2x-scaled.jpg" },
  { src: "../immagini/icinori/AP_Icinori_DEDAR_3_2x.jpg"},
  { src: "../immagini/icinori/AP_Icinori_mullae_2x.jpg"},
  { src: "../immagini/icinori/AP_Icinori_DEDAR_2x.jpg"},
  { src: "../immagini/icinori/AP_Icinori_ET-PUIS_PRINT_2_2x.jpg"},
  { src: "../immagini/icinori/AP_Icinori_MOXIE_2_2x.jpg"},
  { src: "../immagini/icinori/AP_Icinori_whereby_panorama_2x.jpg"},
  { src: "../immagini/icinori/AP_Icinori_DEDAR_5_2x.jpg"},
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
