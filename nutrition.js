function calculateNutrition() {

  /* ==============================
     USER INPUT (weekly menu)
     ============================== */

  let totalGrams = 0;

  document.querySelectorAll(".weekIntake").forEach(input => {
    totalGrams += parseFloat(input.value) || 0;
  });

  if (totalGrams <= 0) {
    alert("Please enter at least one weekly food amount.");
    return;
  }

  /* ==============================
     NUTRIENT CONSTANTS
     (whole-prey averages)
     ============================== */

  const ENERGY_PER_GRAM = 2.0;      // kcal/g
  const PROTEIN_PER_GRAM = 0.22;    // 22%
  const FAT_PER_GRAM = 0.08;        // 8%
  const CALCIUM_PER_GRAM = 6.25;    // mg/g
  const PHOSPHORUS_PER_GRAM = 5.0;  // mg/g

  /* ==============================
     CALCULATIONS
     ============================== */

  const energyWeek = totalGrams * ENERGY_PER_GRAM;
  const proteinWeek = totalGrams * PROTEIN_PER_GRAM;
  const fatWeek = totalGrams * FAT_PER_GRAM;
  const calciumWeek = totalGrams * CALCIUM_PER_GRAM;
  const phosphorusWeek = totalGrams * PHOSPHORUS_PER_GRAM;

  const caPRatio = calciumWeek / phosphorusWeek;

  /* ==============================
     DISPLAY RESULTS
     ============================== */

  document.getElementById("energy").innerText =
    energyWeek.toFixed(0) + " kcal / week";

  document.getElementById("protein").innerText =
    proteinWeek.toFixed(0) + " g";

  document.getElementById("fat").innerText =
    fatWeek.toFixed(0) + " g";

  document.getElementById("calcium").innerText =
    calciumWeek.toFixed(0) + " mg";

  document.getElementById("phosphorus").innerText =
    phosphorusWeek.toFixed(0) + " mg";

  document.getElementById("capRatio").innerText =
    caPRatio.toFixed(2) + " : 1";

  /* ==============================
     Ca:P EVALUATION
     ============================== */

  let note = "";

  if (caPRatio >= 1.0 && caPRatio <= 2.0) {
    note = "✅ Ca:P ratio is within recommended range for Komodo dragons.";
  } else {
    note = "⚠️ Ca:P ratio is outside recommended range (target 1–2 : 1).";
  }

  document.getElementById("capNote").innerText = note;

  /* ==============================
     SHOW TABLE
     ============================== */

  document.getElementById("nutrientTable").style.display = "table";
}
