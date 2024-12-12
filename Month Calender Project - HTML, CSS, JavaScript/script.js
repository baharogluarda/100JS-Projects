const monthEl = document.querySelector(".date h1");
const fullDateEl = document.querySelector(".date p");
const daysEl = document.querySelector(".days");

const today = new Date();
const currentMonth = today.getMonth();
const currentYear = today.getFullYear();
const currentDate = today.getDate();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

monthEl.textContent = months[currentMonth];
fullDateEl.textContent = today.toDateString();

const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay() - 1;
const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

let daysHTML = "";

for (let i = 0; i < firstDayIndex; i++) {
  daysHTML += `<div class="empty"></div>`;
}

for (let day = 1; day <= lastDayOfMonth; day++) {
  daysHTML +=
    day === currentDate
      ? `<div class="today">${day}</div>`
      : `<div>${day}</div>`;
}

daysEl.innerHTML = daysHTML;
