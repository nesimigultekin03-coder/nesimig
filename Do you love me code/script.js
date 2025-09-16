const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// /change the postion of no button
noBtn.addEventListener("mouseover", () => {
  const newX = Math.floor(Math.random() * questionContainer.offsetWidth);
  const newY = Math.floor(Math.random() * questionContainer.offsetWidth);

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

// yes button functionality

yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  const timeoutId = setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
    gifResult.play();
  }, 3000);
});

// "Evet" butonunun başlangıçtaki stil değerlerini saklamak için değişkenler
let currentPaddingY = 12; // Dikey padding
let currentPaddingX = 25; // Yatay padding
let currentFontSize = 18; // Yazı boyutu
let currentScale = 1.0;   // Büyüklük ölçeği

// "Hayır" butonuna tıklandığında çalışacak fonksiyon
noBtn.addEventListener('click', () => {
  // Her tıklamada stil değerlerini artırıyoruz
  currentPaddingY += 4;
  currentPaddingX += 8;
  currentFontSize += 2;
  currentScale += 0.1;

  // Yeni stil değerlerini "Evet" butonuna uyguluyoruz
  yesBtn.style.padding = `${currentPaddingY}px ${currentPaddingX}px`;
  yesBtn.style.fontSize = `${currentFontSize}px`;
  // Not: Transform, diğer buton efektleriyle çakışmaması için en sona bırakılabilir
  // veya doğrudan scale ile büyütme yapılabilir.
  yesBtn.style.transform = `scale(${currentScale})`;
});

// "Evet" butonuna tıklandığında çalışacak fonksiyon
yesBtn.addEventListener('click', () => {
  // Soru ekranını gizle
  questionContainer.style.display = 'none';

  // Yükleyiciyi göster
  loader.style.display = 'block';

  // 2 saniye sonra sonucu göster
  setTimeout(() => {
    loader.style.display = 'none';
    resultContainer.style.display = 'block';
  }, 2000); // 2000 milisaniye = 2 saniye
});