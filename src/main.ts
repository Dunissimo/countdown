import 'normalize.css';
import './style.css';

const DATA = new Date(2024, 2, 28);

const timer = document.querySelector('.timer');
const timerAnimatedParent = timer?.querySelectorAll('.timer__item');
const timerAnimated = timer?.querySelectorAll('.timer__item .top .anim');
const days = timer?.querySelectorAll('.days .count');
const hours = timer?.querySelectorAll('.hours .count');
const minutes = timer?.querySelectorAll('.minutes .count');
const seconds = timer?.querySelectorAll('.seconds .count');

setInterval(() => {
  if (!days || !hours || !minutes || !seconds || !timerAnimated) return;

  const {remainingDays, remainingHours, remainingMinutes, remainingSeconds} = getTime();

  days[0].textContent = remainingDays;
  days[1].textContent = remainingDays;

  hours[0].textContent = remainingHours;
  hours[1].textContent = remainingHours;
  
  minutes[0].textContent = remainingMinutes;
  minutes[1].textContent = remainingMinutes;
  
  seconds[0].textContent = remainingSeconds;
  seconds[1].textContent = remainingSeconds;
}, 1000)

interface ITime {
  remainingDays: string;
  remainingHours: string;
  remainingMinutes: string;
  remainingSeconds: string;
}

const getTime = (): ITime => {
  const difference = Number(DATA) - Number(new Date());
  let days = 0;
  let hours = 0;
  let minutes = 0;
  let seconds = Math.floor(difference / 1000);

  while (seconds > 60) {
    minutes++;
    seconds-=60;
  }

  while (minutes > 60) {
    hours++;
    minutes-=60;
  }

  while (hours > 24) {
    days++;
    hours-=24;
  }

  return {
    remainingDays: days < 10 ? `0${days}` : String(days),
    remainingHours: hours < 10 ? `0${hours}` : String(hours),
    remainingMinutes: minutes < 10 ? `0${minutes}` : String(minutes),
    remainingSeconds: seconds < 10 ? `0${seconds}` : String(seconds)
  }
}