function calculateNutrition() {

  const prey = document.getElementById("prey").value;
  const weekInputs = document.querySelectorAll(".weekIntake");

  let totalIntake = 0;
  weekInputs.forEach(input => {
    totalIntake += Number(input.value) || 0;
  });

  if (totalIntake <= 0) {
    alert("Please enter prey amounts for at least one week.");
    return;
  }

  // Approximate nutrient values per gram (whole prey, incl. bone)
  const nutrientData = {
    rat:     { protein: 0.18, fat: 0.15, calcium: 15, phosphorus: 20 },
    chicken: { protein: 0.20, fat: 0.10, calcium: 12, phosphorus: 18 },
    goat:    { protein: 0.22, fat: 0.08, calcium: 25, phosphorus: 20 },
    deer:    { protein: 0.23, fat: 0.06, calcium: 28, phosphorus: 22 }
  };

  const n = nutrientData[prey];

  const protein = totalIntake * n.protein;
  const fat = totalIntake * n.fat;
  const calcium = totalIntake * n.calcium;
  const phosphorus = totalIntake * n.phosphorus;
  const capRatio = calcium / phosphorus;

  document.getElementById("protein").innerText = protein.toFixed(0) + " g";
  document.getElementById("fat").innerText = fat.toFixed(0) + " g";
  document.getElementById("calcium").innerText = calcium.toFixed(0) + " mg";
  document.getElementById("phosphorus").innerText = phosphorus.toFixed(0) + " mg";
  document.getElementById("capRatio").innerText = capRatio.toFixed(2) + " : 1";

  let note;
  if (capRatio < 1.2) {
    note = "⚠️ Ca:P ratio is LOW — consider increasing bone or calcium-rich prey.";
  } else if (capRatio > 2.5) {
    note = "ℹ️ Ca:P ratio is HIGH — monitor mineral balance.";
  } else {
    note = "✅ Ca:P ratio is within recommended range for Komodo dragons.";
  }

  document.getElementById("capNote").innerText = note;
  document.getElementById("resultsSection").style.display = "block";
}
