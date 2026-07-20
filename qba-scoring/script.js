let currentLanguage = 'en';

const translations = {
    en: {
        title: "🦁 Qualitative Behaviour Assessment",
        subtitle: "Scoring scale: <strong>0 (Absent)</strong> to <strong>10 (Strongly expressed)</strong>",
        observer: "Observer",
        species: "Species",
        individualId: "Individual / Group ID",
        period: "Observation Period",
        periodPlaceholder: "e.g., Morning, 09:00",
        duration: "Observation Duration (minutes)",
        durationSuggestion: "Recommendation: 2 minutes",
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
        alertPeriod: "Please enter the observation period.",
        durationPlaceholder: "e.g., 2",
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
        welfareState: "Dominant Welfare State",
        positiveWelfare: "Positive Welfare",
        moderateWelfare: "Moderate Welfare",
        welfareConcerns: "Welfare Concerns",
        interpretationTitle: "Interpretation",
        quadrantPC: "Positive Calm (PC)",
        quadrantPA: "Positive Active (PA)",
        quadrantNC: "Negative Calm (NC)",
        quadrantNA: "Negative Active (NA)",
        dominantQuadrant: "Dominant Quadrant",
        welfareResultPC: "The animal is predominantly in a Positive Calm state. It appears relaxed, comfortable, and at ease — indicating good welfare with low arousal.",
        welfareResultPA: "The animal is predominantly in a Positive Active state. It appears lively, curious, and playful — indicating good welfare with high engagement.",
        welfareResultNC: "The animal is predominantly in a Negative Calm state. It appears withdrawn, listless, or indifferent — suggesting low welfare with suppressed activity.",
        welfareResultNA: "The animal is predominantly in a Negative Active state. It appears fearful, frustrated, or anxious — suggesting low welfare with heightened distress.",
        welfareResultMixed: "The animal shows a mixed affective state with no single dominant quadrant. Further observation is recommended to clarify the welfare status.",
        editIndicator: "Edit indicator name",
        downloadBtn: "📥 Download Results as JPEG",
        scatterPlotTitle: "QBA Behavioural Expression Map",
        scatterPlotXAxis: "Arousal: LOW (Calm) ← → HIGH (Energetic)",
        scatterPlotYAxis: "Valence: Negative ← → Positive",
        legendPC: "Positive Calm (PC)",
        legendPA: "Positive Active (PA)",
        legendNC: "Negative Calm (NC)",
        legendNA: "Negative Active (NA)",
        alertFillFields: "Please fill in Observer, Species, and Individual/Group ID before submitting.",
        alertDuration: "Please enter a valid observation duration.",
        alertExists: "An indicator with this name already exists!",
        confirmReset: "Are you sure you want to reset the form? All entered data will be cleared.",
        confirmRemove: "Remove \"{{name}}\" indicator?",
        promptName: "Enter the name of the custom indicator:",
        promptDef: "Enter a brief definition for this indicator:",
        lively: "Lively",
        livelyDef: "Full of life and energy; active and outgoing",
        playful: "Playful",
        playfulDef: "Energetic, bouncy, engaged in play behaviors",
        sociable: "Sociable",
        sociableDef: "Seeking companionship; friendly",
        curious: "Curious",
        curiousDef: "Actively exploring or investigating",
        excited: "Excited",
        excitedDef: "Very enthusiastic and eager",
        contentWord: "Content",
        contentWordDef: "In a state of peaceful happiness",
        calm: "Calm",
        calmDef: "Quiet, peaceful, settled demeanor",
        comfortable: "Comfortable",
        comfortableDef: "Physically relaxed and free from constraint",
        atEase: "At ease",
        atEaseDef: "Free from worry, pain, or constraint",
        relaxed: "Relaxed",
        relaxedDef: "Loose posture, smooth and unforced movement",
        tense: "Tense",
        tenseDef: "Rigid posture, abrupt or restrained movement",
        wary: "Wary",
        waryDef: "Feeling or showing caution about possible dangers or problems",
        withdrawn: "Withdrawn",
        withdrawnDef: "Not wanting to communicate with other individuals",
        listless: "Listless",
        listlessDef: "Lacking energy or enthusiasm",
        indifferent: "Indifferent",
        indifferentDef: "Having no particular interest or sympathy; unconcerned",
        frustrated: "Frustrated",
        frustratedDef: "Agitated, repetitive, or restless demeanour",
        irritable: "Irritable",
        irritableDef: "Having or showing a tendency to be easily annoyed or made angry",
        agitated: "Agitated",
        agitatedDef: "Feeling or appearing troubled or nervous",
        anxious: "Anxious",
        anxiousDef: "Experiencing worry, unease, or nervousness",
        fearful: "Fearful",
        fearfulDef: "Avoidance, freezing, or withdrawal",
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
        subtitle: "Skala penilaian: <strong>0 (Tidak terlihat)</strong> hingga <strong>10 (Sangat jelas terlihat)</strong>",
        observer: "Nama Pengamat",
        species: "Spesies",
        individualId: "ID Individu / Kelompok",
        period: "Periode Pengamatan",
        periodPlaceholder: "mis., Pagi, 09:00",
        duration: "Lama Pengamatan (menit)",
        durationSuggestion: "Rekomendasi: 2 menit",
        context: "Konteks Pengamatan",
        contextBaseline: "Kondisi Normal",
        contextFeeding: "Saat Pemberian Pakan",
        contextEnrichment: "Saat Pengayaan Lingkungan",
        contextVisitor: "Ada Pengunjung",
        contextTraining: "Saat Pelatihan",
        contextVeterinary: "Pemeriksaan Kesehatan",
        indicatorsTitle: "Indikator QBA",
        observerPlaceholder: "Ketik nama pengamat",
        speciesPlaceholder: "contoh: Singa, Gajah",
        idPlaceholder: "contoh: L-001",
        alertPeriod: "Mohon masukkan periode pengamatan.",
        durationPlaceholder: "contoh: 2",
        addCustom: "➕ Tambah Indikator Baru",
        notes: "Catatan Pengamat (tidak wajib)",
        notesPlaceholder: "Tuliskan catatan atau informasi tambahan di sini...",
        resetBtn: "Hapus Semua Isian",
        submitBtn: "Kirim Penilaian QBA",
        infoNote: "ℹ️ Skor QBA menggambarkan ekspresi perilaku secara keseluruhan, bukan perilaku tertentu. Perhatikan bahasa tubuh, cara bergerak, dan kesan umum dari hewan yang diamati.",
        scaleAbsent: "0 - Tidak terlihat",
        scaleModerate: "5 - Cukup terlihat",
        scaleStrong: "10 - Sangat jelas",
        customBadge: "Tambahan",
        removeBtn: "Hapus",
        summaryTitle: "✅ Ringkasan Penilaian",
        time: "Waktu",
        resultsTitle: "📊 Hasil Penilaian",
        welfareState: "Kondisi Kesejahteraan Utama",
        positiveWelfare: "Kesejahteraan Baik",
        moderateWelfare: "Kesejahteraan Campuran",
        welfareConcerns: "Perlu Perhatian",
        interpretationTitle: "Interpretasi",
        quadrantPC: "Positif Tenang (PC)",
        quadrantPA: "Positif Aktif (PA)",
        quadrantNC: "Negatif Tenang (NC)",
        quadrantNA: "Negatif Aktif (NA)",
        dominantQuadrant: "Kuadran Dominan",
        welfareResultPC: "Hewan menunjukkan kondisi Positif Tenang yang dominan. Terlihat santai, nyaman, dan tenteram — ini mengindikasikan kesejahteraan yang baik dalam keadaan tenang.",
        welfareResultPA: "Hewan menunjukkan kondisi Positif Aktif yang dominan. Terlihat bersemangat, penuh rasa ingin tahu, dan suka bermain — ini mengindikasikan kesejahteraan yang baik dengan keterlibatan aktif.",
        welfareResultNC: "Hewan menunjukkan kondisi Negatif Tenang yang dominan. Terlihat menarik diri, lesu, atau tidak responsif — ini menandakan kemungkinan kesejahteraan yang rendah dengan aktivitas yang minim.",
        welfareResultNA: "Hewan menunjukkan kondisi Negatif Aktif yang dominan. Terlihat takut, gelisah, atau cemas — ini menandakan kemungkinan kesejahteraan yang rendah dengan tingkat stres yang tinggi.",
        welfareResultMixed: "Hewan menunjukkan kondisi emosional yang beragam tanpa satu kuadran yang menonjol. Disarankan untuk melakukan pengamatan lanjutan guna memperjelas status kesejahteraannya.",
        editIndicator: "Ubah nama indikator",
        downloadBtn: "📥 Unduh Hasil (JPEG)",
        scatterPlotTitle: "Peta Ekspresi Perilaku QBA",
        scatterPlotXAxis: "Tingkat Aktivitas: RENDAH (Tenang) ← → TINGGI (Aktif)",
        scatterPlotYAxis: "Valensi: Negatif ← → Positif",
        legendPC: "Positif Tenang (PC)",
        legendPA: "Positif Aktif (PA)",
        legendNC: "Negatif Tenang (NC)",
        legendNA: "Negatif Aktif (NA)",
        alertFillFields: "Mohon lengkapi kolom Pengamat, Spesies, dan ID Individu/Kelompok sebelum mengirim.",
        alertDuration: "Mohon masukkan durasi pengamatan yang benar.",
        alertExists: "Indikator dengan nama ini sudah ada!",
        confirmReset: "Yakin ingin menghapus semua isian? Semua data yang sudah dimasukkan akan hilang.",
        confirmRemove: "Hapus indikator \"{{name}}\"?",
        promptName: "Masukkan nama indikator:",
        promptDef: "Masukkan penjelasan singkat untuk indikator ini:",
        lively: "Bersemangat",
        livelyDef: "Penuh energi dan kehidupan; aktif dan antusias",
        playful: "Suka Bermain",
        playfulDef: "Aktif bermain, lincah, dan terlihat menikmati aktivitas",
        sociable: "Mudah Bergaul",
        sociableDef: "Senang berinteraksi dan dekat dengan individu lain",
        curious: "Ingin Tahu",
        curiousDef: "Aktif menjelajahi atau menyelidiki lingkungan sekitar",
        excited: "Antusias",
        excitedDef: "Terlihat sangat bersemangat dan penuh gairah",
        contentWord: "Puas",
        contentWordDef: "Tampak tenang dan bahagia; dalam kondisi yang menyenangkan",
        calm: "Tenang",
        calmDef: "Sikap damai, tidak terganggu, dan stabil",
        comfortable: "Nyaman",
        comfortableDef: "Tubuh rileks dan tidak menunjukkan tanda-tanda ketidaknyamanan",
        atEase: "Tenteram",
        atEaseDef: "Bebas dari rasa khawatir, sakit, atau tekanan",
        relaxed: "Santai",
        relaxedDef: "Postur tubuh longgar, gerakan halus dan alami",
        tense: "Tegang",
        tenseDef: "Postur kaku, gerakan tiba-tiba atau terlihat menahan diri",
        wary: "Siaga",
        waryDef: "Tampak berhati-hati dan waspada terhadap potensi bahaya",
        withdrawn: "Menarik Diri",
        withdrawnDef: "Menjauh dari individu lain dan enggan berinteraksi",
        listless: "Lesu",
        listlessDef: "Kurang bersemangat dan tidak menunjukkan minat terhadap lingkungan",
        indifferent: "Acuh",
        indifferentDef: "Tidak menunjukkan ketertarikan atau respons terhadap sekitarnya",
        frustrated: "Frustrasi",
        frustratedDef: "Terlihat gelisah, melakukan gerakan berulang, atau tidak tenang",
        irritable: "Mudah Tersinggung",
        irritableDef: "Mudah terganggu dan menunjukkan reaksi marah atau jengkel",
        agitated: "Gelisah",
        agitatedDef: "Tampak resah, tidak bisa diam, dan terlihat terganggu",
        anxious: "Cemas",
        anxiousDef: "Menunjukkan tanda-tanda kekhawatiran atau ketidaktenangan",
        fearful: "Takut",
        fearfulDef: "Menghindari, membeku, atau berusaha menyingkir dari situasi",
        interpretationPositive: "Hewan menampilkan ekspresi perilaku yang didominasi sifat positif. Skor tinggi pada perilaku santai, ingin tahu, bermain, atau tenang dengan indikator negatif yang rendah menandakan kondisi kesejahteraan yang baik.",
        interpretationModerate: "Hewan menunjukkan campuran perilaku positif dan negatif. Perlu mempertimbangkan konteks situasinya dan terus memantau perkembangan. Beberapa tingkat ketegangan atau kewaspadaan bisa saja wajar tergantung kondisi.",
        interpretationConcerns: "Hewan menunjukkan pola perilaku yang perlu diperhatikan, dengan indikator negatif yang cukup tinggi atau ekspresi positif yang rendah. Disarankan untuk melakukan penilaian lebih lanjut dan kemungkinan intervensi.",
        whatIsQBA: "Apa itu QBA?",
        qbaIntro: "Qualitative Behaviour Assessment (QBA) atau Penilaian Perilaku Kualitatif adalah metode untuk mengevaluasi kesejahteraan hewan berdasarkan ekspresi perilaku secara keseluruhan (misalnya: santai, tegang, ingin tahu, takut), bukan dengan menghitung perilaku tertentu. QBA memadukan pengamatan terhadap postur tubuh, cara bergerak, daya tanggap, dan interaksi untuk memahami kondisi emosional hewan sebagaimana dilihat oleh pengamat terlatih.",
        qbaImportanceTitle: "Mengapa QBA Penting dalam Model Lima Domain?",
        qbaImportance: "Model Lima Domain menghubungkan kondisi fisik (Nutrisi, Lingkungan, Kesehatan, Perilaku) dengan Kondisi Mental hewan (Domain ke-5). QBA sangat berharga karena langsung memberikan informasi tentang domain mental/afektif ini, menangkap pengalaman positif maupun negatif yang mungkin tidak terdeteksi hanya melalui pengukuran fisik atau kuantitatif.",
        qbaHowTitle: "Bagaimana Cara Kerja QBA?",
        qbaStep1: "Pengamat mengamati hewan atau kelompok hewan selama jangka waktu yang ditentukan.",
        qbaStep2: "Setelah pengamatan, pengamat memberikan skor pada setiap istilah deskriptif (skala 0–10) berdasarkan seberapa kuat ekspresi perilaku tersebut terlihat.",
        qbaStep3: "Profil yang dihasilkan dapat digunakan untuk membandingkan kesejahteraan antar waktu, antar individu, atau antar kondisi pengelolaan.",
        qbaEffective: "QBA paling efektif jika digunakan bersamaan dengan indikator perilaku dan kesehatan kuantitatif, sehingga menghasilkan penilaian kesejahteraan yang lebih menyeluruh.",
        qbaSummary: "QBA adalah metode terstruktur untuk menilai ekspresi emosional hewan, dan merupakan alat penting dalam mengevaluasi domain kondisi mental pada kerangka kesejahteraan hewan Lima Domain."
    }
};

const descriptorList = [
    { name: "Lively", def: "Full of life and energy; active and outgoing", type: "default", quadrant: "PA" },
    { name: "Playful", def: "Energetic, bouncy, engaged in play behaviors", type: "default", quadrant: "PA" },
    { name: "Sociable", def: "Seeking companionship; friendly", type: "default", quadrant: "PA" },
    { name: "Curious", def: "Actively exploring or investigating", type: "default", quadrant: "PA" },
    { name: "Excited", def: "Very enthusiastic and eager", type: "default", quadrant: "PA" },
    { name: "Content", def: "In a state of peaceful happiness", type: "default", quadrant: "PC" },
    { name: "Calm", def: "Quiet, peaceful, settled demeanor", type: "default", quadrant: "PC" },
    { name: "Comfortable", def: "Physically relaxed and free from constraint", type: "default", quadrant: "PC" },
    { name: "At ease", def: "Free from worry, pain, or constraint", type: "default", quadrant: "PC" },
    { name: "Relaxed", def: "Loose posture, smooth and unforced movement", type: "default", quadrant: "PC" },
    { name: "Tense", def: "Rigid posture, abrupt or restrained movement", type: "default", quadrant: "NC" },
    { name: "Wary", def: "Feeling or showing caution about possible dangers or problems", type: "default", quadrant: "NC" },
    { name: "Withdrawn", def: "Not wanting to communicate with other individuals", type: "default", quadrant: "NC" },
    { name: "Listless", def: "Lacking energy or enthusiasm", type: "default", quadrant: "NC" },
    { name: "Indifferent", def: "Having no particular interest or sympathy; unconcerned", type: "default", quadrant: "NC" },
    { name: "Frustrated", def: "Agitated, repetitive, or restless demeanour", type: "default", quadrant: "NA" },
    { name: "Irritable", def: "Having or showing a tendency to be easily annoyed or made angry", type: "default", quadrant: "NA" },
    { name: "Agitated", def: "Feeling or appearing troubled or nervous", type: "default", quadrant: "NA" },
    { name: "Anxious", def: "Experiencing worry, unease, or nervousness", type: "default", quadrant: "NA" },
    { name: "Fearful", def: "Avoidance, freezing, or withdrawal", type: "default", quadrant: "NA" }
];

// Fisher-Yates shuffle to randomize descriptor order on each page load
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
shuffleArray(descriptorList);

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
    document.getElementById('main-title').innerHTML = trans.title;
    document.querySelector('.subtitle').innerHTML = trans.subtitle;

    // Update labels
    document.querySelectorAll('label')[0].textContent = trans.observer;
    document.querySelectorAll('label')[1].textContent = trans.species;
    document.querySelectorAll('label')[2].textContent = trans.individualId;
    document.querySelectorAll('label')[3].textContent = trans.period;
    document.querySelectorAll('label')[4].textContent = trans.duration;
    document.getElementById('durationSuggestion').textContent = trans.durationSuggestion;
    document.querySelectorAll('label')[5].textContent = trans.context;

    // Update placeholders
    document.getElementById('observer').placeholder = trans.observerPlaceholder;
    document.getElementById('species').placeholder = trans.speciesPlaceholder;
    document.getElementById('animalId').placeholder = trans.idPlaceholder;
    document.getElementById('period').placeholder = trans.periodPlaceholder;
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
    document.querySelectorAll('label')[6].textContent = trans.notes;
    document.getElementById('notes').placeholder = trans.notesPlaceholder;

    // Update buttons
    document.querySelectorAll('.actions button')[0].textContent = trans.resetBtn;
    document.querySelectorAll('.actions button')[1].textContent = trans.submitBtn;

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
    if (lowerName === 'lively') return t('lively');
    if (lowerName === 'playful') return t('playful');
    if (lowerName === 'sociable') return t('sociable');
    if (lowerName === 'curious') return t('curious');
    if (lowerName === 'excited') return t('excited');
    if (lowerName === 'content') return t('contentWord');
    if (lowerName === 'calm') return t('calm');
    if (lowerName === 'comfortable') return t('comfortable');
    if (lowerName === 'at ease') return t('atEase');
    if (lowerName === 'relaxed') return t('relaxed');
    if (lowerName === 'tense') return t('tense');
    if (lowerName === 'wary') return t('wary');
    if (lowerName === 'withdrawn') return t('withdrawn');
    if (lowerName === 'listless') return t('listless');
    if (lowerName === 'indifferent') return t('indifferent');
    if (lowerName === 'frustrated') return t('frustrated');
    if (lowerName === 'irritable') return t('irritable');
    if (lowerName === 'agitated') return t('agitated');
    if (lowerName === 'anxious') return t('anxious');
    if (lowerName === 'fearful') return t('fearful');
    return baseName;
}

function getDescriptorDef(baseName) {
    const lowerName = baseName.toLowerCase();
    if (lowerName === 'lively') return t('livelyDef');
    if (lowerName === 'playful') return t('playfulDef');
    if (lowerName === 'sociable') return t('sociableDef');
    if (lowerName === 'curious') return t('curiousDef');
    if (lowerName === 'excited') return t('excitedDef');
    if (lowerName === 'content') return t('contentWordDef');
    if (lowerName === 'calm') return t('calmDef');
    if (lowerName === 'comfortable') return t('comfortableDef');
    if (lowerName === 'at ease') return t('atEaseDef');
    if (lowerName === 'relaxed') return t('relaxedDef');
    if (lowerName === 'tense') return t('tenseDef');
    if (lowerName === 'wary') return t('waryDef');
    if (lowerName === 'withdrawn') return t('withdrawnDef');
    if (lowerName === 'listless') return t('listlessDef');
    if (lowerName === 'indifferent') return t('indifferentDef');
    if (lowerName === 'frustrated') return t('frustratedDef');
    if (lowerName === 'irritable') return t('irritableDef');
    if (lowerName === 'agitated') return t('agitatedDef');
    if (lowerName === 'anxious') return t('anxiousDef');
    if (lowerName === 'fearful') return t('fearfulDef');
    return baseName;
}

function renderDescriptors() {
    const container = document.getElementById("descriptors");
    // Preserve current slider values before re-rendering
    const savedValues = {};
    descriptorList.forEach(d => {
        const el = document.getElementById(d.name);
        if (el) savedValues[d.name] = el.value;
    });
    container.innerHTML = '';

    descriptorList.forEach((d, index) => {
        const div = document.createElement("div");
        div.className = "descriptor";

        const displayName = d.type === "default" ? getDescriptorName(d.name) : d.name;
        const displayDef = d.type === "default" ? getDescriptorDef(d.name) : d.def;
        const savedVal = savedValues[d.name] || '0';

        div.innerHTML = `
        <div class="descriptor-header">
          <span class="descriptor-name" id="name-display-${index}">${displayName}</span>
          <div style="display: flex; align-items: center; gap: 8px;">
            <button class="edit-indicator-btn" onclick="editIndicatorName(${index})" title="${t('editIndicator')}">✏️</button>
            <span class="descriptor-value" id="${d.name}-value">${savedVal}</span>
          </div>
        </div>
        <div class="descriptor-def" id="def-display-${index}">${displayDef}</div>
        <input type="range" min="0" max="10" step="1" value="${savedVal}" id="${d.name}" 
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

function editIndicatorName(index) {
    const d = descriptorList[index];
    const currentName = d.type === "default" ? getDescriptorName(d.name) : d.name;
    const currentDef = d.type === "default" ? getDescriptorDef(d.name) : d.def;
    const newName = prompt(t('promptName'), currentName);
    if (!newName || !newName.trim() || newName.trim() === currentName) return;

    // Save current slider value
    const slider = document.getElementById(d.name);
    const currentVal = slider ? slider.value : '0';

    // Update the descriptor - mark as edited so it uses custom name
    const oldName = d.name;
    d.name = newName.trim();
    d.type = "edited";

    // Re-render and restore slider value
    renderDescriptors();
    const newSlider = document.getElementById(d.name);
    if (newSlider) {
        newSlider.value = currentVal;
        updateValue(d.name);
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
        document.getElementById('period').value = '';
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
    const observer = document.getElementById('observer').value.trim();
    const species = document.getElementById('species').value.trim();
    const animalId = document.getElementById('animalId').value.trim();
    const period = document.getElementById('period').value.trim();
    const duration = document.getElementById('duration').value;
    const context = document.getElementById('context').value;
    const notes = document.getElementById('notes').value.trim();

    if (!observer || !species || !animalId) {
        alert(t('alertFillFields'));
        return;
    }

    if (!period) {
        alert(t('alertPeriod'));
        return;
    }

    if (!duration || duration <= 0) {
        alert(t('alertDuration'));
        return;
    }

    const data = {
        metadata: {
            observer,
            species,
            animalId,
            period,
            duration: parseInt(duration),
            context,
            notes,
            timestamp: new Date().toLocaleString()
        },
        scores: {}
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
    summaryHTML += `<div class="summary-item"><strong>${t('time')}:</strong> ${data.metadata.timestamp}</div>`;
    summaryHTML += `<div class="summary-item"><strong>${t('observer')}:</strong> ${data.metadata.observer}</div>`;
    summaryHTML += `<div class="summary-item"><strong>${t('species')}:</strong> ${data.metadata.species}</div>`;
    summaryHTML += `<div class="summary-item"><strong>${t('individualId')}:</strong> ${data.metadata.animalId}</div>`;
    summaryHTML += `<div class="summary-item"><strong>${t('period')}:</strong> ${data.metadata.period}</div>`;
    summaryHTML += `<div class="summary-item"><strong>${t('duration')}:</strong> ${data.metadata.duration} ${currentLanguage === 'id' ? 'menit' : 'minutes'}</div>`;
    summaryHTML += `<div class="summary-item"><strong>${t('context')}:</strong> ${data.metadata.context}</div>`;
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
    // Calculate quadrant averages using the quadrant property on each descriptor
    const quadrantScores = { PC: [], PA: [], NC: [], NA: [] };
    descriptorList.forEach(d => {
        if (d.quadrant && data.scores[d.name] !== undefined) {
            quadrantScores[d.quadrant].push(data.scores[d.name]);
        }
    });

    const calcAvg = (arr) => arr.length > 0 ? (arr.reduce((a, b) => a + b, 0) / arr.length).toFixed(1) : '0.0';
    const avgPC = calcAvg(quadrantScores.PC);
    const avgPA = calcAvg(quadrantScores.PA);
    const avgNC = calcAvg(quadrantScores.NC);
    const avgNA = calcAvg(quadrantScores.NA);

    // Determine the dominant quadrant (highest average score)
    const quadrantAverages = [
        { key: 'PC', label: t('quadrantPC'), avg: parseFloat(avgPC), color: '#10b981', emoji: '🟢' },
        { key: 'PA', label: t('quadrantPA'), avg: parseFloat(avgPA), color: '#3b82f6', emoji: '🔵' },
        { key: 'NC', label: t('quadrantNC'), avg: parseFloat(avgNC), color: '#f59e0b', emoji: '🟡' },
        { key: 'NA', label: t('quadrantNA'), avg: parseFloat(avgNA), color: '#ef4444', emoji: '🔴' }
    ];

    // Sort by average descending to find dominant
    const sorted = [...quadrantAverages].sort((a, b) => b.avg - a.avg);
    const dominant = sorted[0];
    const isDominantClear = dominant.avg > 0 && (sorted.length < 2 || dominant.avg > sorted[1].avg);

    // Welfare state is determined by which quadrant scores highest
    let interpretation = '';
    let interpretationColor = '';
    let detailedInterpretation = '';

    if (!isDominantClear || dominant.avg === 0) {
        interpretation = t('moderateWelfare');
        interpretationColor = '#6b7280';
        detailedInterpretation = t('welfareResultMixed');
    } else if (dominant.key === 'PC') {
        interpretation = t('positiveWelfare') + ' — ' + t('quadrantPC');
        interpretationColor = '#10b981';
        detailedInterpretation = t('welfareResultPC');
    } else if (dominant.key === 'PA') {
        interpretation = t('positiveWelfare') + ' — ' + t('quadrantPA');
        interpretationColor = '#3b82f6';
        detailedInterpretation = t('welfareResultPA');
    } else if (dominant.key === 'NC') {
        interpretation = t('welfareConcerns') + ' — ' + t('quadrantNC');
        interpretationColor = '#f59e0b';
        detailedInterpretation = t('welfareResultNC');
    } else if (dominant.key === 'NA') {
        interpretation = t('welfareConcerns') + ' — ' + t('quadrantNA');
        interpretationColor = '#ef4444';
        detailedInterpretation = t('welfareResultNA');
    }

    // Build results HTML
    const resultsDiv = document.getElementById('results');
    let resultsHTML = `<h3>${t('resultsTitle')}</h3>`;

    // Welfare state banner based on dominant quadrant
    resultsHTML += `
      <div class="welfare-score">
        <div class="welfare-interpretation" style="color: ${interpretationColor}; font-size: 1.3rem; font-weight: 700;">${interpretation}</div>
        <div style="color: #718096; font-size: 0.9rem; margin-top: 4px;">${t('welfareState')}</div>
      </div>
    `;

    // Quadrant averages grid
    resultsHTML += '<div class="quadrant-grid">';
    quadrantAverages.forEach(q => {
        const isHighest = isDominantClear && q.key === dominant.key;
        resultsHTML += `
          <div class="quadrant-card ${isHighest ? 'quadrant-dominant' : ''}" style="border-left: 4px solid ${q.color};">
            <div class="quadrant-label">${q.emoji} ${q.label}</div>
            <div class="quadrant-avg" style="color: ${q.color};">${q.key === 'PC' ? avgPC : q.key === 'PA' ? avgPA : q.key === 'NC' ? avgNC : avgNA}/10</div>
            ${isHighest ? '<div class="quadrant-badge">★ ' + t('dominantQuadrant') + '</div>' : ''}
          </div>
        `;
    });
    resultsHTML += '</div>';

    resultsHTML += '<div class="score-bars">';

    // Add bars for each descriptor with scores > 0, grouped by quadrant
    const quadrantOrder = ['PC', 'PA', 'NC', 'NA'];
    const quadrantColors = { PC: '#10b981', PA: '#3b82f6', NC: '#f59e0b', NA: '#ef4444' };
    quadrantOrder.forEach(qKey => {
        const qDescriptors = descriptorList.filter(d => d.quadrant === qKey);
        qDescriptors.forEach(d => {
            const score = data.scores[d.name];
            if (score > 0) {
                const percentage = (score / 10) * 100;
                const barColor = quadrantColors[qKey];
                resultsHTML += `
              <div class="score-bar-item">
                <div class="score-bar-label">
                  <span><strong>${d.name}</strong> <small style="color:${barColor};">(${qKey})</small></span>
                  <span>${score}/10</span>
                </div>
                <div class="score-bar-bg">
                  <div class="score-bar-fill" style="width: ${percentage}%; background: ${barColor};">${score}</div>
                </div>
              </div>
            `;
            }
        });
    });

    resultsHTML += '</div>';

    resultsHTML += `
      <div class="interpretation-text">
        <h4>${t('interpretationTitle')}</h4>
        <p style="margin-top: 8px;">${detailedInterpretation}</p>
      </div>
    `;

    // Add scatter plot
    resultsHTML += `
      <div class="scatter-plot-container">
        <h4>${t('scatterPlotTitle')}</h4>
        <canvas id="scatterPlot"></canvas>
        <div class="plot-legend">
          <div class="legend-item">
            <div class="legend-dot" style="background: #10b981;"></div>
            <span>${t('legendPC')}</span>
          </div>
          <div class="legend-item">
            <div class="legend-dot" style="background: #3b82f6;"></div>
            <span>${t('legendPA')}</span>
          </div>
          <div class="legend-item">
            <div class="legend-dot" style="background: #f59e0b;"></div>
            <span>${t('legendNC')}</span>
          </div>
          <div class="legend-item">
            <div class="legend-dot" style="background: #ef4444;"></div>
            <span>${t('legendNA')}</span>
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
        interpretation,
        dominant: isDominantClear ? dominant.key : 'Mixed',
        avgPC, avgPA, avgNC, avgNA
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

    // Define indicator positions based on quadrant mapping
    // X-axis: Arousal (LOW/Calm left, HIGH/Energetic right), Y-axis: Valence (Negative bottom, Positive top)
    const indicatorPositions = {
        // PC = Positive Calm (top-left)
        'Relaxed': { x: -0.7, y: 0.7, quadrant: 'PC' },
        'At ease': { x: -0.6, y: 0.6, quadrant: 'PC' },
        'Content': { x: -0.5, y: 0.5, quadrant: 'PC' },
        'Comfortable': { x: -0.3, y: 0.3, quadrant: 'PC' },
        'Calm': { x: -0.4, y: 0.4, quadrant: 'PC' },
        
        // PA = Positive Active (top-right)
        'Lively': { x: 0.5, y: 0.6, quadrant: 'PA' },
        'Curious': { x: 0.6, y: 0.4, quadrant: 'PA' },
        'Sociable': { x: 0.4, y: 0.5, quadrant: 'PA' },
        'Playful': { x: 0.7, y: 0.7, quadrant: 'PA' },
        'Excited': { x: 0.8, y: 0.8, quadrant: 'PA' },
        
        // NC = Negative Calm (bottom-left)
        'Tense': { x: -0.5, y: -0.4, quadrant: 'NC' },
        'Withdrawn': { x: -0.4, y: -0.6, quadrant: 'NC' },
        'Wary': { x: -0.6, y: -0.5, quadrant: 'NC' },
        'Indifferent': { x: -0.2, y: -0.8, quadrant: 'NC' },
        'Listless': { x: -0.3, y: -0.7, quadrant: 'NC' },
        
        // NA = Negative Active (bottom-right)
        'Fearful': { x: 0.9, y: -0.8, quadrant: 'NA' },
        'Irritable': { x: 0.6, y: -0.5, quadrant: 'NA' },
        'Frustrated': { x: 0.5, y: -0.4, quadrant: 'NA' },
        'Agitated': { x: 0.8, y: -0.7, quadrant: 'NA' },
        'Anxious': { x: 0.7, y: -0.6, quadrant: 'NA' }
    };

    const quadrantColors = { PC: '#10b981', PA: '#3b82f6', NC: '#f59e0b', NA: '#ef4444' };

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

    // Draw quadrant labels with average scores
    const results = window.currentQBAResults || {};
    const avgLabels = {
        PC: results.avgPC || '0.0',
        PA: results.avgPA || '0.0',
        NC: results.avgNC || '0.0',
        NA: results.avgNA || '0.0'
    };

    ctx.textAlign = 'center';

    // PC (top-left)
    ctx.font = 'bold 14px Arial';
    ctx.globalAlpha = 0.3;
    ctx.fillStyle = '#10b981';
    ctx.fillText('PC', centerX - radius * 0.5, centerY - radius * 0.85);
    ctx.globalAlpha = 1;
    ctx.font = 'bold 16px Arial';
    ctx.fillStyle = '#10b981';
    ctx.fillText(avgLabels.PC + '/10', centerX - radius * 0.5, centerY - radius * 0.85 + 18);

    // PA (top-right)
    ctx.font = 'bold 14px Arial';
    ctx.globalAlpha = 0.3;
    ctx.fillStyle = '#3b82f6';
    ctx.fillText('PA', centerX + radius * 0.5, centerY - radius * 0.85);
    ctx.globalAlpha = 1;
    ctx.font = 'bold 16px Arial';
    ctx.fillStyle = '#3b82f6';
    ctx.fillText(avgLabels.PA + '/10', centerX + radius * 0.5, centerY - radius * 0.85 + 18);

    // NC (bottom-left)
    ctx.font = 'bold 14px Arial';
    ctx.globalAlpha = 0.3;
    ctx.fillStyle = '#f59e0b';
    ctx.fillText('NC', centerX - radius * 0.5, centerY + radius * 0.9);
    ctx.globalAlpha = 1;
    ctx.font = 'bold 16px Arial';
    ctx.fillStyle = '#f59e0b';
    ctx.fillText(avgLabels.NC + '/10', centerX - radius * 0.5, centerY + radius * 0.9 + 18);

    // NA (bottom-right)
    ctx.font = 'bold 14px Arial';
    ctx.globalAlpha = 0.3;
    ctx.fillStyle = '#ef4444';
    ctx.fillText('NA', centerX + radius * 0.5, centerY + radius * 0.9);
    ctx.globalAlpha = 1;
    ctx.font = 'bold 16px Arial';
    ctx.fillStyle = '#ef4444';
    ctx.fillText(avgLabels.NA + '/10', centerX + radius * 0.5, centerY + radius * 0.9 + 18);

    ctx.globalAlpha = 1;

    // Plot data points
    Object.keys(data.scores).forEach(name => {
        const score = data.scores[name];
        if (score > 0 && indicatorPositions[name]) {
            const pos = indicatorPositions[name];
            const x = centerX + pos.x * radius;
            const y = centerY - pos.y * radius; // Invert Y for canvas coordinate

            // Size based on score
            const dotSize = 3 + (score / 10) * 7;

            // Color based on quadrant
            const color = quadrantColors[pos.quadrant] || '#6b7280';

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
}

// Redraw plot on window resize
window.addEventListener('resize', () => {
    if (window.currentQBAData) {
        drawScatterPlot(window.currentQBAData);
    }
});

function downloadResults() {
    const captureArea = document.getElementById('capture-area');
    const downloadBtn = document.querySelector('.download-btn');
    
    // Hide download button temporarily
    if (downloadBtn) downloadBtn.style.display = 'none';

    html2canvas(captureArea, {
        scale: 2,
        backgroundColor: '#f8fafc'
    }).then(canvas => {
        // Show download button again
        if (downloadBtn) downloadBtn.style.display = 'block';

        const imgData = canvas.toDataURL('image/jpeg', 0.9);
        const link = document.createElement('a');
        link.download = `QBA_${window.currentQBAData.species}_${window.currentQBAData.animalId}_${new Date().toISOString().split('T')[0]}.jpeg`;
        link.href = imgData;
        link.click();
    }).catch(err => {
        console.error('Error generating JPEG:', err);
        if (downloadBtn) downloadBtn.style.display = 'block';
        alert('Failed to generate image. Please try again.');
    });
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
