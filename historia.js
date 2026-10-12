const botaoProximo = document.querySelector("#proximo")
const botaoAnterior = document.querySelector("#anterior")
const listaImagens = document.querySelectorAll(".page")
const listaContador = document.querySelectorAll(".cont")
let contador = 0

botaoProximo.onclick = function passarPagina(){
    document.querySelector(".page.ativo").classList.remove("ativo")
    if(contador < 6){contador += 1}
    else{contador = 0}
    listaImagens[contador].classList.add("ativo")
    document.querySelector(".cont.ativo").classList.remove("ativo")
    listaContador[contador].classList.add("ativo")
    window.scrollTo({top: 0,behavior: "smooth"});
}

botaoAnterior.onclick = function voltarPagina(){
    document.querySelector(".page.ativo").classList.remove("ativo")
    if(contador > 0){contador -= 1}
    else{contador = 6}
    listaImagens[contador].classList.add("ativo")
    document.querySelector(".cont.ativo").classList.remove("ativo")
    listaContador[contador].classList.add("ativo")
    window.scrollTo({top: 0, behavior: "smooth"});
}