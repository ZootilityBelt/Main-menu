// ===== Language / i18n =====
let currentLanguage = 'en';

const translations = {
    en: {
        title: 'Zoo Enrichment Program Randomizer',
        subtitle: 'Create randomized weekly and daily enrichment schedules for your animals',
        labelInstitution: 'Zoo Institution (optional):',
        placeholderInstitution: 'e.g., San Diego Zoo',
        labelArea: 'Area/Enclosure (optional):',
        placeholderArea: 'e.g., African Savanna, Primate Pavilion',
        labelMonth: 'Select Month and Year:',
        labelMonthly: 'Monthly Enrichment Items (comma-separated):',
        placeholderMonthly: 'e.g., Pool party, Seasonal decorations, Special feeding event',
        labelWeekly: 'Weekly Enrichment Items:',
        labelDaily: 'Daily Enrichment Items:',
        btnAddItem: '+ Add Item',
        btnAddItemDaily: '+ Add Item',
        btnGenerate: 'Generate Enrichment Schedule',
        resultsTitle: 'Enrichment Schedule',
        btnPrint: '🖨️ Print/Save Schedule',
        btnOrderList: '📋 Generate Monthly Item Order List',
        btnBack: '🏠 Back to Main Menu',
        btnRemove: 'Remove',
        btnUseExamples: '✓ Use These Examples',
        placeholderWeekly: 'Enter weekly enrichment item',
        placeholderDaily: 'Enter daily enrichment item',
        alertSelectMonth: 'Please select a month and year',
        alertWeeklyEmpty: 'Please add at least one weekly enrichment item',
        alertDailyEmpty: 'Please add at least one daily enrichment item',
        alertGenerateFirst: 'Please generate a schedule first before creating the order list',
        labelZooInstitution: 'Zoo Institution:',
        labelAreaEnclosure: 'Area/Enclosure:',
        monthlyEvents: 'Monthly Events:',
        week: 'Week',
        weeklyFocus: 'Weekly Focus:',
        dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        orderListTitle: 'Monthly Item Order List',
        orderMonthly: 'Monthly Enrichment Items',
        orderWeekly: 'Weekly Enrichment Items',
        orderDaily: 'Daily Enrichment Items',
        qty: 'Qty:',
        weeks: 'weeks',
        days: 'days',
        locale: 'en-US',
        labelLogo: 'Zoo Logo (optional):',
        logoNote: '📐 Recommended: PNG or JPG, max 200×200px for best print results',
        btnRemoveLogo: '✕ Remove',
        exampleWeeklyItems: [
            'Puzzle feeders',
            'Scent trails',
            'New toys rotation',
            'Training sessions'
        ],
        exampleDailyItems: [
            'Food scatter',
            'Ice treats',
            'Cardboard boxes',
            'Paper bags',
            'Hay bundle',
            'Scent enrichment',
            'Mirror time',
            'Musical instruments',
            'Bubble machine',
            'New browse material',
            'Paint activity',
            'Sand pit exploration',
            'Water spray',
            'Hanging vegetables',
            'Texture boards',
            'Hidden treats',
            'Climbing challenge'
        ]
    },
    id: {
        title: 'Pengacak Program Pengayaan Kebun Binatang',
        subtitle: 'Buat jadwal pengayaan mingguan dan harian secara acak untuk hewan Anda',
        labelInstitution: 'Institusi Kebun Binatang (opsional):',
        placeholderInstitution: 'cth., Taman Safari Indonesia',
        labelArea: 'Area/Kandang (opsional):',
        placeholderArea: 'cth., Savana Afrika, Paviliun Primata',
        labelMonth: 'Pilih Bulan dan Tahun:',
        labelMonthly: 'Item Pengayaan Bulanan (pisahkan dengan koma):',
        placeholderMonthly: 'cth., Pesta kolam, Dekorasi musiman, Acara makan khusus',
        labelWeekly: 'Item Pengayaan Mingguan:',
        labelDaily: 'Item Pengayaan Harian:',
        btnAddItem: '+ Tambah Item',
        btnAddItemDaily: '+ Tambah Item',
        btnGenerate: 'Buat Jadwal Pengayaan',
        resultsTitle: 'Jadwal Pengayaan',
        btnPrint: '🖨️ Cetak/Simpan Jadwal',
        btnOrderList: '📋 Buat Daftar Pesanan Item Bulanan',
        btnBack: '🏠 Kembali ke Menu Utama',
        btnRemove: 'Hapus',
        btnUseExamples: '✓ Gunakan Contoh Ini',
        placeholderWeekly: 'Masukkan item pengayaan mingguan',
        placeholderDaily: 'Masukkan item pengayaan harian',
        alertSelectMonth: 'Silakan pilih bulan dan tahun',
        alertWeeklyEmpty: 'Silakan tambahkan setidaknya satu item pengayaan mingguan',
        alertDailyEmpty: 'Silakan tambahkan setidaknya satu item pengayaan harian',
        alertGenerateFirst: 'Silakan buat jadwal terlebih dahulu sebelum membuat daftar pesanan',
        labelZooInstitution: 'Institusi Kebun Binatang:',
        labelAreaEnclosure: 'Area/Kandang:',
        monthlyEvents: 'Acara Bulanan:',
        week: 'Minggu',
        weeklyFocus: 'Fokus Mingguan:',
        dayNames: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
        orderListTitle: 'Daftar Pesanan Item Bulanan',
        orderMonthly: 'Item Pengayaan Bulanan',
        orderWeekly: 'Item Pengayaan Mingguan',
        orderDaily: 'Item Pengayaan Harian',
        qty: 'Jml:',
        weeks: 'minggu',
        days: 'hari',
        locale: 'id-ID',
        labelLogo: 'Logo Kebun Binatang (opsional):',
        logoNote: '📐 Disarankan: PNG atau JPG, maks 200×200px untuk hasil cetak terbaik',
        btnRemoveLogo: '✕ Hapus',
        exampleWeeklyItems: [
            'Wadah pakan teka-teki',
            'Jejak aroma',
            'Rotasi mainan baru',
            'Sesi pelatihan'
        ],
        exampleDailyItems: [
            'Sebar makanan',
            'Camilan es',
            'Kotak kardus',
            'Kantong kertas',
            'Gulungan jerami',
            'Pengayaan aroma',
            'Waktu cermin',
            'Alat musik',
            'Mesin gelembung',
            'Bahan rambanan baru',
            'Aktivitas melukis',
            'Eksplorasi bak pasir',
            'Semprotan air',
            'Sayuran gantung',
            'Papan tekstur',
            'Camilan tersembunyi',
            'Tantangan memanjat'
        ]
    }
};

function t(key) {
    return translations[currentLanguage][key] || translations['en'][key] || key;
}

function setLanguage(lang) {
    currentLanguage = lang;

    // Update html lang attribute
    document.getElementById('htmlRoot').setAttribute('lang', lang);

    // Update language buttons
    document.getElementById('lang-en').classList.toggle('active', lang === 'en');
    document.getElementById('lang-id').classList.toggle('active', lang === 'id');

    // Update all data-i18n text elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Update all data-i18n-placeholder elements
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    // Update dynamically created elements
    document.querySelectorAll('.btn-remove').forEach(btn => {
        btn.textContent = t('btnRemove');
    });
    document.querySelectorAll('.weekly-input').forEach(input => {
        input.placeholder = t('placeholderWeekly');
    });
    document.querySelectorAll('.daily-input').forEach(input => {
        input.placeholder = t('placeholderDaily');
    });
    document.querySelectorAll('.btn-activate').forEach(btn => {
        btn.textContent = t('btnUseExamples');
    });

    if (weeklyExampleMode) {
        const weeklyInputs = document.querySelectorAll('#weeklyItems .example-item input');
        const weeklyExamples = t('exampleWeeklyItems');
        weeklyInputs.forEach((input, index) => {
            if (weeklyExamples[index]) {
                input.value = weeklyExamples[index];
            }
        });
    }

    if (dailyExampleMode) {
        const dailyInputs = document.querySelectorAll('#dailyItems .example-item input');
        const dailyExamples = t('exampleDailyItems');
        dailyInputs.forEach((input, index) => {
            if (dailyExamples[index]) {
                input.value = dailyExamples[index];
            }
        });
    }
}

// ===== Zoo Logo =====
let zooLogoDataUrl = null;

function handleLogoUpload(input) {
    const file = input.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        zooLogoDataUrl = e.target.result;
        const preview = document.getElementById('logoPreview');
        const previewImg = document.getElementById('logoPreviewImg');
        previewImg.src = zooLogoDataUrl;
        preview.style.display = 'flex';
    };
    reader.readAsDataURL(file);
}

function removeLogo() {
    zooLogoDataUrl = null;
    document.getElementById('zooLogo').value = '';
    document.getElementById('logoPreview').style.display = 'none';
    document.getElementById('logoPreviewImg').src = '';
}

// ===== Default example items =====
let weeklyExampleMode = true;
let dailyExampleMode = true;

function initializeItems() {
    const weeklyContainer = document.getElementById('weeklyItems');
    const dailyContainer = document.getElementById('dailyItems');

    weeklyContainer.innerHTML = '';
    dailyContainer.innerHTML = '';

    const weeklyExamples = t('exampleWeeklyItems');
    weeklyExamples.forEach(item => {
        addWeeklyItem(item, true);
    });

    const dailyExamples = t('exampleDailyItems');
    dailyExamples.forEach(item => {
        addDailyItem(item, true);
    });

    // Add the activate buttons
    updateActivateButtons();
}

function addWeeklyItem(value = '', isExample = false) {
    const container = document.getElementById('weeklyItems');
    const itemDiv = document.createElement('div');
    itemDiv.className = 'item-row';
    if (isExample && weeklyExampleMode) {
        itemDiv.classList.add('example-item');
    }
    itemDiv.innerHTML = `
                <input type="text" value="${value}" placeholder="${t('placeholderWeekly')}" class="weekly-input">
                <button class="btn-remove" onclick="removeItem(this)">${t('btnRemove')}</button>
            `;

    // Add focus event to activate example on click
    if (isExample && weeklyExampleMode) {
        const input = itemDiv.querySelector('input');
        input.addEventListener('focus', function () {
            if (weeklyExampleMode) {
                activateSingleWeeklyExample(this);
            }
        });
    }

    container.appendChild(itemDiv);
}

function addDailyItem(value = '', isExample = false) {
    const container = document.getElementById('dailyItems');
    const itemDiv = document.createElement('div');
    itemDiv.className = 'item-row';
    if (isExample && dailyExampleMode) {
        itemDiv.classList.add('example-item');
    }
    itemDiv.innerHTML = `
                <input type="text" value="${value}" placeholder="${t('placeholderDaily')}" class="daily-input">
                <button class="btn-remove" onclick="removeItem(this)">${t('btnRemove')}</button>
            `;

    // Add focus event to activate example on click
    if (isExample && dailyExampleMode) {
        const input = itemDiv.querySelector('input');
        input.addEventListener('focus', function () {
            if (dailyExampleMode) {
                activateSingleDailyExample(this);
            }
        });
    }

    container.appendChild(itemDiv);
}

function removeItem(btn) {
    btn.parentElement.remove();
}

function getWeeklyItems() {
    const inputs = document.querySelectorAll('.weekly-input');
    return Array.from(inputs)
        .map(input => input.value.trim())
        .filter(value => value !== '');
}

function getDailyItems() {
    const inputs = document.querySelectorAll('.daily-input');
    return Array.from(inputs)
        .map(input => input.value.trim())
        .filter(value => value !== '');
}

function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year, month) {
    return new Date(year, month, 1).getDay();
}

function generateSchedule() {
    const monthInput = document.getElementById('month').value;
    if (!monthInput) {
        alert(t('alertSelectMonth'));
        return;
    }

    const institution = document.getElementById('institution').value.trim();
    const area = document.getElementById('area').value.trim();

    const [year, month] = monthInput.split('-').map(Number);
    const monthName = new Date(year, month - 1).toLocaleString(t('locale'), { month: 'long', year: 'numeric' });
    const daysInMonth = getDaysInMonth(year, month - 1);
    const firstDay = getFirstDayOfMonth(year, month - 1);

    const monthlyItems = document.getElementById('monthly').value
        .split(',')
        .map(item => item.trim())
        .filter(item => item !== '');

    const weeklyItems = getWeeklyItems();
    const dailyItems = getDailyItems();

    if (weeklyItems.length === 0) {
        alert(t('alertWeeklyEmpty'));
        return;
    }

    if (dailyItems.length === 0) {
        alert(t('alertDailyEmpty'));
        return;
    }

    const shuffledWeekly = shuffleArray(weeklyItems);
    const shuffledDaily = shuffleArray(dailyItems);

    // Track usage counts for order list
    window.scheduleData = {
        monthlyUsage: {},
        weeklyUsage: {},
        dailyUsage: {}
    };

    // Initialize counts
    monthlyItems.forEach(item => {
        window.scheduleData.monthlyUsage[item] = 1; // Monthly items used once per month
    });
    weeklyItems.forEach(item => {
        window.scheduleData.weeklyUsage[item] = 0;
    });
    dailyItems.forEach(item => {
        window.scheduleData.dailyUsage[item] = 0;
    });

    let output = '';

    // Logo + header with institution and area info
    if (zooLogoDataUrl || institution || area) {
        output += '<div class="header-info">';
        if (zooLogoDataUrl) {
            output += `<div class="logo-print"><img src="${zooLogoDataUrl}" alt="Zoo Logo" class="schedule-logo"></div>`;
        }
        output += '<div class="header-info-text">';
        if (institution) {
            output += `<div class="info-row"><span class="info-label">${t('labelZooInstitution')}</span> ${institution}</div>`;
        }
        if (area) {
            output += `<div class="info-row"><span class="info-label">${t('labelAreaEnclosure')}</span> ${area}</div>`;
        }
        output += '</div>';
        output += '</div>';
    }

    output += `<h3 style="text-align: center; margin-bottom: 20px; font-size: 1.8em; color: #667eea;">${monthName}</h3>`;

    if (monthlyItems.length > 0) {
        output += `<div class="monthly-events">
                    <strong>${t('monthlyEvents')}</strong> ${monthlyItems.join(', ')}
                </div>`;
    }

    const originalDayNames = t('dayNames');
    // Shift day names so the first column matches the weekday of the 1st of the month
    const shiftedDayNames = [...originalDayNames.slice(firstDay), ...originalDayNames.slice(0, firstDay)];

    let currentDay = 1;
    let currentWeek = 0;
    let dailyIndex = 0;

    output += `<table class="calendar-table">`;
    output += `<thead><tr>`;
    shiftedDayNames.forEach(day => {
        output += `<th>${day}</th>`;
    });
    output += `</tr></thead>`;
    output += `<tbody>`;

    while (currentDay <= daysInMonth) {
        // Randomly select a weekly item for each week
        const weeklyItem = weeklyItems[Math.floor(Math.random() * weeklyItems.length)];
        window.scheduleData.weeklyUsage[weeklyItem] = (window.scheduleData.weeklyUsage[weeklyItem] || 0) + 1;

        // Weekly Focus row spanning all 7 cols
        output += `<tr class="weekly-focus-row">
                    <td colspan="7">
                        <strong>${t('week')} ${currentWeek + 1}:</strong> ${t('weeklyFocus')} ${weeklyItem}
                    </td>
                   </tr>`;

        output += `<tr class="calendar-days-row">`;

        // Fill in the days
        for (let i = 0; i < 7; i++) {
            if (currentDay <= daysInMonth) {
                const dailyItem = dailyItems[Math.floor(Math.random() * dailyItems.length)];
                window.scheduleData.dailyUsage[dailyItem] = (window.scheduleData.dailyUsage[dailyItem] || 0) + 1;

                output += `<td class="calendar-day">
                            <div class="day-number">${currentDay}</div>
                            <div class="day-content">${dailyItem}</div>
                        </td>`;
                dailyIndex++;
                currentDay++;
            } else {
                output += `<td class="calendar-day empty"></td>`;
            }
        }

        output += `</tr>`;
        currentWeek++;
    }

    output += `</tbody></table>`;

    document.getElementById('scheduleOutput').innerHTML = output;
    document.getElementById('results').classList.add('show');
    document.getElementById('orderListSection').classList.remove('show');
    document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
}

function generateOrderList() {
    if (!window.scheduleData) {
        alert(t('alertGenerateFirst'));
        return;
    }

    const monthInput = document.getElementById('month').value;
    const institution = document.getElementById('institution').value.trim();
    const area = document.getElementById('area').value.trim();
    const [year, month] = monthInput.split('-').map(Number);
    const monthName = new Date(year, month - 1).toLocaleString(t('locale'), { month: 'long', year: 'numeric' });

    let output = `<h3>${t('orderListTitle')}</h3>`;

    // Header info
    if (zooLogoDataUrl || institution || area) {
        output += '<div style="text-align: center; margin-bottom: 20px; padding: 15px; background: #e7f3ff; border-radius: 8px;">';
        if (zooLogoDataUrl) {
            output += `<div style="margin-bottom: 10px;"><img src="${zooLogoDataUrl}" alt="Zoo Logo" style="max-height: 60px; width: auto;"></div>`;
        }
        if (institution) {
            output += `<div><strong>${t('labelZooInstitution')}</strong> ${institution}</div>`;
        }
        if (area) {
            output += `<div><strong>${t('labelAreaEnclosure')}</strong> ${area}</div>`;
        }
        output += `<div style="margin-top: 10px; font-size: 1.1em; color: #667eea;"><strong>${monthName}</strong></div>`;
        output += '</div>';
    } else {
        output += `<div style="text-align: center; margin-bottom: 20px; font-size: 1.1em; color: #667eea;"><strong>${monthName}</strong></div>`;
    }

    // Monthly Items
    if (Object.keys(window.scheduleData.monthlyUsage).length > 0) {
        output += '<div class="order-category">';
        output += `<h4>${t('orderMonthly')}</h4>`;
        output += '<ul>';
        for (const [item, count] of Object.entries(window.scheduleData.monthlyUsage)) {
            output += `<li><span class="item-name">${item}</span><span class="item-quantity">${t('qty')} ${count}</span></li>`;
        }
        output += '</ul>';
        output += '</div>';
    }

    // Weekly Items
    output += '<div class="order-category">';
    output += `<h4>${t('orderWeekly')}</h4>`;
    output += '<ul>';
    for (const [item, count] of Object.entries(window.scheduleData.weeklyUsage)) {
        output += `<li><span class="item-name">${item}</span><span class="item-quantity">${t('qty')} ${count} ${t('weeks')}</span></li>`;
    }
    output += '</ul>';
    output += '</div>';

    // Daily Items
    output += '<div class="order-category">';
    output += `<h4>${t('orderDaily')}</h4>`;
    output += '<ul>';
    for (const [item, count] of Object.entries(window.scheduleData.dailyUsage)) {
        output += `<li><span class="item-name">${item}</span><span class="item-quantity">${t('qty')} ${count} ${t('days')}</span></li>`;
    }
    output += '</ul>';
    output += '</div>';

    document.getElementById('orderListSection').innerHTML = output;
    document.getElementById('orderListSection').classList.add('show');
    document.getElementById('orderListSection').scrollIntoView({ behavior: 'smooth' });
}

function updateActivateButtons() {
    const weeklyContainer = document.getElementById('weeklyItems');
    const dailyContainer = document.getElementById('dailyItems');

    // Remove existing activate buttons
    document.querySelectorAll('.btn-activate').forEach(btn => btn.remove());

    // Add weekly activate button if in example mode
    if (weeklyExampleMode) {
        const weeklyBtn = document.createElement('button');
        weeklyBtn.className = 'btn-activate';
        weeklyBtn.textContent = t('btnUseExamples');
        weeklyBtn.onclick = activateWeeklyExamples;
        weeklyContainer.parentElement.insertBefore(weeklyBtn, weeklyContainer);
    }

    // Add daily activate button if in example mode
    if (dailyExampleMode) {
        const dailyBtn = document.createElement('button');
        dailyBtn.className = 'btn-activate';
        dailyBtn.textContent = t('btnUseExamples');
        dailyBtn.onclick = activateDailyExamples;
        dailyContainer.parentElement.insertBefore(dailyBtn, dailyContainer);
    }
}

function activateSingleWeeklyExample(input) {
    const row = input.closest('.item-row');
    row.classList.remove('example-item');

    // Check if all examples have been activated
    const remainingExamples = document.querySelectorAll('#weeklyItems .example-item');
    if (remainingExamples.length === 0) {
        weeklyExampleMode = false;
        updateActivateButtons();
    }
}

function activateSingleDailyExample(input) {
    const row = input.closest('.item-row');
    row.classList.remove('example-item');

    // Check if all examples have been activated
    const remainingExamples = document.querySelectorAll('#dailyItems .example-item');
    if (remainingExamples.length === 0) {
        dailyExampleMode = false;
        updateActivateButtons();
    }
}

function activateWeeklyExamples() {
    weeklyExampleMode = false;
    const weeklyRows = document.querySelectorAll('#weeklyItems .item-row');

    weeklyRows.forEach(row => row.classList.remove('example-item'));

    updateActivateButtons();
}

function activateDailyExamples() {
    dailyExampleMode = false;
    const dailyRows = document.querySelectorAll('#dailyItems .item-row');

    dailyRows.forEach(row => row.classList.remove('example-item'));

    updateActivateButtons();
}

window.onload = initializeItems;
