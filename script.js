// script.js
document.addEventListener('DOMContentLoaded', () => {
  // ---------- ANIMAÇÃO DOS NÚMEROS (STATS) ----------
  const statNumbers = document.querySelectorAll('.stat-number');
  const metricCarbon = document.getElementById('carbonMetric');
  const metricArea = document.getElementById('areaMetric');
  const metricWater = document.getElementById('waterMetric');
  const metricReserve = document.getElementById('reserveMetric');

  // valores finais a serem exibidos nos indicadores
  const finalMetrics = {
    carbon: 124,        // Mt CO2e
    area: 22.5,        // milhões ha
    water: 27,         // %
    reserve: 48        // milhões ha
  };

  // valores hero stats
  const heroTargets = [42, 75, 28];

  function animateValue(element, start, end, duration = 1500, isFloat = false) {
    if (!element) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const current = start + (end - start) * progress;
      element.innerText = isFloat ? current.toFixed(1) : Math.floor(current);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        element.innerText = isFloat ? end.toFixed(1) : end;
      }
    };
    requestAnimationFrame(step);
  }

  function animateMetrics() {
    if (metricCarbon) animateValue(metricCarbon, 0, finalMetrics.carbon, 1400, false);
    if (metricArea) animateValue(metricArea, 0, finalMetrics.area, 1400, true);
    if (metricWater) animateValue(metricWater, 0, finalMetrics.water, 1400, false);
    if (metricReserve) animateValue(metricReserve, 0, finalMetrics.reserve, 1400, true);
    
    // Hero stats
    const heroStatElements = document.querySelectorAll('.stat-number');
    if (heroStatElements.length === heroTargets.length) {
      heroStatElements.forEach((el, idx) => {
        animateValue(el, 0, heroTargets[idx], 1300, false);
      });
