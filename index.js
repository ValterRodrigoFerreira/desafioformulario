const form = document.getElementById("form");
const $inputNomeCaracter = document.querySelector(".inputnamejs");
const $inputEmail = document.querySelector(".inputemailjs");
const $inputSenha = document.querySelector(".inputsenhajs");
const $inputConfirmarSenha = document.querySelector(".inputconfirmarsenhajs");
const $checkbox = document.querySelector(".checkboxjs");
const $cadastrarButton = document.querySelector(".cadastrarbutton");
const $mensagemDeErro = document.querySelector(".menssagemerro");

$cadastrarButton.addEventListener("submit", (e) => {
  e.preventDefault();

const nameValue = $inputNomeCaracter.value;
const emailValue = $inputEmail.value;

if (nameValue === "" || emailValue === ""){
  $mensagemDeErro.textContent = "Preencher Campos"
}



  /* checandoOsCampos();
});

function checandoOsCampos() {
  const inputNomeCaracterValue = $inputNomeCaracter.value.trim();
  const inputEmailValue = $inputEmail.value.trim();
  const inputSenhaValue = $inputSenha.value.trim();
  const inputConfirmarSenhaValue = $inputConfirmarSenha.value.trim();

  if (inputNomeCaracterValue === "") {
    errorPreencherCampo(inputNomeCa)
  }
} */

/* $cadastrarButton.addEventListener("click", function() {
  alertaCampoNome()

  const campoNome = $inputNomeCaracter.value;

  if (campoNome === ''){
    $mensagemDeErro.textContent = "Preencher todos os campos"
  }
}

/* 
function verificaNomeCaracter() {
  const $inputNomeCaracter = $inputNomeCaracter.value;

  if ($inputNomeCaracter === "") {
    alertaCampoNome($inputNomeCaracter, "Campor de nome é obrigatório");
  }
}

function alertaCampoNome() */
