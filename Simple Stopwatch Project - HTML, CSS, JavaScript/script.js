// DOM elementlerini seçiyoruz
const timerEl = document.getElementById("timer"); // Zaman göstergesi elementi
const startButtonEl = document.getElementById("start"); // "Başlat" butonu elementi
const stopButtonEl = document.getElementById("stop"); // "Durdur" butonu elementi
const resetButtonEl = document.getElementById("reset"); // "Sıfırla" butonu elementi

// Kronometreyi başlatmak ve durdurmak için kullanılan değişkenler
let startTime = 0; // Başlama zamanı
let elapsedTime = 0; // Geçen süre
let timerInterval; // setInterval ile döngüyü kontrol eden değişken

// Kronometreyi başlatma fonksiyonu
function startTimer() {
  // Şimdiki zaman ile durdurma sırasında geçen süreyi hesaplıyoruz
  startTime = Date.now() - elapsedTime;

  // Zamanlayıcıyı başlatmak için bir döngü oluşturuyoruz
  timerInterval = setInterval(() => {
    // Geçen süreyi güncelliyoruz
    elapsedTime = Date.now() - startTime;
    // Geçen süreyi formatlayıp ekrana yazdırıyoruz
    timerEl.textContent = formatTime(elapsedTime);
  }, 10); // Her 10 milisaniyede bir güncelleme

  // "Başlat" butonunu devre dışı bırakıp "Durdur" butonunu aktif hale getiriyoruz
  startButtonEl.disabled = true;
  stopButtonEl.disabled = false;
}

// Zamanı uygun formatta göstermek için fonksiyon
function formatTime(elapsedTime) {
  // Milisaniyeleri hesaplıyoruz (ör. 123 milisaniye -> 12)
  const milliseconds = Math.floor((elapsedTime % 1000) / 10);
  // Saniyeleri hesaplıyoruz (ör. 61 saniye -> 1 saniye)
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  // Dakikaları hesaplıyoruz (ör. 61 dakika -> 1 dakika)
  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  // Saatleri hesaplıyoruz (ör. 7200 saniye -> 2 saat)
  const hours = Math.floor(elapsedTime / (1000 * 60 * 60));

  // Saat, dakika, saniye ve milisaniyeleri uygun formatta birleştiriyoruz
  return (
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") + // Saat
    ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + // Dakika
    ":" +
    (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") + // Saniye
    "." +
    (milliseconds > 9 ? milliseconds : "0" + milliseconds) // Milisaniye
  );
}

// Kronometreyi durdurma fonksiyonu
function stopTimer() {
  // setInterval döngüsünü temizleyerek kronometreyi durduruyoruz
  clearInterval(timerInterval);

  // "Başlat" butonunu aktif, "Durdur" butonunu devre dışı yapıyoruz
  startButtonEl.disabled = false;
  stopButtonEl.disabled = true;
}

// Kronometreyi sıfırlama fonksiyonu
function resetTimer() {
  // Zamanlayıcıyı durduruyoruz
  clearInterval(timerInterval);

  // Geçen süreyi sıfırlıyoruz
  elapsedTime = 0;
  // Zaman göstergesini sıfırlıyoruz
  timerEl.textContent = "00:00:00";

  // "Başlat" butonunu aktif, "Durdur" butonunu devre dışı yapıyoruz
  startButtonEl.disabled = false;
  stopButtonEl.disabled = true;
}

// Butonlara olay dinleyicileri ekliyoruz
startButtonEl.addEventListener("click", startTimer); // "Başlat" butonuna tıklama
stopButtonEl.addEventListener("click", stopTimer); // "Durdur" butonuna tıklama
resetButtonEl.addEventListener("click", resetTimer); // "Sıfırla" butonuna tıklama
