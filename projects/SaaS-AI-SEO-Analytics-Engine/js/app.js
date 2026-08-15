/* ==========================================================================
   JyotiTech SaaS AI SEO Analytics Engine - JavaScript Logic & Chart.js Integration
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initCharts();
  bindEvents();
});

function initCharts() {
  // 1. Performance Over Time Chart (Line Chart)
  const perfCtx = document.getElementById('perfChart')?.getContext('2d');
  if (perfCtx) {
    new Chart(perfCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
          label: 'Core Web Vitals Score',
          data: [68, 72, 79, 85, 91, 94, 98],
          borderColor: '#00f2fe',
          backgroundColor: 'rgba(0, 242, 254, 0.1)',
          borderWidth: 3,
          fill: true,
          tension: 0.4,
          pointRadius: 5,
          pointHoverRadius: 8
        }, {
          label: 'Organic Visibility Index',
          data: [45, 52, 60, 65, 78, 88, 95],
          borderColor: '#7f00ff',
          backgroundColor: 'rgba(127, 0, 255, 0.05)',
          borderWidth: 3,
          fill: true,
          tension: 0.4,
          pointRadius: 5
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: { color: '#94a3b8', font: { family: 'Plus Jakarta Sans', size: 12 } }
          }
        },
        scales: {
          x: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#64748b' } },
          y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#64748b' }, min: 0, max: 100 }
        }
      }
    });
  }

  // 2. Keyword Ranking Distribution Chart (Doughnut Chart)
  const kwCtx = document.getElementById('kwChart')?.getContext('2d');
  if (kwCtx) {
    new Chart(kwCtx, {
      type: 'doughnut',
      data: {
        labels: ['Top 3 Position', 'Top 10 Position', 'Top 20 Position', 'Needs Optimization'],
        datasets: [{
          data: [42, 35, 15, 8],
          backgroundColor: ['#00f2fe', '#4facfe', '#7f00ff', '#ff9100'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: { color: '#94a3b8', padding: 15, font: { size: 11 } }
          }
        },
        cutout: '72%'
      }
    });
  }
}

function bindEvents() {
  const auditBtn = document.getElementById('runAuditBtn');
  const urlInput = document.getElementById('urlInput');

  if (auditBtn && urlInput) {
    auditBtn.addEventListener('click', () => {
      const url = urlInput.value.trim();
      if (!url) {
        alert('Please enter a valid website URL to audit!');
        return;
      }
      runLiveAuditSimulation(url);
    });
  }

  // Export PDF Report Button
  const exportBtn = document.getElementById('exportPdfBtn');
  if (exportBtn) {
    exportBtn.addEventListener('click', () => {
      alert('Generating & Exporting High-Resolution PDF Audit Report for JyotiTech Client Audit...');
      window.print();
    });
  }
}

function runLiveAuditSimulation(targetUrl) {
  const btn = document.getElementById('runAuditBtn');
  const originalHtml = btn.innerHTML;
  
  btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Auditing Site...';
  btn.disabled = true;

  setTimeout(() => {
    btn.innerHTML = originalHtml;
    btn.disabled = false;

    // Update KPI Score Animations
    animateCounter('seoScoreVal', 96);
    animateCounter('speedVal', 380);
    animateCounter('backlinkVal', 1420);
    
    alert(`✅ Audit Completed for ${targetUrl}!\n• Overall SEO Score: 96/100 A+\n• Speed Load Time: 380ms\n• Core Web Vitals: 100% Passed`);
  }, 1800);
}

function animateCounter(elementId, targetValue) {
  const el = document.getElementById(elementId);
  if (!el) return;
  
  let current = 0;
  const step = Math.ceil(targetValue / 25);
  const timer = setInterval(() => {
    current += step;
    if (current >= targetValue) {
      current = targetValue;
      clearInterval(timer);
    }
    el.innerText = elementId === 'speedVal' ? current + 'ms' : current.toLocaleString();
  }, 30);
}
