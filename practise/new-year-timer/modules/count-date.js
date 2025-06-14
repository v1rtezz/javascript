import { expectedDate } from "../script.js"
let daysUntil
let hoursUntil
let minutesUntil
let secondsUntil
export const countDate = () => {
  const currentDate = new Date
  const leftUntil = expectedDate - currentDate
  daysUntil = Math.floor(leftUntil / 1000 / 60 / 60 / 24)
  hoursUntil = Math.floor((leftUntil / 1000 / 60 / 60) % 24)
  minutesUntil = Math.floor((leftUntil / 1000 / 60 % 60))
  secondsUntil = Math.floor((leftUntil / 1000 % 60))
}
export { daysUntil, hoursUntil, minutesUntil, secondsUntil }