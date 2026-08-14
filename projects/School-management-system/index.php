<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>School Management System | EduHub Pro by JyotiTech</title>
    <meta name="description" content="Complete OOP PHP 8+ School Management System engineered by Jyoti Prakash Chakma (Zend Certified PHP Specialist). Features attendance, gradebook, and student fee management.">
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    
    <style>
        :root { --bg:#0B0F19; --card:#111827; --border:rgba(255,255,255,0.08); --primary:#3B82F6; --accent:#10B981; --gold:#F59E0B; --text:#F9FAFB; }
        body { background:var(--bg); color:var(--text); font-family:'Plus Jakarta Sans', sans-serif; margin:0; padding:40px 20px; }
        .container { max-width:1100px; margin:0 auto; }
        .header { display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border); padding-bottom:24px; margin-bottom:40px; }
        .brand { font-size:1.5rem; font-weight:800; color:var(--primary); display:flex; align-items:center; gap:10px; }
        .grid-4 { display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:20px; margin-bottom:40px; }
        .stat-card { background:var(--card); border:1px solid var(--border); border-radius:16px; padding:24px; text-align:center; }
        .stat-val { font-size:2.4rem; font-weight:800; color:var(--primary); margin:8px 0 4px; }
        .stat-lbl { color:#9CA3AF; font-size:0.8rem; font-weight:700; text-transform:uppercase; }
        
        .table-card { background:var(--card); border:1px solid var(--border); border-radius:16px; padding:28px; }
        table { width:100%; border-collapse:collapse; text-align:left; margin-top:16px; }
        th { padding:14px 16px; border-bottom:1px solid var(--border); color:#9CA3AF; font-size:0.85rem; text-transform:uppercase; }
        td { padding:16px; border-bottom:1px solid rgba(255,255,255,0.04); font-size:0.95rem; }
        .status-badge { display:inline-block; padding:4px 12px; border-radius:99px; font-size:0.75rem; font-weight:700; background:rgba(16,185,129,0.15); color:#34D399; border:1px solid #10B981; }
        
        .footer-note { text-align:center; margin-top:60px; color:#9CA3AF; font-size:0.9rem; }
        .footer-note a { color:var(--primary); text-decoration:none; font-weight:600; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="brand">
                <i class="fa-solid fa-graduation-cap"></i> EduHub Pro Portal
            </div>
            <div style="color:#9CA3AF; font-size:0.9rem;">
                <i class="fa-solid fa-building-columns"></i> Session 2026-2027
            </div>
        </div>

        <div class="grid-4">
            <div class="stat-card">
                <i class="fa-solid fa-user-graduate" style="font-size:1.8rem; color:var(--primary);"></i>
                <div class="stat-val">1,480</div>
                <div class="stat-lbl">Enrolled Students</div>
            </div>

            <div class="stat-card">
                <i class="fa-solid fa-chalkboard-user" style="font-size:1.8rem; color:var(--accent);"></i>
                <div class="stat-val" style="color:var(--accent);">85</div>
                <div class="stat-lbl">Teaching Staff</div>
            </div>

            <div class="stat-card">
                <i class="fa-solid fa-clipboard-check" style="font-size:1.8rem; color:var(--gold);"></i>
                <div class="stat-val" style="color:var(--gold);">94.8%</div>
                <div class="stat-lbl">Today's Attendance</div>
            </div>

            <div class="stat-card">
                <i class="fa-solid fa-file-invoice-dollar" style="font-size:1.8rem; color:#A855F7;"></i>
                <div class="stat-val" style="color:#A855F7;">98.2%</div>
                <div class="stat-lbl">Fee Collection</div>
            </div>
        </div>

        <div class="table-card">
            <h3 style="margin:0 0 16px;"><i class="fa-solid fa-users text-primary"></i> Recent Student Records</h3>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Student Name</th>
                        <th>Class / Grade</th>
                        <th>GPA</th>
                        <th>Attendance</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody id="studentRows">
                    <tr>
                        <td>#STD-1001</td>
                        <td><strong>Arjun Chakma</strong></td>
                        <td>Grade 10 (Science)</td>
                        <td><strong>5.00</strong></td>
                        <td>98%</td>
                        <td><span class="status-badge">Active</span></td>
                    </tr>
                    <tr>
                        <td>#STD-1002</td>
                        <td><strong>Taniya Roy</strong></td>
                        <td>Grade 10 (Science)</td>
                        <td><strong>4.92</strong></td>
                        <td>96%</td>
                        <td><span class="status-badge">Active</span></td>
                    </tr>
                    <tr>
                        <td>#STD-1003</td>
                        <td><strong>Kamal Hossain</strong></td>
                        <td>Grade 9 (Commerce)</td>
                        <td><strong>4.85</strong></td>
                        <td>94%</td>
                        <td><span class="status-badge">Active</span></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="footer-note">
            <p>Engineered by <a href="https://jyotidev26.github.io/Portfolio/" target="_blank">Jyoti Prakash Chakma (Zend Certified PHP Specialist)</a> | Built in OOP PHP 8+ & PDO MySQL.</p>
        </div>
    </div>
</body>
</html>
