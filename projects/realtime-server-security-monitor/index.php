<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Real-Time Server & Security Monitor | JyotiTech Dashboard</title>
    <meta name="description" content="Custom PHP & REST API real-time server monitoring dashboard engineered by Jyoti Prakash Chakma (Zend Certified PHP Engineer & 13+ Yrs IT Infra Specialist).">
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Plus+Jakarta+Sans:wght@500;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    
    <style>
        :root { --bg:#080C14; --card:#0F172A; --border:rgba(255,255,255,0.08); --primary:#6366F1; --accent:#10B981; --text:#F8FAFC; }
        body { background:var(--bg); color:var(--text); font-family:'Plus Jakarta Sans', sans-serif; margin:0; padding:40px 20px; }
        .container { max-width:1100px; margin:0 auto; }
        .header { display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border); padding-bottom:20px; margin-bottom:40px; }
        .status-badge { display:inline-flex; align-items:center; gap:8px; background:rgba(16,185,129,0.15); border:1px solid var(--accent); color:#34D399; padding:6px 16px; border-radius:99px; font-weight:700; font-size:0.85rem; }
        .pulse-dot { width:8px; height:8px; background:#10B981; border-radius:50%; box-shadow:0 0 10px #10B981; }
        .grid-3 { display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:24px; }
        .card { background:var(--card); border:1px solid var(--border); border-radius:16px; padding:28px; text-align:center; }
        .card-val { font-size:2.8rem; font-weight:800; color:var(--accent); margin:12px 0 4px; }
        .card-lbl { color:#94A3B8; font-size:0.85rem; text-transform:uppercase; font-weight:700; }
        .footer-note { text-align:center; margin-top:60px; color:#94A3B8; font-size:0.9rem; }
        .footer-note a { color:var(--primary); text-decoration:none; font-weight:600; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div>
                <h1 style="margin:0;"><i class="fa-solid fa-server text-primary"></i> Server & Security Monitor</h1>
                <p style="color:#94A3B8; margin:4px 0 0;">Zend PHP 8+ REST API Infrastructure Health Dashboard</p>
            </div>
            <div class="status-badge">
                <span class="pulse-dot"></span> All Systems Operational
            </div>
        </div>

        <div class="grid-3">
            <div class="card">
                <i class="fa-solid fa-microchip" style="font-size:2rem; color:var(--primary);"></i>
                <div class="card-val" id="cpuMetric">14%</div>
                <div class="card-lbl">CPU Load</div>
            </div>

            <div class="card">
                <div class="card-val" style="color:#60A5FA;" id="ramMetric">38%</div>
                <div class="card-lbl">RAM Usage</div>
            </div>

            <div class="card">
                <i class="fa-solid fa-shield-check" style="font-size:2rem; color:#F59E0B;"></i>
                <div class="card-val" style="color:#F59E0B;">0</div>
                <div class="card-lbl">Security Threats</div>
            </div>
        </div>

        <div class="footer-note">
            <p>Engineered by <a href="https://jyotidev26.github.io/Portfolio/" target="_blank">Jyoti Prakash Chakma (Zend Certified PHP Specialist & 13+ Yrs IT Infra Specialist)</a>.</p>
        </div>
    </div>

    <script>
        setInterval(() => {
            fetch('api/metrics.php')
                .then(res => res.json())
                .then(data => {
                    document.getElementById('cpuMetric').innerText = data.cpu_load + '%';
                    document.getElementById('ramMetric').innerText = data.ram_usage + '%';
                })
                .catch(() => {});
        }, 3000);
    </script>
</body>
</html>
