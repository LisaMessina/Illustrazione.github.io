const imageData = [
  { src: "/immagini/jean-jullien/Handsome-Frank-Jean Jullien (1).jpg", title: "Jean Jullien", link: "../jeanjulien.html" }, 
  { src: "/immagini/sanna-mander/AP_Sanna_Mander_Freundin_ReachOut_2x-scaled.jpg", title: "Sanna Mander", link: "../sennamander.html"  },
  { src: "/immagini/icinori/sas.jpg", title: "Icinori", link: "../icinori.html"  },
  { src: "/immagini/emily-robertson/Handsome-Frank-Emily Robertson (3).jpg", title: "Emily Robertson" },
  { src: "/immagini/martina-paukova/AP_Martina_Paukova_MUBI-scaled.jpg", title: "Martina Paukova" },
  { src: "/immagini/michelle-thompson/Handsome-Frank-Michelle Thompson (7).jpg", title: "Michelle Thompson" },
  { src: "/immagini/adrian-johnson/AP_Adrian_Johnson_QUACK_2x-scaled.jpg", title: "Adrian johnson" },
  { src: "/immagini/Paul-Blow/Handsome-Frank-Paul_Blow_5.jpg", title: "Paul Blow" },
  { src: "/immagini/hattie-clark/Handsome-Frank-Hattie Clark.jpg", title: "Hattie-Clark" },
  
];



const galleryContainer = document.querySelector(".gallery-container");

imageData.forEach((image) => {
  const boxElement = document.createElement("div");
  boxElement.className = "box";
  
  const imageElement = document.createElement("img");
  imageElement.src = image.src;
  imageElement.alt = image.title; // Add alt text for accessibility
  
  const titleLinkElement = document.createElement("a");
  titleLinkElement.href = image?.link ?? "#";
  if(image?.link) titleLinkElement.target ="_blank";
  
  
  const titleElement = document.createElement("div");
  titleElement.className = "overlay";
  titleElement.textContent = image.title;
  
  titleLinkElement.appendChild(titleElement);

  boxElement.appendChild(imageElement);
  boxElement.appendChild(titleLinkElement);
  galleryContainer.appendChild(boxElement);
});
