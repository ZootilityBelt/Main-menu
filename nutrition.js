function calculateNutrients() {
  const prey = document.getElementById("prey").value;
  const amount = parseFloat(document.getElementById("amount").value);

  if (!amount || amount <= 0) {
    alert("Please enter a valid amount.");
    return;
  }

  const data = {
    rat:     { protein: 16, fat: 10, ca: 240, p: 200 },
    mouse:   { protein: 18, fat: 8,  ca: 200, p: 180 },
    chicken: { protein: 20, fat: 5,  ca: 12,  p: 180 },
    fish:    { protein: 19, fat: 6,  ca: 20,  p: 220 }
  };

  const item = data[prey];

  const protein = item.protein * amount / 100;
  const fat = item.fat * amount / 100;
  const calcium = item.ca * amount / 100;
  const phosphorus = item.p * amount / 100;
  const cap = (calcium / phosphorus).toFixed(2);

  document.getElementById("protein").innerText = protein.toFixed(1);
  document.getElementById("fat").innerText = fat.toFixed(1);
  document.getElementById("calcium").innerText = calcium.toFixed(0);
  document.getElementById("phosphorus").innerText = phosphorus.toFixed(0);
  document.getElementById("cap").innerText = cap;

  document.getElementById("nutrientResults").style.display = "block";
}
