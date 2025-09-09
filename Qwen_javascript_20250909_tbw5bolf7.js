// script.js
class FKTPApp {
    constructor() {
        this.state = {
            isLoggedIn: false,
            userType: '',
            username: '',
            currentView: 'login',
            selectedClinic: null,
            editingClinic: null,
            loginError: ''
        };
        
        // Initialize mock data
        this.initData();
        
        // Check for saved login
        this.checkSavedLogin();
        
        // Render initial view
        this.render();
    }
    
    initData() {
        // Mock data klinik
        this.clinics = [
            { id: 1, name: 'FKTP Denkesyah 02.04.03 - Bandar Lampung', address: 'Jl. Teuku Umar No. 123, Bandar Lampung', phone: '0721-1234567', email: 'bandarlampung@fktpdenkesyah.com', image: 'images/clinic1.jpg' },
            { id: 2, name: 'FKTP Denkesyah 02.04.03 - Metro', address: 'Jl. Jenderal Sudirman No. 45, Metro', phone: '0725-2345678', email: 'metro@fktpdenkesyah.com', image: 'images/clinic2.jpg' },
            { id: 3, name: 'FKTP Denkesyah 02.04.03 - Pringsewu', address: 'Jl. Raya Pringsewu No. 78, Pringsewu', phone: '0729-3456789', email: 'pringsewu@fktpdenkesyah.com', image: 'images/clinic3.jpg' },
            { id: 4, name: 'FKTP Denkesyah 02.04.03 - Pesawaran', address: 'Jl. Raya Pesawaran No. 23, Pesawaran', phone: '0721-4567890', email: 'pesawaran@fktpdenkesyah.com', image: 'images/clinic4.jpg' },
            { id: 5, name: 'FKTP Denkesyah 02.04.03 - Tanggamus', address: 'Jl. Raya Tanggamus No. 56, Tanggamus', phone: '0722-5678901', email: 'tanggamus@fktpdenkesyah.com', image: 'images/clinic5.jpg' },
            { id: 6, name: 'FKTP Denkesyah 02.04.03 - Lampung Selatan', address: 'Jl. Raya Kalianda No. 89, Lampung Selatan', phone: '0727-6789012', email: 'lampungselatan@fktpdenkesyah.com', image: 'images/clinic6.jpg' },
            { id: 7, name: 'FKTP Denkesyah 02.04.03 - Lampung Tengah', address: 'Jl. Raya Terbanggi Besar No. 34, Lampung Tengah', phone: '0721-7890123', email: 'lampungtengah@fktpdenkesyah.com', image: 'images/clinic7.jpg' },
            { id: 8, name: 'FKTP Denkesyah 02.04.03 - Lampung Utara', address: 'Jl. Raya Kotabumi No. 67, Lampung Utara', phone: '0724-8901234', email: 'lampungutara@fktpdenkesyah.com', image: 'images/clinic8.jpg' },
            { id: 9, name: 'FKTP Denkesyah 02.04.03 - Way Kanan', address: 'Jl. Raya Blambangan Umpu No. 12, Way Kanan', phone: '0728-9012345', email: 'waykanan@fktpdenkesyah.com', image: 'images/clinic9.jpg' },
            { id: 10, name: 'FKTP Denkesyah 02.04.03 - Lampung Timur', address: 'Jl. Raya Sukadana No. 45, Lampung Timur', phone: '0725-0123456', email: 'lampungtimur@fktpdenkesyah.com', image: 'images/clinic10.jpg' }
        ];
        
        // Mock data laporan pendapatan
        this.incomeReports = {
            1: [
                { month: 'Januari 2024', amount: 150000000 },
                { month: 'Februari 2024', amount: 155000000 },
                { month: 'Maret 2024', amount: 160000000 },
                { month: 'April 2024', amount: 158000000 },
                { month: 'Mei 2024', amount: 162000000 },
                { month: 'Juni 2024', amount: 165000000 }
            ],
            2: [
                { month: 'Januari 2024', amount: 145000000 },
                { month: 'Februari 2024', amount: 148000000 },
                { month: 'Maret 2024', amount: 152000000 },
                { month: 'April 2024', amount: 150000000 },
                { month: 'Mei 2024', amount: 155000000 },
                { month: 'Juni 2024', amount: 158000000 }
            ]
        };
        
        // Mock data realisasi pendapatan
        this.realizationData = {
            honor: {
                medis: 30000000,
                paramedis: 15000000,
                pengelola: 10000000
            },
            operational: {
                atk: 25000000,
                obat: 55000000
            },
            modal: [
                { id: 1, nama: 'Stetoskop', satuan: 'Unit', harga: 500000, jumlah: 5, total: 2500000, gambar: 'images/item1.jpg' },
                { id: 2, nama: 'Termometer Digital', satuan: 'Unit', harga: 300000, jumlah: 10, total: 3000000, gambar: 'images/item2.jpg' },
                { id: 3, nama: 'Tensimeter', satuan: 'Unit', harga: 800000, jumlah: 3, total: 2400000, gambar: 'images/item3.jpg' }
            ]
        };
        
        // Mock data sisa anggaran per klinik
        this.budgetRemaining = {
            1: {
                totalBudget: 165000000,
                totalSpent: 120000000,
                remaining: 45000000,
                byCategory: {
                    honor: { allocated: 49500000, spent: 45000000, remaining: 4500000 },
                    operational: { allocated: 82500000, spent: 80000000, remaining: 2500000 },
                    modal: { allocated: 33000000, spent: 25000000, remaining: 8000000 }
                },
                monthlyRemaining: [
                    { month: 'Januari', budget: 150000000, spent: 120000000, remaining: 30000000 },
                    { month: 'Februari', budget: 155000000, spent: 130000000, remaining: 25000000 },
                    { month: 'Maret', budget: 160000000, spent: 135000000, remaining: 25000000 },
                    { month: 'April', budget: 158000000, spent: 132000000, remaining: 26000000 },
                    { month: 'Mei', budget: 162000000, spent: 138000000, remaining: 24000000 },
                    { month: 'Juni', budget: 165000000, spent: 140000000, remaining: 25000000 }
                ]
            },
            2: {
                totalBudget: 158000000,
                totalSpent: 115000000,
                remaining: 43000000,
                byCategory: {
                    honor: { allocated: 47400000, spent: 42000000, remaining: 5400000 },
                    operational: { allocated: 79000000, spent: 75000000, remaining: 4000000 },
                    modal: { allocated: 31600000, spent: 28000000, remaining: 3600000 }
                },
                monthlyRemaining: [
                    { month: 'Januari', budget: 145000000, spent: 115000000, remaining: 30000000 },
                    { month: 'Februari', budget: 148000000, spent: 120000000, remaining: 28000000 },
                    { month: 'Maret', budget: 152000000, spent: 125000000, remaining: 27000000 },
                    { month: 'April', budget: 150000000, spent: 122000000, remaining: 28000000 },
                    { month: 'Mei', budget: 155000000, spent: 128000000, remaining: 27000000 },
                    { month: 'Juni', budget: 158000000, spent: 130000000, remaining: 28000000 }
                ]
            }
        };
        
        // Mock data rekap total
        this.totalRecap = {
            totalIncome: 1500000000,
            totalRealization: 1200000000,
            remaining: 300000000
        };
    }
    
    checkSavedLogin() {
        try {
            const savedUser = localStorage.getItem('fktpUser');
            if (savedUser) {
                const userData = JSON.parse(savedUser);
                if (userData.isLoggedIn) {
                    this.state.username = userData.username;
                    this.state.userType = userData.type;
                    this.state.isLoggedIn = true;
                    this.state.currentView = 'dashboard';
                }
            }
        } catch (e) {
            console.log('Gagal memuat data login dari localStorage');
        }
    }
    
    saveLogin(username, type) {
        try {
            localStorage.setItem('fktpUser', JSON.stringify({
                username: username,
                type: type,
                isLoggedIn: true
            }));
        } catch (e) {
            console.log('LocalStorage tidak didukung di browser ini');
        }
    }
    
    logout() {
        this.state.isLoggedIn = false;
        this.state.userType = '';
        this.state.username = '';
        this.state.currentView = 'login';
        this.state.selectedClinic = null;
        this.state.editingClinic = null;
        this.state.loginError = '';
        
        try {
            localStorage.removeItem('fktpUser');
        } catch (e) {
            console.log('LocalStorage tidak didukung di browser ini');
        }
        
        this.render();
    }
    
    login(username, password) {
        this.state.loginError = '';
        
        // Daftar akun yang bisa login
        const validAccounts = [
            { username: 'admin', password: 'admin123', type: 'admin' },
            { username: 'klinik', password: 'klinik123', type: 'klinik' },
            { username: 'user', password: 'user123', type: 'klinik' }
        ];
        
        // Cari akun yang cocok
        const account = validAccounts.find(acc => 
            acc.username === username && acc.password === password
        );
        
        if (account) {
            // Login berhasil
            this.state.userType = account.type;
            this.state.username = username;
            this.state.isLoggedIn = true;
            this.state.currentView = 'dashboard';
            
            // Simpan ke localStorage
            this.saveLogin(username, account.type);
            
            this.render();
        } else {
            // Login gagal
            this.state.loginError = 'Username atau password salah. Coba: admin/admin123, klinik/klinik123, atau user/user123';
            this.render();
        }
    }
    
    navigateTo(view, clinic = null) {
        this.state.currentView = view;
        if (clinic) {
            this.state.selectedClinic = clinic;
        }
        this.render();
    }
    
    editClinic(clinic) {
        this.state.editingClinic = { ...clinic };
        this.render();
    }
    
    saveClinic() {
        if (this.state.editingClinic) {
            const index = this.clinics.findIndex(c => c.id === this.state.editingClinic.id);
            if (index !== -1) {
                this.clinics[index] = { ...this.state.editingClinic };
            }
            this.state.editingClinic = null;
            this.render();
        }
    }
    
    updateEditingClinic(field, value) {
        if (this.state.editingClinic) {
            this.state.editingClinic[field] = value;
            this.render();
        }
    }
    
    addModalItem() {
        const newItem = {
            id: Date.now(),
            nama: '',
            satuan: '',
            harga: 0,
            jumlah: 0,
            total: 0,
            gambar: 'images/default-item.jpg'
        };
        this.realizationData.modal.push(newItem);
        this.render();
    }
    
    editModalItem(id, field, value) {
        const itemIndex = this.realizationData.modal.findIndex(item => item.id === id);
        if (itemIndex !== -1) {
            this.realizationData.modal[itemIndex][field] = value;
            if (field === 'harga' || field === 'jumlah') {
                const harga = field === 'harga' ? parseInt(value) || 0 : this.realizationData.modal[itemIndex].harga;
                const jumlah = field === 'jumlah' ? parseInt(value) || 0 : this.realizationData.modal[itemIndex].jumlah;
                this.realizationData.modal[itemIndex].total = harga * jumlah;
            }
            this.render();
        }
    }
    
    exportData(format) {
        alert(`Laporan berhasil di-export ke format ${format}`);
    }
    
    formatCurrency(amount) {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(amount);
    }
    
    render() {
        const appElement = document.getElementById('app');
        
        if (!this.state.isLoggedIn) {
            appElement.innerHTML = this.renderLogin();
        } else {
            switch (this.state.currentView) {
                case 'dashboard':
                    appElement.innerHTML = this.renderDashboard();
                    break;
                case 'clinic-detail':
                    appElement.innerHTML = this.renderClinicDetail();
                    break;
                case 'edit-clinic':
                    appElement.innerHTML = this.renderEditClinic();
                    break;
                case 'laporan-pendapatan':
                    appElement.innerHTML = this.renderLaporanPendapatan();
                    break;
                case 'realisasi-pendapatan':
                    appElement.innerHTML = this.renderRealisasiPendapatan();
                    break;
                case 'sisa-anggaran':
                    appElement.innerHTML = this.renderSisaAnggaran();
                    break;
                case 'rekap-total':
                    appElement.innerHTML = this.renderRekapTotal();
                    break;
                default:
                    appElement.innerHTML = this.renderDashboard();
            }
        }
    }
    
    renderLogin() {
        return `
            <div class="login-container">
                <div class="login-card">
                    <div class="login-header">
                        <h1 class="login-title">FKTP DENKESYAH 02.04.03</h1>
                        <p class="login-subtitle">www.FKTPDenkesyahLampung.com</p>
                    </div>
                    
                    <div class="help-section">
                        <h3 class="help-title">Petunjuk Login:</h3>
                        <ul class="help-list">
                            <li>Username: admin, Password: admin123</li>
                            <li>Username: klinik, Password: klinik123</li>
                            <li>Username: user, Password: user123</li>
                        </ul>
                    </div>
                    
                    ${this.state.loginError ? `
                    <div class="error-message">
                        ${this.state.loginError}
                    </div>
                    ` : ''}
                    
                    <form id="login-form">
                        <div class="form-group">
                            <label class="form-label">Username</label>
                            <input type="text" id="username" class="form-input" placeholder="Masukkan username" required>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">Password</label>
                            <input type="password" id="password" class="form-input" placeholder="Masukkan password" required>
                        </div>
                        
                        <button type="submit" class="submit-btn">Login</button>
                    </form>
                    
                    <a href="#" class="help-link" id="toggle-help">Butuh Bantuan?</a>
                </div>
            </div>
            
            <script>
                document.getElementById('login-form').addEventListener('submit', function(e) {
                    e.preventDefault();
                    const username = document.getElementById('username').value;
                    const password = document.getElementById('password').value;
                    app.login(username, password);
                });
                
                document.getElementById('toggle-help').addEventListener('click', function(e) {
                    e.preventDefault();
                    alert('Jika Anda tidak bisa login, pastikan:\
\\n1. Username dan password sesuai dengan petunjuk\
\\n2. Tidak ada spasi sebelum atau sesudah username/password\
\\n3. Caps Lock tidak aktif (password case-sensitive)\
\\n\
\\nJika masih tidak bisa login, coba refresh halaman atau gunakan browser yang berbeda.');
                });
            </script>
        `;
    }
    
    renderDashboard() {
        let clinicsHTML = '';
        this.clinics.forEach(clinic => {
            clinicsHTML += `
                <div class="clinic-card">
                    <img src="${clinic.image}" alt="${clinic.name}" class="clinic-image">
                    <div class="clinic-info">
                        <h3 class="clinic-name">${clinic.name}</h3>
                        <p class="clinic-detail">Alamat: ${clinic.address}</p>
                        <p class="clinic-detail">Telepon: ${clinic.phone}</p>
                        <p class="clinic-detail">Email: ${clinic.email}</p>
                        <div class="btn-group">
                            <button class="btn btn-primary" onclick="app.navigateTo('clinic-detail', ${JSON.stringify(clinic).replace(/"/g, '&quot;')})">Lihat Detail</button>
                            ${this.state.userType === 'admin' ? `
                            <button class="btn btn-success" onclick="app.editClinic(${JSON.stringify(clinic).replace(/"/g, '&quot;')})">Edit</button>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
        });
        
        return `
            <header class="header">
                <div class="header-container">
                    <div style="display: flex; align-items: center;">
                        <h1 class="header-title">Dashboard FKTP DENKESYAH 02.04.03</h1>
                    </div>
                    <div class="header-info">
                        <span class="user-info">Halo, ${this.state.username} (${this.state.userType})</span>
                        <button class="logout-btn" onclick="app.logout()">Logout</button>
                    </div>
                </div>
            </header>
            
            <main class="main-container">
                <h2 class="section-title">Daftar Unit FKTP DENKESYAH 02.04.03</h2>
                <div class="clinic-grid">
                    ${clinicsHTML}
                </div>
                
                <div class="navigation-menu">
                    <h3 class="nav-title">Menu Navigasi</h3>
                    <div class="nav-grid">
                        <button class="nav-btn nav-btn-primary" onclick="app.navigateTo('rekap-total')">Rekap Total Semua Unit</button>
                        <button class="nav-btn nav-btn-success" onclick="app.exportData('Excel')">Export Laporan (Excel)</button>
                        <button class="nav-btn nav-btn-purple" onclick="app.exportData('PowerPoint')">Export Laporan (PowerPoint)</button>
                    </div>
                </div>
            </main>
            
            <footer class="footer">
                <p class="footer-text">© 2024 FKTP DENKESYAH 02.04.03 - www.FKTPDenkesyahLampung.com</p>
            </footer>
        `;
    }
    
    renderClinicDetail() {
        if (!this.state.selectedClinic) {
            return `<div class="loading"><div class="spinner"></div></div>`;
        }
        
        return `
            <header class="header">
                <div class="header-container">
                    <div style="display: flex; align-items: center;">
                        <a href="#" class="back-btn" onclick="app.navigateTo('dashboard')">← Kembali ke Dashboard</a>
                        <h1 class="header-title">Detail Unit: ${this.state.selectedClinic.name}</h1>
                    </div>
                    <div class="header-info">
                        <span class="user-info">Halo, ${this.state.username} (${this.state.userType})</span>
                        <button class="logout-btn" onclick="app.logout()">Logout</button>
                    </div>
                </div>
            </header>
            
            <main class="main-container">
                <div class="navigation-menu">
                    <h3 class="nav-title">Menu Unit FKTP</h3>
                    <div class="nav-grid">
                        <button class="nav-btn nav-btn-primary" onclick="app.navigateTo('laporan-pendapatan')">Laporan Pendapatan Kapitasi BPJS</button>
                        <button class="nav-btn nav-btn-success" onclick="app.navigateTo('realisasi-pendapatan')">Realisasi Pendapatan</button>
                        <button class="nav-btn" style="background-color: #ea580c; color: white;" onmouseover="this.style.backgroundColor='#c2410c'" onmouseout="this.style.backgroundColor='#ea580c'" onclick="app.navigateTo('sisa-anggaran')">Sisa Anggaran</button>
                    </div>
                </div>
                
                <div class="stat-card">
                    <h3 class="section-title">Informasi Unit FKTP</h3>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
                        <div>
                            <img src="${this.state.selectedClinic.image}" alt="${this.state.selectedClinic.name}" style="width: 100%; height: 256px; object-fit: cover; border-radius: 8px; margin-bottom: 16px;">
                            <div style="display: flex; flex-direction: column; gap: 8px;">
                                <p><strong>Nama Unit:</strong> ${this.state.selectedClinic.name}</p>
                                <p><strong>Alamat:</strong> ${this.state.selectedClinic.address}</p>
                                <p><strong>Telepon:</strong> ${this.state.selectedClinic.phone}</p>
                                <p><strong>Email:</strong> ${this.state.selectedClinic.email}</p>
                            </div>
                        </div>
                        ${this.state.userType === 'admin' ? `
                        <div>
                            <h4 style="font-weight: 600; margin-bottom: 16px;">Edit Informasi</h4>
                            <button class="btn btn-warning" onclick="app.editClinic(${JSON.stringify(this.state.selectedClinic).replace(/"/g, '&quot;')})">Edit Profil Unit</button>
                        </div>
                        ` : ''}
                    </div>
                </div>
            </main>
            
            <footer class="footer">
                <p class="footer-text">© 2024 FKTP DENKESYAH 02.04.03 - www.FKTPDenkesyahLampung.com</p>
            </footer>
        `;
    }
    
    renderEditClinic() {
        if (!this.state.editingClinic) {
            return `<div class="loading"><div class="spinner"></div></div>`;
        }
        
        return `
            <header class="header">
                <div class="header-container">
                    <div style="display: flex; align-items: center;">
                        <button class="back-btn" onclick="app.state.editingClinic = null; app.render()">← Kembali</button>
                        <h1 class="header-title">Edit Profil Unit FKTP</h1>
                    </div>
                    <div class="header-info">
                        <span class="user-info">Halo, ${this.state.username} (${this.state.userType})</span>
                        <button class="logout-btn" onclick="app.logout()">Logout</button>
                    </div>
                </div>
            </header>
            
            <main class="main-container">
                <div class="form-container">
                    <form id="edit-clinic-form">
                        <div class="form-row">
                            <div class="form-group">
                                <label class="form-label">Nama Unit FKTP</label>
                                <input type="text" id="edit-name" class="form-input" value="${this.state.editingClinic.name}" required>
                            </div>
                            <div class="form-group">
                                <label class="form-label">Alamat</label>
                                <input type="text" id="edit-address" class="form-input" value="${this.state.editingClinic.address}" required>
                            </div>
                            <div class="form-group">
                                <label class="form-label">Telepon</label>
                                <input type="text" id="edit-phone" class="form-input" value="${this.state.editingClinic.phone}" required>
                            </div>
                            <div class="form-group">
                                <label class="form-label">Email</label>
                                <input type="email" id="edit-email" class="form-input" value="${this.state.editingClinic.email}" required>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">Upload Gambar</label>
                            <input type="file" id="edit-image" accept="image/*" class="form-input">
                            ${this.state.editingClinic.image ? `
                            <div style="margin-top: 16px;">
                                <img src="${this.state.editingClinic.image}" alt="Preview" style="width: 256px; height: 192px; object-fit: cover; border-radius: 8px;">
                            </div>
                            ` : ''}
                        </div>
                        
                        <div class="form-actions">
                            <button type="submit" class="btn btn-success">Simpan Perubahan</button>
                            <button type="button" class="btn btn-danger" onclick="app.state.editingClinic = null; app.render()">Batal</button>
                        </div>
                    </form>
                </div>
            </main>
            
            <footer class="footer">
                <p class="footer-text">© 2024 FKTP DENKESYAH 02.04.03 - www.FKTPDenkesyahLampung.com</p>
            </footer>
            
            <script>
                document.getElementById('edit-clinic-form').addEventListener('submit', function(e) {
                    e.preventDefault();
                    app.state.editingClinic.name = document.getElementById('edit-name').value;
                    app.state.editingClinic.address = document.getElementById('edit-address').value;
                    app.state.editingClinic.phone = document.getElementById('edit-phone').value;
                    app.state.editingClinic.email = document.getElementById('edit-email').value;
                    app.saveClinic();
                });
                
                document.getElementById('edit-image').addEventListener('change', function(e) {
                    const file = e.target.files[0];
                    if (file) {
                        const reader = new FileReader();
                        reader.onload = function(event) {
                            app.state.editingClinic.image = event.target.result;
                            app.render();
                        };
                        reader.readAsDataURL(file);
                    }
                });
            </script>
        `;
    }
    
    renderLaporanPendapatan() {
        if (!this.state.selectedClinic) {
            return `<div class="loading"><div class="spinner"></div></div>`;
        }
        
        const clinicId = this.state.selectedClinic.id;
        const reports = this.incomeReports[clinicId] || [];
        let reportsHTML = '';
        
        reports.forEach(report => {
            reportsHTML += `
                <tr>
                    <td>${report.month}</td>
                    <td>${this.formatCurrency(report.amount)}</td>
                </tr>
            `;
        });
        
        return `
            <header class="header">
                <div class="header-container">
                    <div style="display: flex; align-items: center;">
                        <a href="#" class="back-btn" onclick="app.navigateTo('clinic-detail')">← Kembali ke Detail Unit</a>
                        <h1 class="header-title">Laporan Pendapatan Kapitasi BPJS</h1>
                    </div>
                    <div class="header-info">
                        <span class="user-info">Halo, ${this.state.username} (${this.state.userType})</span>
                        <button class="logout-btn" onclick="app.logout()">Logout</button>
                    </div>
                </div>
            </header>
            
            <main class="main-container">
                <div class="stat-card">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
                        <h2 class="section-title">Laporan Pendapatan - ${this.state.selectedClinic.name}</h2>
                        <div>
                            <button class="btn btn-success" onclick="app.exportData('Excel')">Export Excel</button>
                            <button class="btn" style="background-color: #7c3aed; color: white;" onmouseover="this.style.backgroundColor='#6d28d9'" onmouseout="this.style.backgroundColor='#7c3aed'" onclick="app.exportData('PowerPoint')">Export PowerPoint</button>
                        </div>
                    </div>
                    
                    <div class="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>Bulan</th>
                                    <th>Jumlah Pendapatan (Rp)</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${reportsHTML}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
            
            <footer class="footer">
                <p class="footer-text">© 2024 FKTP DENKESYAH 02.04.03 - www.FKTPDenkesyahLampung.com</p>
            </footer>
        `;
    }
    
    renderRealisasiPendapatan() {
        if (!this.state.selectedClinic) {
            return `<div class="loading"><div class="spinner"></div></div>`;
        }
        
        let modalItemsHTML = '';
        this.realizationData.modal.forEach((item, index) => {
            modalItemsHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td>
                        ${this.state.userType === 'admin' ? `
                        <input type="text" value="${item.nama}" onchange="app.editModalItem(${item.id}, 'nama', this.value)" style="padding: 4px 8px; border: 1px solid #d1d5db; border-radius: 4px; font-size: 14px; width: 100%;">
                        ` : item.nama}
                    </td>
                    <td>
                        ${this.state.userType === 'admin' ? `
                        <input type="text" value="${item.satuan}" onchange="app.editModalItem(${item.id}, 'satuan', this.value)" style="padding: 4px 8px; border: 1px solid #d1d5db; border-radius: 4px; font-size: 14px; width: 100%;">
                        ` : item.satuan}
                    </td>
                    <td>
                        ${this.state.userType === 'admin' ? `
                        <input type="number" value="${item.harga}" onchange="app.editModalItem(${item.id}, 'harga', this.value)" style="padding: 4px 8px; border: 1px solid #d1d5db; border-radius: 4px; font-size: 14px; width: 100%;">
                        ` : this.formatCurrency(item.harga)}
                    </td>
                    <td>
                        ${this.state.userType === 'admin' ? `
                        <input type="number" value="${item.jumlah}" onchange="app.editModalItem(${item.id}, 'jumlah', this.value)" style="padding: 4px 8px; border: 1px solid #d1d5db; border-radius: 4px; font-size: 14px; width: 100%;">
                        ` : item.jumlah}
                    </td>
                    <td><strong>${this.formatCurrency(item.total)}</strong></td>
                    <td><img src="${item.gambar}" alt="${item.nama}" style="width: 64px; height: 64px; object-fit: cover; border-radius: 4px;"></td>
                    ${this.state.userType === 'admin' ? `
                    <td><button style="background: none; border: none; color: #dc2626; font-size: 14px; cursor: pointer;">Hapus</button></td>
                    ` : ''}
                </tr>
            `;
        });
        
        return `
            <header class="header">
                <div class="header-container">
                    <div style="display: flex; align-items: center;">
                        <a href="#" class="back-btn" onclick="app.navigateTo('clinic-detail')">← Kembali ke Detail Unit</a>
                        <h1 class="header-title">Realisasi Pendapatan</h1>
                    </div>
                    <div class="header-info">
                        <span class="user-info">Halo, ${this.state.username} (${this.state.userType})</span>
                        <button class="logout-btn" onclick="app.logout()">Logout</button>
                    </div>
                </div>
            </header>
            
            <main class="main-container">
                <!-- Honor/Jasa 30% -->
                <div class="stat-card">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
                        <h2 class="section-title">Honor/Jasa (30%)</h2>
                        <button class="btn btn-success" onclick="app.exportData('Excel')">Export Excel</button>
                    </div>
                    
                    <div class="stat-grid">
                        <div class="stat-item stat-item-blue">
                            <h3 class="stat-label">Medis</h3>
                            <p class="stat-value stat-value-blue">${this.formatCurrency(this.realizationData.honor.medis)}</p>
                        </div>
                        <div class="stat-item stat-item-green">
                            <h3 class="stat-label">Paramedis</h3>
                            <p class="stat-value stat-value-green">${this.formatCurrency(this.realizationData.honor.paramedis)}</p>
                        </div>
                        <div class="stat-item stat-item-orange">
                            <h3 class="stat-label">Pengelola</h3>
                            <p class="stat-value stat-value-orange">${this.formatCurrency(this.realizationData.honor.pengelola)}</p>
                        </div>
                    </div>
                </div>
                
                <!-- Operasional 50% -->
                <div class="stat-card">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
                        <h2 class="section-title">Operasional (50%)</h2>
                        <button class="btn btn-success" onclick="app.exportData('Excel')">Export Excel</button>
                    </div>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
                        <div class="stat-item stat-item-orange">
                            <h3 class="stat-label">Belanja ATK</h3>
                            <p class="stat-value stat-value-orange">${this.formatCurrency(this.realizationData.operational.atk)}</p>
                        </div>
                        <div class="stat-item" style="background-color: #ffedd5;">
                            <h3 class="stat-label">Belanja Obat</h3>
                            <p class="stat-value stat-value-orange">${this.formatCurrency(this.realizationData.operational.obat)}</p>
                        </div>
                    </div>
                </div>
                
                <!-- Belanja Modal 20% -->
                <div class="stat-card">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
                        <h2 class="section-title">Belanja Modal (20%)</h2>
                        <div>
                            <button class="btn btn-success" onclick="app.exportData('Excel')">Export Excel</button>
                            ${this.state.userType === 'admin' ? `
                            <button class="btn btn-primary" onclick="app.addModalItem()">Tambah Item</button>
                            ` : ''}
                        </div>
                    </div>
                    
                    <div class="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Nama Barang</th>
                                    <th>Satuan</th>
                                    <th>Harga</th>
                                    <th>Jumlah</th>
                                    <th>Total</th>
                                    <th>Gambar</th>
                                    ${this.state.userType === 'admin' ? '<th>Aksi</th>' : ''}
                                </tr>
                            </thead>
                            <tbody>
                                ${modalItemsHTML}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
            
            <footer class="footer">
                <p class="footer-text">© 2024 FKTP DENKESYAH 02.04.03 - www.FKTPDenkesyahLampung.com</p>
            </footer>
        `;
    }
    
    renderSisaAnggaran() {
        if (!this.state.selectedClinic) {
            return `<div class="loading"><div class="spinner"></div></div>`;
        }
        
        const clinicId = this.state.selectedClinic.id;
        const budget = this.budgetRemaining[clinicId] || {
            totalBudget: 0,
            totalSpent: 0,
            remaining: 0,
            byCategory: {
                honor: { allocated: 0, spent: 0, remaining: 0 },
                operational: { allocated: 0, spent: 0, remaining: 0 },
                modal: { allocated: 0, spent: 0, remaining: 0 }
            },
            monthlyRemaining: []
        };
        
        let monthlyHTML = '';
        budget.monthlyRemaining.forEach(item => {
            const percentage = Math.min((item.spent / (item.budget || 1)) * 100, 100);
            monthlyHTML += `
                <tr>
                    <td>${item.month}</td>
                    <td>${this.formatCurrency(item.budget)}</td>
                    <td>${this.formatCurrency(item.spent)}</td>
                    <td><strong style="color: #059669;">${this.formatCurrency(item.remaining)}</strong></td>
                    <td>
                        <div style="display: flex; align-items: center;">
                            <div style="width: 80px; background-color: #e2e8f0; border-radius: 9999px; height: 8px; margin-right: 8px;">
                                <div style="width: ${percentage}%; background-color: #2563eb; height: 8px; border-radius: 9999px;"></div>
                            </div>
                            <span>${Math.round(percentage)}%</span>
                        </div>
                    </td>
                </tr>
            `;
        });
        
        return `
            <header class="header">
                <div class="header-container">
                    <div style="display: flex; align-items: center;">
                        <a href="#" class="back-btn" onclick="app.navigateTo('clinic-detail')">← Kembali ke Detail Unit</a>
                        <h1 class="header-title">Sisa Anggaran</h1>
                    </div>
                    <div class="header-info">
                        <span class="user-info">Halo, ${this.state.username} (${this.state.userType})</span>
                        <button class="logout-btn" onclick="app.logout()">Logout</button>
                    </div>
                </div>
            </header>
            
            <main class="main-container">
                <!-- Ringkasan Sisa Anggaran -->
                <div class="stat-card">
                    <h2 class="section-title">Ringkasan Sisa Anggaran - ${this.state.selectedClinic.name}</h2>
                    
                    <div class="stat-grid">
                        <div class="stat-item stat-item-green">
                            <h3 class="stat-label">Total Anggaran</h3>
                            <p class="stat-value stat-value-green">${this.formatCurrency(budget.totalBudget)}</p>
                        </div>
                        <div class="stat-item stat-item-blue">
                            <h3 class="stat-label">Total Telah Digunakan</h3>
                            <p class="stat-value stat-value-blue">${this.formatCurrency(budget.totalSpent)}</p>
                        </div>
                        <div class="stat-item stat-item-orange">
                            <h3 class="stat-label">Sisa Anggaran</h3>
                            <p class="stat-value stat-value-orange">${this.formatCurrency(budget.remaining)}</p>
                        </div>
                    </div>
                    
                    <!-- Persentase Penggunaan -->
                    <div style="margin: 32px 0;">
                        <h3 class="section-title">Persentase Penggunaan per Kategori</h3>
                        <div style="display: flex; flex-direction: column; gap: 16px; margin-top: 16px;">
                            <!-- Honor/Jasa -->
                            <div>
                                <div style="display: flex; justify-content: space-between; margin-bottom: 4px; font-size: 12px; font-weight: 500;">
                                    <span>Honor/Jasa (30%)</span>
                                    <span style="color: #64748b;">${Math.round((budget.byCategory.honor.spent / (budget.byCategory.honor.allocated || 1)) * 100)}% digunakan</span>
                                </div>
                                <div style="width: 100%; background-color: #e2e8f0; border-radius: 9999px; height: 10px;">
                                    <div style="width: ${Math.min((budget.byCategory.honor.spent / (budget.byCategory.honor.allocated || 1)) * 100, 100)}%; background-color: #2563eb; height: 10px; border-radius: 9999px;"></div>
                                </div>
                                <div style="display: flex; justify-content: space-between; font-size: 12px; color: #64748b; margin-top: 4px;">
                                    <span>Anggaran: ${this.formatCurrency(budget.byCategory.honor.allocated)}</span>
                                    <span>Sisa: ${this.formatCurrency(budget.byCategory.honor.remaining)}</span>
                                </div>
                            </div>
                            
                            <!-- Operasional -->
                            <div>
                                <div style="display: flex; justify-content: space-between; margin-bottom: 4px; font-size: 12px; font-weight: 500;">
                                    <span>Operasional (50%)</span>
                                    <span style="color: #64748b;">${Math.round((budget.byCategory.operational.spent / (budget.byCategory.operational.allocated || 1)) * 100)}% digunakan</span>
                                </div>
                                <div style="width: 100%; background-color: #e2e8f0; border-radius: 9999px; height: 10px;">
                                    <div style="width: ${Math.min((budget.byCategory.operational.spent / (budget.byCategory.operational.allocated || 1)) * 100, 100)}%; background-color: #059669; height: 10px; border-radius: 9999px;"></div>
                                </div>
                                <div style="display: flex; justify-content: space-between; font-size: 12px; color: #64748b; margin-top: 4px;">
                                    <span>Anggaran: ${this.formatCurrency(budget.byCategory.operational.allocated)}</span>
                                    <span>Sisa: ${this.formatCurrency(budget.byCategory.operational.remaining)}</span>
                                </div>
                            </div>
                            
                            <!-- Belanja Modal -->
                            <div>
                                <div style="display: flex; justify-content: space-between; margin-bottom: 4px; font-size: 12px; font-weight: 500;">
                                    <span>Belanja Modal (20%)</span>
                                    <span style="color: #64748b;">${Math.round((budget.byCategory.modal.spent / (budget.byCategory.modal.allocated || 1)) * 100)}% digunakan</span>
                                </div>
                                <div style="width: 100%; background-color: #e2e8f0; border-radius: 9999px; height: 10px;">
                                    <div style="width: ${Math.min((budget.byCategory.modal.spent / (budget.byCategory.modal.allocated || 1)) * 100, 100)}%; background-color: #7c3aed; height: 10px; border-radius: 9999px;"></div>
                                </div>
                                <div style="display: flex; justify-content: space-between; font-size: 12px; color: #64748b; margin-top: 4px;">
                                    <span>Anggaran: ${this.formatCurrency(budget.byCategory.modal.allocated)}</span>
                                    <span>Sisa: ${this.formatCurrency(budget.byCategory.modal.remaining)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Sisa Anggaran Bulanan -->
                <div class="stat-card">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
                        <h2 class="section-title">Sisa Anggaran Bulanan</h2>
                        <div>
                            <button class="btn btn-success" onclick="app.exportData('Excel')">Export Excel</button>
                            <button class="btn" style="background-color: #7c3aed; color: white;" onmouseover="this.style.backgroundColor='#6d28d9'" onmouseout="this.style.backgroundColor='#7c3aed'" onclick="app.exportData('PowerPoint')">Export PowerPoint</button>
                        </div>
                    </div>
                    
                    <div class="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>Bulan</th>
                                    <th>Total Anggaran</th>
                                    <th>Telah Digunakan</th>
                                    <th>Sisa Anggaran</th>
                                    <th>Persentase</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${monthlyHTML}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
            
            <footer class="footer">
                <p class="footer-text">© 2024 FKTP DENKESYAH 02.04.03 - www.FKTPDenkesyahLampung.com</p>
            </footer>
        `;
    }
    
    renderRekapTotal() {
        let clinicsHTML = '';
        this.clinics.forEach((clinic, index) => {
            clinicsHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${clinic.name}</td>
                    <td>${this.formatCurrency(this.totalRecap.totalIncome / this.clinics.length)}</td>
                    <td>${this.formatCurrency(this.totalRecap.totalRealization / this.clinics.length)}</td>
                    <td>${this.formatCurrency(this.totalRecap.remaining / this.clinics.length)}</td>
                    <td>
                        <button class="btn" style="background-color: #ea580c; color: white;" onmouseover="this.style.backgroundColor='#c2410c'" onmouseout="this.style.backgroundColor='#ea580c'" onclick="app.navigateTo('sisa-anggaran', ${JSON.stringify(clinic).replace(/"/g, '&quot;')})">Detail Sisa Anggaran</button>
                    </td>
                </tr>
            `;
        });
        
        return `
            <header class="header">
                <div class="header-container">
                    <div style="display: flex; align-items: center;">
                        <a href="#" class="back-btn" onclick="app.navigateTo('dashboard')">← Kembali ke Dashboard</a>
                        <h1 class="header-title">Rekap Total Semua Unit FKTP</h1>
                    </div>
                    <div class="header-info">
                        <span class="user-info">Halo, ${this.state.username} (${this.state.userType})</span>
                        <button class="logout-btn" onclick="app.logout()">Logout</button>
                    </div>
                </div>
            </header>
            
            <main class="main-container">
                <div class="stat-card">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
                        <h2 class="section-title">Rekap Total Semua Unit FKTP DENKESYAH 02.04.03</h2>
                        <div>
                            <button class="btn btn-success" onclick="app.exportData('Excel')">Export Excel</button>
                            <button class="btn" style="background-color: #7c3aed; color: white;" onmouseover="this.style.backgroundColor='#6d28d9'" onmouseout="this.style.backgroundColor='#7c3aed'" onclick="app.exportData('PowerPoint')">Export PowerPoint</button>
                        </div>
                    </div>
                    
                    <div class="stat-grid">
                        <div class="stat-item stat-item-green">
                            <h3 class="stat-label">Total Pendapatan</h3>
                            <p class="stat-value stat-value-green">${this.formatCurrency(this.totalRecap.totalIncome)}</p>
                        </div>
                        <div class="stat-item stat-item-blue">
                            <h3 class="stat-label">Total Realisasi</h3>
                            <p class="stat-value stat-value-blue">${this.formatCurrency(this.totalRecap.totalRealization)}</p>
                        </div>
                        <div class="stat-item stat-item-orange">
                            <h3 class="stat-label">Sisa Pendapatan</h3>
                            <p class="stat-value stat-value-orange">${this.formatCurrency(this.totalRecap.remaining)}</p>
                        </div>
                    </div>
                    
                    <h3 class="section-title" style="margin: 32px 0 16px 0;">Rekap per Unit FKTP</h3>
                    
                    <div class="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Nama Unit</th>
                                    <th>Total Pendapatan</th>
                                    <th>Total Realisasi</th>
                                    <th>Sisa</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${clinicsHTML}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
            
            <footer class="footer">
                <p class="footer-text">© 2024 FKTP DENKESYAH 02.04.03 - www.FKTPDenkesyahLampung.com</p>
            </footer>
        `;
    }
}

// Initialize the app when the page loads
let app;
document.addEventListener('DOMContentLoaded', function() {
    app = new FKTPApp();
});

// Add to global scope for onclick handlers
window.app = app;