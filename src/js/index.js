const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const imagemBotaoDeTema = document.querySelector(".imagem-botao")
const body = document.querySelector("body")

botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro")

    body.classList.toggle("modo-escuro")
    if (modoEscuroEstaAtivo) {
        imagemBotaoDeTema.setAttribute("src", "./src/imagens/sun.png");
    } else {
        imagemBotaoDeTema.setAttribute("src", "./src/imagens/moon.png");
    }
});

