
let chave = "a1677fd17913e717c0db795df78a86c4";

function colocarNaTela(dados) {
  console.log(dados);

  document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
  document.querySelector(".temp").innerHTML =
    Math.floor(dados.main.temp) + "°C";
  document.querySelector(".temp-max").innerHTML =
    "Max " + Math.floor(dados.main.temp_max) + "°C";
  document.querySelector(".temp-min").innerHTML =
    "Min " + Math.floor(dados.main.temp_min) + "°C";
  document.querySelector(".descricao").innerHTML = dados.weather[0].description;
  document.querySelector(".icone").src =
    "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png";
  document.querySelector(".umidade").innerHTML =
    "Umidade " + dados.main.humidity + "%";

  // Chama a função de troca de fundo passando o clima e a temperatura
  atualizarFundo(dados.weather[0].main, dados.main.temp);
}

async function buscarCidade(cidade) {
  try {
    let resposta = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        cidade +
        "&appid=" +
        chave +
        "&lang=pt_br" +
        "&units=metric",
    );

    if (!resposta.ok) {
      throw new Error("Cidade não encontrada");
    }

    let dados = await resposta.json();
    colocarNaTela(dados);
  } catch (erro) {
    alert(
      "Ops! Não encontramos essa cidade. Verifique o nome e tente novamente.",
    );
  }
}

function cliqueiNoBotao() {
  let input = document.querySelector(".input-cidade");
  let cidade = input.value.trim();

  buscarCidade(cidade);

  // Limpa o campo para a próxima pesquisa
  input.value = "";
}

function atualizarFundo(clima, temp) {
  const body = document.querySelector("body");
  let urlImagem = "";

  // Prioridade 1: Frio extremo (Neve/Gelo)
  if (temp < 0) {
    // Link novo de neve (ID: q_97_ZfW8u8)
    urlImagem =
      "https://images.unsplash.com/photo-1519944159858-806d435dc86b?q=100&w=3840&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  }
  // Prioridade 2: Climas padrão
  else {
    const fundos = {
      Clear:
        "https://images.unsplash.com/photo-1708454089813-e73e923f15f2?q=100&w=3840&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

      Clouds:
        "https://images.unsplash.com/photo-1594156596782-656c93e4d504?w=3840&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG51YmxhZG98ZW58MHx8MHx8fDA%3D",

      Rain: 
      "https://images.unsplash.com/photo-1620385019253-b051a26048ce?q=100&w=3840&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

      Thunderstorm:
        "https://images.unsplash.com/photo-1583459094467-e0db130c0dea?q=100&w=3840&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    };

    // Se o clima não estiver mapeado ou der erro, usa uma paisagem de montanha neutra
    urlImagem =
      fundos[clima] ||
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop";
  }

  // Aplica a imagem com crases para garantir a interpolação da variável
  body.style.backgroundImage = `url('${urlImagem}')`;
}

// Evento para escutar a tecla Enter
document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    cliqueiNoBotao();
  }
});
