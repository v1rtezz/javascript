import { renderTimer } from "./modules/render-timer.js"
export const expectedDate = new Date(2026, 0, 1, 0, 0)
renderTimer()
setInterval(renderTimer, 1000)