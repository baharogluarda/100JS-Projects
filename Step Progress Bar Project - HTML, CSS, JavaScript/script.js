// Elemanları seç
const steps = document.querySelectorAll(".step");
const progressBar = document.querySelector(".progress-bar-front");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");

let currentStep = 1;

// "Sonraki" butonuna tıklama
nextButton.addEventListener("click", () => {
    currentStep++;
    if (currentStep > steps.length) {
        currentStep = steps.length;
    }
    updateProgressBar();
});

// "Önceki" butonuna tıklama
prevButton.addEventListener("click", () => {
    currentStep--;
    if (currentStep < 1) {
        currentStep = 1;
    }
    updateProgressBar();
});

// Progress bar'ı güncelle
function updateProgressBar() {
    steps.forEach((step, index) => {
        if (index < currentStep) {
            step.classList.add("checked");
        } else {
            step.classList.remove("checked");
        }
    });

    // Progress bar genişliği güncelle
    const progressWidth = ((currentStep - 1) / (steps.length - 1)) * 100;
    progressBar.style.width = `${progressWidth}%`;

    // Butonları aktif/pasif yap
    prevButton.disabled = currentStep === 1;
    nextButton.disabled = currentStep === steps.length;
}
