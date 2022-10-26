const form = document.getElementById("form");
const nome = document.getElementById("nome");

// let cep;
// let logradouro;
// let complemento;
// let bairro;
// let localidade;
// let uf;
// let unidade;
// let ibge;
// let gia;

function getValueCpf(input) {
  const cpf = document.getElementById("cpf");
  let isValidCpf = validarCPF(input.value);
  if (isValidCpf) {
    setSuccessFor(cpf);
  } else {
    setErrorFor(cpf, "CPF inválido");
  }
  const cpfMascarado = CpfMask(input.value);
  //   console.log(cpfMascarado);
}

function maskCpf(text) {
  let maskedText = CpfMask(text.value);
  document.getElementById("cpf").value = maskedText;
  //   console.log(cpf.value);
  //   cpf.value = CpfMask(text.value);
}

function getValueNome(input) {
  const nome = document.getElementById("nome");
  let isValidNome = validarNome(input.value);
  if (isValidNome) {
    setSuccessFor(nome);
  } else {
    setErrorFor(nome, "Nome inválido");
  }
}

function validarNome(nome) {
  if (nome === "") {
    return false;
  } else if (
    nome.match(/^[a-zA-Z\u00C0-\u017F´]+\s+[a-zA-Z\u00C0-\u017F´]{0,}$/) ||
    nome.match(/^[a-zA-Z\u00C0-\u017F´]{0,}$/)
  ) {
    return true;
  } else {
    return false;
  }
}

function getValueIdade(input) {
  const idade = document.getElementById("idade");
  let isValidIdade = validarIdade(input.value);
  if (isValidIdade) {
    setSuccessFor(idade);
  } else {
    setErrorFor(idade, "Idade inválida");
  }
}

function validarIdade(idade) {
  if (idade === "") {
    return false;
  } else if (idade > 0 && idade < 110) {
    return true;
  } else {
    return false;
  }
}

function getValueRua(input) {
  const rua = document.getElementById("rua");
  let isValidRua = validarRua(input.value);
  if (isValidRua) {
    setSuccessFor(rua);
  } else {
    setErrorFor(rua, "Rua inválida");
  }
}

function validarRua(rua) {
  if (rua === "") {
    return false;
  } else if (
    rua.match(/^[a-zA-Z\u00C0-\u017F´]{0,}$/) ||
    rua.match(/^[a-zA-Z\u00C0-\u017F´]+\s+[a-zA-Z\u00C0-\u017F´]{0,}$/) ||
    rua.match(
      /^[a-zA-Z\u00C0-\u017F´]+\s+[a-zA-Z\u00C0-\u017F´]+\s+[a-zA-Z\u00C0-\u017F´]{0,}$/
    ) ||
    rua.match(
      /^[a-zA-Z\u00C0-\u017F´]+\s+[a-zA-Z\u00C0-\u017F´]+\s+[a-zA-Z\u00C0-\u017F´]+\s+[a-zA-Z\u00C0-\u017F´]{0,}$/
    )
  ) {
    return true;
  } else {
    return false;
  }
}

function getValueNumero(input) {
  const numero = document.getElementById("numero");
  let isValidNumero = validarNumero(input.value);
  if (isValidNumero) {
    setSuccessFor(numero);
  } else {
    setErrorFor(numero, "Número inválido");
  }
}

function validarNumero(idade) {
  if (idade === "") {
    return false;
  } else if (idade > 0) {
    return true;
  } else {
    return false;
  }
}

function getValueBairro(input) {
  const bairro = document.getElementById("bairro");
  let isValidBairro = validarBairro(input.value);
  if (isValidBairro) {
    setSuccessFor(bairro);
  } else {
    setErrorFor(bairro, "Bairro inválido");
  }
}

function validarBairro(bairro) {
  if (bairro === "") {
    return false;
  } else if (
    bairro.match(/^[a-zA-Z\u00C0-\u017F´]{0,}$/) ||
    bairro.match(/^[a-zA-Z\u00C0-\u017F´]+\s+[a-zA-Z\u00C0-\u017F´]{0,}$/) ||
    bairro.match(
      /^[a-zA-Z\u00C0-\u017F´]+\s+[a-zA-Z\u00C0-\u017F´]+\s+[a-zA-Z\u00C0-\u017F´]{0,}$/
    ) ||
    bairro.match(
      /^[a-zA-Z\u00C0-\u017F´]+\s+[a-zA-Z\u00C0-\u017F´]+\s+[a-zA-Z\u00C0-\u017F´]+\s+[a-zA-Z\u00C0-\u017F´]{0,}$/
    )
  ) {
    return true;
  } else {
    return false;
  }
}

function getValueCidade(input) {
  const cidade = document.getElementById("cidade");
  let isValidCidade = validarCidade(input.value);
  if (isValidCidade) {
    setSuccessFor(cidade);
  } else {
    setErrorFor(cidade, "Cidade inválida");
  }
}

function validarCidade(cidade) {
  if (cidade === "") {
    return false;
  } else if (
    cidade.match(/^[a-zA-Z\u00C0-\u017F´]{0,}$/) ||
    cidade.match(/^[a-zA-Z\u00C0-\u017F´]+\s+[a-zA-Z\u00C0-\u017F´]{0,}$/) ||
    cidade.match(
      /^[a-zA-Z\u00C0-\u017F´]+\s+[a-zA-Z\u00C0-\u017F´]+\s+[a-zA-Z\u00C0-\u017F´]{0,}$/
    ) ||
    cidade.match(
      /^[a-zA-Z\u00C0-\u017F´]+\s+[a-zA-Z\u00C0-\u017F´]+\s+[a-zA-Z\u00C0-\u017F´]+\s+[a-zA-Z\u00C0-\u017F´]{0,}$/
    )
  ) {
    return true;
  } else {
    return false;
  }
}

function getValueEstado(input) {
  const estado = document.getElementById("estado");
  let isValidEstado = validarEstado(input.value);
  if (isValidEstado) {
    setSuccessFor(estado);
  } else {
    setErrorFor(estado, "Estado inválido");
  }
}

function validarEstado(estado) {
  if (estado === "") {
    return false;
  } else if (
    estado.match(/^[a-zA-Z\u00C0-\u017F´]{0,}$/) ||
    estado.match(/^[a-zA-Z\u00C0-\u017F´]+\s+[a-zA-Z\u00C0-\u017F´]{0,}$/) ||
    estado.match(
      /^[a-zA-Z\u00C0-\u017F´]+\s+[a-zA-Z\u00C0-\u017F´]+\s+[a-zA-Z\u00C0-\u017F´]{0,}$/
    ) ||
    estado.match(
      /^[a-zA-Z\u00C0-\u017F´]+\s+[a-zA-Z\u00C0-\u017F´]+\s+[a-zA-Z\u00C0-\u017F´]+\s+[a-zA-Z\u00C0-\u017F´]{0,}$/
    )
  ) {
    return true;
  } else {
    return false;
  }
}

function validarCPF(cpf) {
  cpf = cpf.replace(/[^\d]+/g, "");
  if (cpf == "") return false;
  // Elimina CPFs invalidos conhecidos
  if (
    cpf.length != 11 ||
    cpf == "00000000000" ||
    cpf == "11111111111" ||
    cpf == "22222222222" ||
    cpf == "33333333333" ||
    cpf == "44444444444" ||
    cpf == "55555555555" ||
    cpf == "66666666666" ||
    cpf == "77777777777" ||
    cpf == "88888888888" ||
    cpf == "99999999999"
  )
    return false;
  // Valida 1o digito
  add = 0;
  for (i = 0; i < 9; i++) add += parseInt(cpf.charAt(i)) * (10 - i);
  rev = 11 - (add % 11);
  if (rev == 10 || rev == 11) rev = 0;
  if (rev != parseInt(cpf.charAt(9))) return false;
  // Valida 2o digito
  add = 0;
  for (i = 0; i < 10; i++) add += parseInt(cpf.charAt(i)) * (11 - i);
  rev = 11 - (add % 11);
  if (rev == 10 || rev == 11) rev = 0;
  if (rev != parseInt(cpf.charAt(10))) return false;
  return true;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const nome = nome.value.trim();

  if (nome === "") {
    // mostrar erro
    // add classe
    setErrorFor(nome, "Preencha esse campo");
  } else {
    // adicionar a classe de sucesso
    setSuccessFor(nome);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;

  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  formControl.className = "form-control success";
}

function CpfMask(num) {
  let resultValue = "";
  const numberValue = num.replace(/[\D]+/g, "").substring(0, 11);
  for (let i = 0; numberValue.length > i; i++) {
    if (i === 3) {
      resultValue += `.${numberValue[i]}`;
    } else if (i === 6) {
      resultValue += `.${numberValue[i]}`;
    } else if (i === 9) {
      resultValue += `-${numberValue[i]}`;
    } else {
      resultValue += numberValue[i];
    }
  }
  return resultValue;
}

function CepMask(num) {
  let resultValue = "";
  const numberValue = num.replace(/[\D]+/g, "").substring(0, 8);
  for (let i = 0; numberValue.length > i; i++) {
    if (i === 5) {
      resultValue += `-${numberValue[i]}`;
    } else {
      resultValue += numberValue[i];
    }
  }
  return resultValue;
}
