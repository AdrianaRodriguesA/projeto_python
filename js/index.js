// window.alert("oi")
// objetivo dos passos
// console.log(document)
// const botao = document.getElementById('botao');
const botoes = document.querySelectorAll(".botao");
const projetos = document.querySelectorAll(".projeto");

// botoes.addEventListener("click", () => {

// })
// para usar um elemento por vez



botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        desselecionarBotao();
        desselecionarProjeto();

        botao.classList.add("selecionado");
        projetos[indice].classList.add("selecionado");
    });
});

function desselecionarProjeto() {
    const projetoSelecionado = document.querySelector(".projeto.selecionado");
    projetoSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}