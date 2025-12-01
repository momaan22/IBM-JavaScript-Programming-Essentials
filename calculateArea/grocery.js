function groceryTracker() {
    const g1 = Number(document.getElementById("grocery1").value);
    const g2 = Number(document.getElementById("grocery2").value);
    const g3 = Number(document.getElementById("grocery3").value);
  
    const total = (g1 || 0) + (g2 || 0) + (g3 || 0);
  
    document.getElementById("total").innerText =
      "Total grocery amount: " + total;
  }
  