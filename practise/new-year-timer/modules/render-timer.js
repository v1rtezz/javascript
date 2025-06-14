import { countDate } from "./count-date.js"
import {
  daysUntil,
  hoursUntil,
  minutesUntil,
  secondsUntil,
} from "./count-date.js"
import { declOfNum } from "./decl-of-num.js"

const daysElementVal = document.querySelector('[data-time="days"]')
const hoursElementVal = document.querySelector('[data-time="hours"]')
const minutesElementVal = document.querySelector('[data-time="minutes"]')
const secondsElementVal = document.querySelector('[data-time="seconds"]')
const daysElementText = document.querySelector('[data-text="days"]')
const hoursElementText = document.querySelector('[data-text="hours"]')
const minutesElementText = document.querySelector('[data-text="minutes"]')
const secondsElementText = document.querySelector('[data-text="seconds"]')

export const renderTimer = () => {
  countDate()
  daysElementVal.textContent = daysUntil
  hoursElementVal.textContent = hoursUntil
  minutesElementVal.textContent = minutesUntil
  secondsElementVal.textContent = secondsUntil

  daysElementText.textContent = declOfNum(daysUntil, ['День', 'Дня', 'Дней']);
  hoursElementText.textContent = declOfNum(hoursUntil, ['Час', 'Часа', 'Часов']);
  minutesElementText.textContent = declOfNum(minutesUntil, ['Минута', 'Минуты', 'Минут']);
  secondsElementText.textContent = declOfNum(secondsUntil, ['Секунда', 'Секунды', 'Секунд']);
}
