function increaseSalary(salaries, percentage) {
  if (!Array.isArray(salaries) || typeof percentage !== "number" || isNaN(percentage)) {
    throw new Error("eoare");
  }

  return salaries.map(s => s + s * percentage / 100);
}

try {
  const rezultat = increaseSalary([3000, 4000, 5000], 10);
  console.log("Salarii marite:", rezultat);
} catch (err) {
  console.warn("Eroare:", err.message);
}
