let currentLanguage = 'en';

const translations = {
    en: {
        title: "🦁 Qualitative Behaviour Assessment",
        subtitle: "Scoring scale: <strong>0 (Absent)</strong> to <strong>10 (Strongly expressed)</strong>",
        observer: "Observer",
        species: "Species",
        individualId: "Individual / Group ID",
        duration: "Observation Duration (minutes)",
        context: "Context",
        contextBaseline: "Baseline",
        contextFeeding: "Feeding",
        contextEnrichment: "Enrichment",
        contextVisitor: "Visitor Presence",
        contextTraining: "Training",
        contextVeterinary: "Veterinary",
        indicatorsTitle: "QBA Indicators",
        observerPlaceholder: "Enter observer name",
        speciesPlaceholder: "e.g., Lion, Elephant",
        idPlaceholder: "e.g., L-001",
        durationPlaceholder: "e.g., 30",
        addCustom: "➕ Add Custom Indicator",
        notes: "Observer Notes (optional)",
        notesPlaceholder: "Add any additional observations or context...",
        resetBtn: "Reset Form",
        submitBtn: "Submit QBA Score",
        infoNote: "ℹ️ QBA scores reflect overall behavioural expression, not specific behaviours. Consider the animal's body language, movement quality, and overall demeanor.",
        scaleAbsent: "0 - Absent",
        scaleModerate: "5 - Moderate",
        scaleStrong: "10 - Strong",
        customBadge: "Custom",
        removeBtn: "Remove",
        summaryTitle: "✅ Submission Summary",
        time: "Time",
        resultsTitle: "📊 Assessment Results",
        welfareIndex: "Welfare Index (0-100)",
        positiveWelfare: "Positive Welfare",
        moderateWelfare: "Moderate Welfare",
        welfareConcerns: "Welfare Concerns",
        interpretationTitle: "Interpretation",
        positiveIndicators: "Positive Indicators Average",
        negativeIndicators: "Negative Indicators Average",
        downloadBtn: "📥 Download Results as JSON",
        scatterPlotTitle: "QBA Behavioural Expression Map",
        scatterPlotXAxis: "PC1 (Valence: Negative ← → Positive)",
        scatterPlotYAxis: "PC2 (Arousal: Low ← → High)",
        legendPositive: "Positive Indicators",
        legendNegative: "Negative Indicators",
        legendNeutral: "Custom Indicators",
        alertFillFields: "Please fill in Observer, Species, and Individual/Group ID before submitting.",
        alertDuration: "Please enter a valid observation duration.",
        alertExists: "An indicator with this name already exists!",
        confirmReset: "Are you sure you want to reset the form? All entered data will be cleared.",
        confirmRemove: "Remove \"{{name}}\" indicator?",
        promptName: "Enter the name of the custom indicator:",
        promptDef: "Enter a brief definition for this indicator:",
        relaxed: "Relaxed",
        relaxedDef: "Loose posture, smooth and unforced movement",
        alert: "Alert",
        alertDef: "Attentive to surroundings without tension",
        curious: "Curious",
        curiousDef: "Actively exploring or investigating",
        tense: "Tense",
        tenseDef: "Rigid posture, abrupt or restrained movement",
        fearful: "Fearful",
        fearfulDef: "Avoidance, freezing, or withdrawal",
        frustrated: "Frustrated",
        frustratedDef: "Agitated, repetitive, or restless demeanour",
        playful: "Playful",
        playfulDef: "Energetic, bouncy, engaged in play behaviors",
        calm: "Calm",
        calmDef: "Quiet, peaceful, settled demeanor",
        interpretationPositive: "The animal is displaying predominantly positive behavioral expressions. High scores in relaxed, alert, curious, playful, or calm behaviors with low negative indicators suggest good welfare status.",
        interpretationModerate: "The animal shows a mix of positive and negative behavioral expressions. Consider the context and monitor for any changes. Some level of tension or alertness may be appropriate depending on the situation.",
        interpretationConcerns: "The animal is showing concerning behavioral patterns with elevated negative indicators or low positive expressions. Further assessment and potential intervention may be warranted.",
        whatIsQBA: "What is QBA?",
        qbaIntro: "Qualitative Behaviour Assessment (QBA) is a welfare assessment method that evaluates how an animal behaves, focusing on its overall behavioural expression (e.g. relaxed, tense, curious, fearful), rather than counting specific behaviours. It integrates posture, movement, responsiveness, and interaction to provide insight into the animal's affective (emotional) state as perceived by trained observers.",
        qbaImportanceTitle: "Why is QBA Important in the Five Domains Model?",
        qbaImportance: "The Five Domains model links physical conditions (Nutrition, Environment, Health, Behaviour) to the animal's Mental State (Domain 5). QBA is particularly valuable because it directly informs this mental/affective domain, capturing both positive and negative experiences that may not be detected by physical or quantitative measures alone.",
        qbaHowTitle: "How Does QBA Work?",
        qbaStep1: "An observer watches an animal or group for a defined period.",
        qbaStep2: "After observation, the observer scores standardized descriptive terms (e.g. 0–10 scale) based on how strongly each quality is expressed.",
        qbaStep3: "The resulting profile is used to compare welfare across time, individuals, or management conditions.",
        qbaEffective: "QBA is most effective when used alongside quantitative behavioural and health indicators, providing a more holistic welfare assessment.",
        qbaSummary: "QBA is a structured method for assessing animal emotional expression and is a key tool for evaluating the mental state domain within the Five Domains animal welfare framework."
    },
    id: {
        title: "🦁 Penilaian Perilaku Kualitatif",
        subtitle: "Skala penilaian: <strong>0 (Tidak ada)</strong> hingga <strong>10 (Sangat terlihat)</strong>",
        observer: "Pengamat",
        species: "Spesies",
        individualId: "ID Individu / Kelompok",
        duration: "Durasi Pengamatan (menit)",
        context: "Konteks",
        contextBaseline: "Baseline",
        contextFeeding: "Pemberian Makan",
        contextEnrichment: "Pengayaan",
        contextVisitor: "Kehadiran Pengunjung",
        contextTraining: "Pelatihan",
        contextVeterinary: "Veteriner",
        indicatorsTitle: "Indikator QBA",
        observerPlaceholder: "Masukkan nama pengamat",
        speciesPlaceholder: "mis., Singa, Gajah",
        idPlaceholder: "mis., L-001",
        durationPlaceholder: "mis., 30",
        addCustom: "➕ Tambah Indikator Kustom",
        notes: "Catatan Pengamat (opsional)",
        notesPlaceholder: "Tambahkan pengamatan atau konteks tambahan...",
        resetBtn: "Reset Formulir",
        submitBtn: "Kirim Skor QBA",
        infoNote: "ℹ️ Skor QBA mencerminkan ekspresi perilaku keseluruhan, bukan perilaku spesifik. Pertimbangkan bahasa tubuh, kualitas gerakan, dan sikap keseluruhan hewan.",
        scaleAbsent: "0 - Tidak ada",
        scaleModerate: "5 - Sedang",
        scaleStrong: "10 - Kuat",
        customBadge: "Kustom",
        removeBtn: "Hapus",
        summaryTitle: "✅ Ringkasan Pengiriman",
        time: "Waktu",
        resultsTitle: "📊 Hasil Penilaian",
        welfareIndex: "Indeks Kesejahteraan (0-100)",
        positiveWelfare: "Kesejahteraan Positif",
        moderateWelfare: "Kesejahteraan Sedang",
        welfareConcerns: "Perhatian Kesejahteraan",
        interpretationTitle: "Interpretasi",
        positiveIndicators: "Rata-rata Indikator Positif",
        negativeIndicators: "Rata-rata Indikator Negatif",
        downloadBtn: "📥 Unduh Hasil sebagai JSON",
        scatterPlotTitle: "Peta Ekspresi Perilaku QBA",
        scatterPlotXAxis: "PC1 (Valensi: Negatif ← → Positif)",
        scatterPlotYAxis: "PC2 (Gairah: Rendah ← → Tinggi)",
        legendPositive: "Indikator Positif",
        legendNegative: "Indikator Negatif",
        legendNeutral: "Indikator Kustom",
        alertFillFields: "Harap isi Pengamat, Spesies, dan ID Individu/Kelompok sebelum mengirim.",
        alertDuration: "Harap masukkan durasi pengamatan yang valid.",
        alertExists: "Indikator dengan nama ini sudah ada!",
        confirmReset: "Apakah Anda yakin ingin mereset formulir? Semua data yang dimasukkan akan dihapus.",
        confirmRemove: "Hapus indikator \"{{name}}\"?",
        promptName: "Masukkan nama indikator kustom:",
        promptDef: "Masukkan definisi singkat untuk indikator ini:",
        relaxed: "Santai",
        relaxedDef: "Postur longgar, gerakan halus dan tidak dipaksakan",
        alert: "Waspada",
        alertDef: "Perhatian terhadap lingkungan tanpa ketegangan",
        curious: "Ingin Tahu",
        curiousDef: "Aktif menjelajah atau menyelidiki",
        tense: "Tegang",
        tenseDef: "Postur kaku, gerakan tiba-tiba atau terkendali",
        fearful: "Takut",
        fearfulDef: "Penghindaran, membeku, atau menarik diri",
        frustrated: "Frustrasi",
        frustratedDef: "Gelisah, berulang, atau sikap tidak tenang",
        playful: "Bermain",
        playfulDef: "Energik, lincah, terlibat dalam perilaku bermain",
        calm: "Tenang",
        calmDef: "Diam, damai, sikap yang stabil",
        interpretationPositive: "Hewan menampilkan ekspresi perilaku yang mayoritas positif. Skor tinggi pada perilaku santai, waspada, ingin tahu, bermain, atau tenang dengan indikator negatif rendah menunjukkan status kesejahteraan yang baik.",
        interpretationModerate: "Hewan menunjukkan campuran ekspresi perilaku positif dan negatif. Pertimbangkan konteksnya dan pantau perubahan apa pun. Beberapa tingkat ketegangan atau kewaspadaan mungkin sesuai tergantung situasinya.",
        interpretationConcerns: "Hewan menunjukkan pola perilaku yang mengkhawatirkan dengan indikator negatif yang meningkat atau ekspresi positif yang rendah. Penilaian lebih lanjut dan potensi intervensi mungkin diperlukan.",
        whatIsQBA: "Apa itu QBA?",
        qbaIntro: "Qualitative Behaviour Assessment (QBA) adalah metode penilaian kesejahteraan yang mengevaluasi bagaimana hewan berperilaku, dengan fokus pada ekspresi perilaku keseluruhan (misalnya santai, tegang, ingin tahu, takut), daripada menghitung perilaku spesifik. QBA mengintegrasikan postur, gerakan, responsivitas, dan interaksi untuk memberikan wawasan tentang keadaan afektif (emosional) hewan sebagaimana diamati oleh pengamat terlatih.",
        qbaImportanceTitle: "Mengapa QBA Penting dalam Model Lima Domain?",
        qbaImportance: "Model Lima Domain menghubungkan kondisi fisik (Nutrisi, Lingkungan, Kesehatan, Perilaku) dengan Keadaan Mental hewan (Domain 5). QBA sangat berharga karena secara langsung menginformasikan domain mental/afektif ini, menangkap pengalaman positif dan negatif yang mungkin tidak terdeteksi oleh ukuran fisik atau kuantitatif saja.",
        qbaHowTitle: "Bagaimana QBA Bekerja?",
        qbaStep1: "Seorang pengamat mengamati hewan atau kelompok selama periode yang ditentukan.",
        qbaStep2: "Setelah pengamatan, pengamat memberi skor pada istilah deskriptif standar (misalnya skala 0–10) berdasarkan seberapa kuat setiap kualitas diekspresikan.",
        qbaStep3: "Profil yang dihasilkan digunakan untuk membandingkan kesejahteraan dari waktu ke waktu, antar individu, atau kondisi manajemen.",
        qbaEffective: "QBA paling efektif bila digunakan bersama dengan indikator perilaku dan kesehatan kuantitatif, memberikan penilaian kesejahteraan yang lebih holistik.",
        qbaSummary: "QBA adalah metode terstruktur untuk menilai ekspresi emosional hewan dan merupakan alat kunci untuk mengevaluasi domain keadaan mental dalam kerangka kesejahteraan hewan Lima Domain."
    }
};

const descriptorList = [
    { name: "Relaxed", def: "Loose posture, smooth and unforced movement", type: "default" },
    { name: "Alert", def: "Attentive to surroundings without tension", type: "default" },
    { name: "Curious", def: "Actively exploring or investigating", type: "default" },
    { name: "Tense", def: "Rigid posture, abrupt or restrained movement", type: "default" },
    { name: "Fearful", def: "Avoidance, freezing, or withdrawal", type: "default" },
    { name: "Frustrated", def: "Agitated, repetitive, or restless demeanour", type: "default" },
    { name: "Playful", def: "Energik, bouncy, engaged in play behaviors", type: "default" },
    { name: "Calm", def: "Quiet, peaceful, settled demeanor", type: "default" }
];

let customIndicatorCounter = 0;

function setLanguage(lang) {
    currentLanguage = lang;

    // Update language buttons
    document.getElementById('lang-en').classList.toggle('active', lang === 'en');
    document.getElementById('lang-id').classList.toggle('active', lang === 'id');

    updateUI();
}

function t(key) {
    return translations[currentLanguage][key] || key;
}

function updateUI() {
    const trans = translations[currentLanguage];

    // Update title and subtitle
    document.querySelector('h1').innerHTML = trans.title;
    document.querySelector('.subtitle').innerHTML = trans.subtitle;

    // Update labels
    document.querySelectorAll('label')[0].textContent = trans.observer;
    document.querySelectorAll('label')[1].textContent = trans.species;
    document.querySelectorAll('label')[2].textContent = trans.individualId;
    document.querySelectorAll('label')[3].textContent = trans.duration;
    document.querySelectorAll('label')[4].textContent = trans.context;

    // Update placeholders
    document.getElementById('observer').placeholder = trans.observerPlaceholder;
    document.getElementById('species').placeholder = trans.speciesPlaceholder;
    document.getElementById('animalId').placeholder = trans.idPlaceholder;
    document.getElementById('duration').placeholder = trans.durationPlaceholder;

    // Update context options
    const contextSelect = document.getElementById('context');
    contextSelect.options[0].text = trans.contextBaseline;
    contextSelect.options[1].text = trans.contextFeeding;
    contextSelect.options[2].text = trans.contextEnrichment;
    contextSelect.options[3].text = trans.contextVisitor;
    contextSelect.options[4].text = trans.contextTraining;
    contextSelect.options[5].text = trans.contextVeterinary;

    // Update indicators title
    document.querySelector('h2').textContent = trans.indicatorsTitle;

    // Update notes label and placeholder
    document.querySelectorAll('label')[5].textContent = trans.notes;
    document.getElementById('notes').placeholder = trans.notesPlaceholder;

    // Update buttons
    document.querySelectorAll('.actions button')[0].textContent = trans.resetBtn;
    document.querySelectorAll('.actions button')[1].textContent = trans.submitBtn;

    // Update add custom button
    document.querySelector('.btn-secondary').textContent = trans.addCustom;

    // Update info note
    document.querySelector('.note').textContent = trans.infoNote;

    // Update info button tooltip
    document.querySelector('.info-button').title = trans.whatIsQBA;

    // Update modal content
    document.getElementById('modalTitle').textContent = trans.whatIsQBA;
    document.getElementById('qbaIntro').textContent = trans.qbaIntro;
    document.getElementById('qbaImportanceTitle').textContent = trans.qbaImportanceTitle;
    document.getElementById('qbaImportance').textContent = trans.qbaImportance;
    document.getElementById('qbaHowTitle').textContent = trans.qbaHowTitle;
    document.getElementById('qbaStep1').textContent = trans.qbaStep1;
    document.getElementById('qbaStep2').textContent = trans.qbaStep2;
    document.getElementById('qbaStep3').textContent = trans.qbaStep3;
    document.getElementById('qbaEffective').textContent = trans.qbaEffective;
    document.getElementById('qbaSummary').innerHTML = `<strong>${currentLanguage === 'en' ? 'One-sentence summary:' : 'Ringkasan satu kalimat:'}</strong> ${trans.qbaSummary}`;

    // Re-render descriptors
    renderDescriptors();
}

function getDescriptorName(baseName) {
    const lowerName = baseName.toLowerCase();
    if (lowerName === 'relaxed') return t('relaxed');
    if (lowerName === 'alert') return t('alert');
    if (lowerName === 'curious') return t('curious');
    if (lowerName === 'tense') return t('tense');
    if (lowerName === 'fearful') return t('fearful');
    if (lowerName === 'frustrated') return t('frustrated');
    if (lowerName === 'playful') return t('playful');
    if (lowerName === 'calm') return t('calm');
    return baseName;
}

function getDescriptorDef(baseName) {
    const lowerName = baseName.toLowerCase();
    if (lowerName === 'relaxed') return t('relaxedDef');
    if (lowerName === 'alert') return t('alertDef');
    if (lowerName === 'curious') return t('curiousDef');
    if (lowerName === 'tense') return t('tenseDef');
    if (lowerName === 'fearful') return t('fearfulDef');
    if (lowerName === 'frustrated') return t('frustratedDef');
    if (lowerName === 'playful') return t('playfulDef');
    if (lowerName === 'calm') return t('calmDef');
    return baseName;
}

function renderDescriptors() {
    const container = document.getElementById("descriptors");
    container.innerHTML = '';

    descriptorList.forEach((d, index) => {
        const div = document.createElement("div");
        div.className = "descriptor";

        const removeButton = d.type === "custom"
            ? `<button class="remove-indicator" onclick="removeIndicator(${index})">${t('removeBtn')}</button>`
            : '';

        const typeBadge = d.type === "custom"
            ? `<span class="descriptor-type-badge badge-custom">${t('customBadge')}</span>`
            : '';

        const displayName = d.type === "default" ? getDescriptorName(d.name) : d.name;
        const displayDef = d.type === "default" ? getDescriptorDef(d.name) : d.def;

        div.innerHTML = `
        <div class="descriptor-header">
          <span class="descriptor-name">${displayName}${typeBadge}</span>
          <div style="display: flex; align-items: center; gap: 8px;">
            <span class="descriptor-value" id="${d.name}-value">0</span>
            ${removeButton}
          </div>
        </div>
        <div class="descriptor-def">${displayDef}</div>
        <input type="range" min="0" max="10" step="1" value="0" id="${d.name}" 
               oninput="updateValue('${d.name}')">
        <div class="scale-labels">
          <span>${t('scaleAbsent')}</span>
          <span>${t('scaleModerate')}</span>
          <span>${t('scaleStrong')}</span>
        </div>
      `;

        container.appendChild(div);
    });
}

function addCustomIndicator() {
    const name = prompt(t('promptName'));
    if (!name || !name.trim()) return;

    const definition = prompt(t('promptDef'));
    if (!definition || !definition.trim()) return;

    // Check if name already exists
    if (descriptorList.some(d => d.name.toLowerCase() === name.trim().toLowerCase())) {
        alert(t('alertExists'));
        return;
    }

    descriptorList.push({
        name: name.trim(),
        def: definition.trim(),
        type: "custom"
    });

    renderDescriptors();
}

function removeIndicator(index) {
    const confirmMsg = t('confirmRemove').replace('{{name}}', descriptorList[index].name);
    if (confirm(confirmMsg)) {
        descriptorList.splice(index, 1);
        renderDescriptors();
    }
}

// Initial render
renderDescriptors();

function updateValue(name) {
    const slider = document.getElementById(name);
    const valueDisplay = document.getElementById(name + '-value');
    valueDisplay.textContent = slider.value;
}

function resetForm() {
    if (confirm(t('confirmReset'))) {
        document.getElementById('observer').value = '';
        document.getElementById('species').value = '';
        document.getElementById('animalId').value = '';
        document.getElementById('duration').value = '';
        document.getElementById('context').value = 'Baseline';
        document.getElementById('notes').value = '';

        descriptorList.forEach(d => {
            const element = document.getElementById(d.name);
            if (element) {
                element.value = 0;
                updateValue(d.name);
            }
        });

        document.getElementById('summary').classList.remove('show');
        document.getElementById('results').classList.remove('show');
    }
}

function submitQBA() {
    const observer = document.getElementById('observer').value;
    const species = document.getElementById('species').value;
    const animalId = document.getElementById('animalId').value;
    const duration = document.getElementById('duration').value;

    if (!observer || !species || !animalId) {
        alert(t('alertFillFields'));
        return;
    }

    if (!duration || duration <= 0) {
        alert(t('alertDuration'));
        return;
    }

    const data = {
        timestamp: new Date().toISOString(),
        observer: observer,
        species: species,
        animalId: animalId,
        duration: parseInt(duration),
        context: document.getElementById('context').value,
        scores: {},
        notes: document.getElementById('notes').value
    };

    descriptorList.forEach(d => {
        const element = document.getElementById(d.name);
        if (element) {
            data.scores[d.name] = parseInt(element.value);
        }
    });

    console.log("QBA Submission", data);

    // Show summary
    const summaryDiv = document.getElementById('summary');
    let summaryHTML = `<h3>${t('summaryTitle')}</h3>`;
    summaryHTML += `<div class="summary-item"><strong>${t('time')}:</strong> ${new Date().toLocaleString()}</div>`;
    summaryHTML += `<div class="summary-item"><strong>${t('observer')}:</strong> ${data.observer}</div>`;
    summaryHTML += `<div class="summary-item"><strong>${t('species')}:</strong> ${data.species}</div>`;
    summaryHTML += `<div class="summary-item"><strong>${t('individualId')}:</strong> ${data.animalId}</div>`;
    summaryHTML += `<div class="summary-item"><strong>${t('duration')}:</strong> ${data.duration} ${currentLanguage === 'id' ? 'menit' : 'minutes'}</div>`;
    summaryHTML += `<div class="summary-item"><strong>${t('context')}:</strong> ${data.context}</div>`;
    summaryHTML += '<hr style="margin: 12px 0;">';

    descriptorList.forEach(d => {
        if (data.scores[d.name] > 0) {
            summaryHTML += `<div class="summary-item"><span>${d.name}:</span> <strong>${data.scores[d.name]}/10</strong></div>`;
        }
    });

    summaryDiv.innerHTML = summaryHTML;
    summaryDiv.classList.add('show');

    // Calculate and show results
    showResults(data);

    summaryDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function showResults(data) {
    // Calculate positive and negative indicators
    const positiveDescriptors = ['Relaxed', 'Alert', 'Curious', 'Playful', 'Calm'];
    const negativeDescriptors = ['Tense', 'Fearful', 'Frustrated'];

    let positiveScore = 0;
    let negativeScore = 0;
    let positiveCount = 0;
    let negativeCount = 0;

    positiveDescriptors.forEach(d => {
        if (data.scores[d] !== undefined) {
            positiveScore += data.scores[d];
            positiveCount++;
        }
    });

    negativeDescriptors.forEach(d => {
        if (data.scores[d] !== undefined) {
            negativeScore += data.scores[d];
            negativeCount++;
        }
    });

    const avgPositive = positiveCount > 0 ? (positiveScore / positiveCount).toFixed(1) : 0;
    const avgNegative = negativeCount > 0 ? (negativeScore / negativeCount).toFixed(1) : 0;

    // Calculate overall welfare score (0-100)
    const welfareScore = Math.round(((avgPositive * 10) + ((10 - avgNegative) * 10)) / 2);

    // Determine interpretation
    let interpretation = '';
    let interpretationColor = '';

    if (welfareScore >= 75) {
        interpretation = t('positiveWelfare');
        interpretationColor = '#10b981';
    } else if (welfareScore >= 50) {
        interpretation = t('moderateWelfare');
        interpretationColor = '#f59e0b';
    } else {
        interpretation = t('welfareConcerns');
        interpretationColor = '#ef4444';
    }

    // Generate detailed interpretation
    let detailedInterpretation = '';
    if (welfareScore >= 75) {
        detailedInterpretation = t('interpretationPositive');
    } else if (welfareScore >= 50) {
        detailedInterpretation = t('interpretationModerate');
    } else {
        detailedInterpretation = t('interpretationConcerns');
    }

    // Build results HTML
    const resultsDiv = document.getElementById('results');
    let resultsHTML = `<h3>${t('resultsTitle')}</h3>`;

    resultsHTML += `
      <div class="welfare-score">
        <div class="welfare-score-value">${welfareScore}</div>
        <div class="welfare-interpretation" style="color: ${interpretationColor}">${interpretation}</div>
        <div style="color: #718096; font-size: 0.9rem; margin-top: 4px;">${t('welfareIndex')}</div>
      </div>
    `;

    resultsHTML += '<div class="score-bars">';

    // Add bars for each descriptor with scores > 0
    descriptorList.forEach(d => {
        const score = data.scores[d.name];
        if (score > 0) {
            const percentage = (score / 10) * 100;
            resultsHTML += `
          <div class="score-bar-item">
            <div class="score-bar-label">
              <span><strong>${d.name}</strong></span>
              <span>${score}/10</span>
            </div>
            <div class="score-bar-bg">
              <div class="score-bar-fill" style="width: ${percentage}%">${score}</div>
            </div>
          </div>
        `;
        }
    });

    resultsHTML += '</div>';

    resultsHTML += `
      <div class="interpretation-text">
        <h4>${t('interpretationTitle')}</h4>
        <p><strong>${t('positiveIndicators')}:</strong> ${avgPositive}/10</p>
        <p><strong>${t('negativeIndicators')}:</strong> ${avgNegative}/10</p>
        <p style="margin-top: 12px;">${detailedInterpretation}</p>
      </div>
    `;

    // Add scatter plot
    resultsHTML += `
      <div class="scatter-plot-container">
        <h4>${t('scatterPlotTitle')}</h4>
        <canvas id="scatterPlot"></canvas>
        <div class="plot-legend">
          <div class="legend-item">
            <div class="legend-dot legend-positive"></div>
            <span>${t('legendPositive')}</span>
          </div>
          <div class="legend-item">
            <div class="legend-dot legend-negative"></div>
            <span>${t('legendNegative')}</span>
          </div>
          <div class="legend-item">
            <div class="legend-dot legend-neutral"></div>
            <span>${t('legendNeutral')}</span>
          </div>
        </div>
      </div>
    `;

    resultsHTML += `<button class="download-btn" onclick="downloadResults()">${t('downloadBtn')}</button>`;

    resultsDiv.innerHTML = resultsHTML;
    resultsDiv.classList.add('show');

    // Store data for download
    window.currentQBAData = data;
    window.currentQBAResults = {
        welfareScore,
        interpretation,
        avgPositive,
        avgNegative
    };

    // Draw scatter plot after DOM update
    setTimeout(() => drawScatterPlot(data), 100);
}

function drawScatterPlot(data) {
    const canvas = document.getElementById('scatterPlot');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;

    // Set canvas size
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const width = rect.width;
    const height = rect.height;
    const padding = 60;
    const plotWidth = width - 2 * padding;
    const plotHeight = height - 2 * padding;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Define indicator positions based on typical QBA PCA mapping
    // X-axis: Valence (negative to positive), Y-axis: Arousal (low to high)
    const indicatorPositions = {
        'Relaxed': { x: 0.4, y: -0.3, type: 'positive' },
        'Alert': { x: 0.7, y: 0.2, type: 'positive' },
        'Curious': { x: 0.5, y: 0.4, type: 'positive' },
        'Tense': { x: -0.4, y: 0.5, type: 'negative' },
        'Fearful': { x: -0.6, y: 0.3, type: 'negative' },
        'Frustrated': { x: -0.7, y: 0.5, type: 'negative' },
        'Playful': { x: 0.6, y: 0.6, type: 'positive' },
        'Calm': { x: 0.3, y: -0.7, type: 'positive' }
    };

    // Draw axes
    ctx.strokeStyle = '#cbd5e0';
    ctx.lineWidth = 2;

    // X-axis
    ctx.beginPath();
    ctx.moveTo(padding, height / 2);
    ctx.lineTo(width - padding, height / 2);
    ctx.stroke();

    // Y-axis
    ctx.beginPath();
    ctx.moveTo(width / 2, padding);
    ctx.lineTo(width / 2, height - padding);
    ctx.stroke();

    // Draw circle boundary
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(plotWidth, plotHeight) / 2;
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.stroke();

    // Draw grid lines
    ctx.strokeStyle = '#f7fafc';
    ctx.lineWidth = 1;
    for (let i = -1; i <= 1; i += 0.5) {
        if (i !== 0) {
            // Vertical grid
            ctx.beginPath();
            ctx.moveTo(centerX + i * radius, padding);
            ctx.lineTo(centerX + i * radius, height - padding);
            ctx.stroke();

            // Horizontal grid
            ctx.beginPath();
            ctx.moveTo(padding, centerY + i * radius);
            ctx.lineTo(width - padding, centerY + i * radius);
            ctx.stroke();
        }
    }

    // Draw axis labels
    ctx.fillStyle = '#4a5568';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';

    // X-axis label
    ctx.fillText(t('scatterPlotXAxis'), centerX, height - 15);

    // Y-axis label (rotated)
    ctx.save();
    ctx.translate(15, centerY);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText(t('scatterPlotYAxis'), 0, 0);
    ctx.restore();

    // Plot data points
    Object.keys(data.scores).forEach(name => {
        const score = data.scores[name];
        if (score > 0 && indicatorPositions[name]) {
            const pos = indicatorPositions[name];
            const x = centerX + pos.x * radius;
            const y = centerY - pos.y * radius; // Invert Y for canvas coordinate

            // Size based on score
            const dotSize = 3 + (score / 10) * 7;

            // Color based on type
            let color;
            if (pos.type === 'positive') {
                color = '#10b981';
            } else if (pos.type === 'negative') {
                color = '#ef4444';
            } else {
                color = '#6b7280';
            }

            // Draw point
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(x, y, dotSize, 0, 2 * Math.PI);
            ctx.fill();

            // Draw label
            ctx.fillStyle = '#2d3748';
            ctx.font = 'bold 11px Arial';
            ctx.textAlign = 'center';
            const displayName = descriptorList.find(d => d.name === name)?.name || name;
            const translatedName = getDescriptorName(displayName);
            ctx.fillText(translatedName, x, y - dotSize - 5);
        }
    });

    // Handle custom indicators (place them randomly but sensibly)
    Object.keys(data.scores).forEach(name => {
        const score = data.scores[name];
        if (score > 0 && !indicatorPositions[name]) {
            // Custom indicator - place near center
            const angle = Math.random() * 2 * Math.PI;
            const distance = Math.random() * 0.3 * radius;
            const x = centerX + Math.cos(angle) * distance;
            const y = centerY + Math.sin(angle) * distance;

            const dotSize = 3 + (score / 10) * 7;

            // Draw point
            ctx.fillStyle = '#6b7280';
            ctx.beginPath();
            ctx.arc(x, y, dotSize, 0, 2 * Math.PI);
            ctx.fill();

            // Draw label
            ctx.fillStyle = '#2d3748';
            ctx.font = 'bold 11px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(name, x, y - dotSize - 5);
        }
    });
}

// Redraw plot on window resize
window.addEventListener('resize', () => {
    if (window.currentQBAData) {
        drawScatterPlot(window.currentQBAData);
    }
});

function downloadResults() {
    const downloadData = {
        ...window.currentQBAData,
        results: window.currentQBAResults
    };

    const dataStr = JSON.stringify(downloadData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `QBA_${window.currentQBAData.species}_${window.currentQBAData.animalId}_${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
}

function showQBAInfo() {
    document.getElementById('qbaModal').classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeQBAInfo() {
    document.getElementById('qbaModal').classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.getElementById('qbaModal').addEventListener('click', function (e) {
    if (e.target === this) {
        closeQBAInfo();
    }
});
