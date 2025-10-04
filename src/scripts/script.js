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

// ========== API de CEP ==========
const cep = document.getElementById("cep");
const street = document.getElementById("street");
const state = document.getElementById("state");
const neighborhood = document.getElementById("neighborhood");

// Altera o valor dos campos automaticamente
cep.onchange = (el) => {
  fetch(`https://viacep.com.br/ws/${el.target.value}/json/`)
    .then((res) => res.json())
    .then((data) => {
      setTimeout(() => {
        street.value = data.logradouro;
        state.value = data.estado;
        neighborhood.value = data.bairro;
      }, 1000);
    })
    .catch((err) => {
      alert(`Erro ao acessar dados do CEP: ${err.message}`);

      street.value = "";
      state.value = "";
      neighborhood.value = "";
    });
};
