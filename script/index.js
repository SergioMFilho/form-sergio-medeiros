const form = document.getElementById("form");
const nome = document.getElementById("nome");

function limpa_formulário_cep() {
  //Limpa valores do formulário de cep.
  document.getElementById("rua").value = "";
  document.getElementById("bairro").value = "";
  document.getElementById("cidade").value = "";
  document.getElementById("estado").value = "";
}

function meu_callback(conteudo) {
  if (!("erro" in conteudo)) {
    //Atualiza os campos com os valores.
    document.getElementById("rua").value = conteudo.logradouro;
    document.getElementById("bairro").value = conteudo.bairro;
    document.getElementById("cidade").value = conteudo.localidade;
    document.getElementById("estado").value = conteudo.uf;
  } //end if.
  else {
    //CEP não Encontrado.
    limpa_formulário_cep();
    setErrorFor(nome, "CEP inválido");
  }
}

function pesquisacep(valor) {
  const cep1 = document.getElementById("cep");
  //Nova variável "cep" somente com dígitos.
  var cep = valor.replace(/\D/g, "");

  //Verifica se campo cep possui valor informado.
  if (cep != "") {
    //Expressão regular para validar o CEP.
    var validacep = /^[0-9]{8}$/;

    //Valida o formato do CEP.
    if (validacep.test(cep)) {
      //Preenche os campos com "..." enquanto consulta webservice.
      document.getElementById("rua").value = "...";
      document.getElementById("bairro").value = "...";
      document.getElementById("cidade").value = "...";
      document.getElementById("estado").value = "...";

      //Cria um elemento javascript.
      var script = document.createElement("script");

      //Sincroniza com o callback.
      script.src =
        "https://viacep.com.br/ws/" + cep + "/json/?callback=meu_callback";

      //Insere script no documento e carrega o conteúdo.
      document.body.appendChild(script);
      setSuccessFor(cep1);
    } //end if.
    else {
      //cep é inválido.
      limpa_formulário_cep();
      setErrorFor(cep1, "Cep inválido");
    }
  } //end if.
  else {
    //cep sem valor, limpa formulário.
    limpa_formulário_cep();
  }
}

function maskCep(text) {
  let maskedText = CepMask(text.value);
  document.getElementById("cep").value = maskedText;
  //   console.log(cpf.value);
  //   cpf.value = CpfMask(text.value);
}

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
  if (nome && nome.match(/^[^0-9]+$/)) {
    return true;
  } else {
    return false;
  }
}

// function getValueDataNascimento(input) {
//   const dataNascimento = document.getElementById("dataNascimento");
//   let isValidDataNascimento = validarDataNascimento(input.value);
//   if (isValidDataNascimento) {
//     setSuccessFor(isValidDataNascimento);
//   } else {
//     setErrorFor(dataNascimento, "Nome inválido");
//   }
// }

// function validarDataNascimento(dataNascimento) {
//   if (dataNascimento) {
//     return true;
//   } else {
//     return false;
//   }
// }

function validadata() {
  const dataNascimento = document.getElementById("dataNascimento");
  var data = document.getElementById("dataNascimento").value; // pega o valor do input
  data = data.replace(/\//g, "-"); // substitui eventuais barras (ex. IE) "/" por hífen "-"
  var data_array = data.split("-"); // quebra a data em array

  // para o IE onde será inserido no formato dd/MM/yyyy
  if (data_array[0].length != 4) {
    data = data_array[2] + "-" + data_array[1] + "-" + data_array[0]; // remonto a data no formato yyyy/MM/dd
  }

  // comparo as datas e calculo a idade
  var hoje = new Date();
  var nasc = new Date(data);
  var idade = hoje.getFullYear() - nasc.getFullYear();
  var m = hoje.getMonth() - nasc.getMonth();
  if (m < 0 || (m === 0 && hoje.getDate() < nasc.getDate())) idade--;

  if (idade < 18) {
    setErrorFor(dataNascimento, "Você precisa ter 18 anos ou mais");
    return false;
  }

  if (idade >= 18 && idade <= 110) {
    setSuccessFor(dataNascimento);
    return true;
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
  if (idade && idade > 0 && idade < 110) {
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
  if (rua) {
    return true;
  }
  return false;
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

function validarNumero(numero) {
  if (numero && numero > 0) {
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
  if (bairro) {
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
  if (cidade) {
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
  if (estado) {
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
});

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

function excluirOption() {
  let selector = document.getElementById("hobby");
  selector.remove(selector.selectedIndex);
}

function addHobby() {
  let inputHobby = document.getElementById("inputHobby");
  let option = document.createElement("option");
  if (inputHobby.value != "" && inputHobby.value != option) {
    option.innerText = inputHobby.value;
    document.getElementById("hobby").appendChild(option);
  }

  // let select = document.getElementById("hobby");
  // select.options[select.options.length] = new Option("My option", "My value");
}

const closeModalButton = document.querySelector("#close-modal");
closeModalButton.onclick = "toggleModal()";
const fade = document.querySelector("#fade");

const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};

[closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});

function listHobbys(hobbysOptions) {
  const hobbys = [];
  for (option of hobbysOptions) {
    hobbys.push(option.innerText);
  }
  return hobbys;
}

function modalDeSucesso() {
  let checkbox = document.getElementById("checkbox");
  if (checkbox.checked) {
    let nome = document.getElementById("nome").value;
    let cpf = document.getElementById("cpf").value;
    let dataNascimento = document.getElementById("dataNascimento").value;
    let idade = document.getElementById("idade").value;
    let cep = document.getElementById("cep").value;
    let rua = document.getElementById("rua").value;
    let numero = document.getElementById("numero").value;
    let bairro = document.getElementById("bairro").value;
    let cidade = document.getElementById("cidade").value;
    let estado = document.getElementById("estado").value;
    let hobby = listHobbys(document.getElementById("hobby"));
    let result = document.getElementById("result");
    result.textContent = JSON.stringify(
      {
        nome,
        cpf,
        dataNascimento,
        idade,
        cep,
        rua,
        numero,
        bairro,
        cidade,
        estado,
        hobby,
      },
      undefined,
      2
    );
    toggleModal();
  } else {
    setErrorFor(checkbox, "Ative o checkbox");
  }
}
