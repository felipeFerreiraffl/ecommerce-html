// ========== Seleção de cores ==========
const colorCircle = document.querySelectorAll(".color");

colorCircle.forEach((circle) => {
  // O primeiro círculo já fica ativado
  colorCircle.item(0).classList.add("active");

  circle.addEventListener("click", () => {
    // Remove a classe quando clica em outro círculo
    colorCircle.forEach((c) => c.classList.remove("active"));

    // Adiciona o estilo da borda
    circle.classList.add("active");
  });
});
