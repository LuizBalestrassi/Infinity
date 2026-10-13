const modal = document.querySelector("#modalRegistro")
const abrir = document.querySelector("#abrirRegistro")
const fechar = document.querySelector("#fecharRegistro")
const passar = document.querySelector("#EspecProx")
const voltar = document.querySelector("#EspecAnt")
const listarEras = document.querySelectorAll(".tabela")
let contador = 0

abrir.onclick = function(){
    modal.style.display = "flex";
}
fechar.onclick = function(){
    modal.style.display = "none";
}

function atualizarBotoes(){
    if(contador == 0){voltar.style.display = "none"}
        else{voltar.style.display = "flex"}
    if(contador == listarEras.length - 1){passar.style.display = "none"}
        else{passar.style.display = "flex"}
}

atualizarBotoes()

passar.onclick = function(){
    document.querySelector(".tabela.ativo").classList.remove("ativo")
    if(contador < listarEras.length - 1){contador += 1}
    else{contador = 0}
    listarEras[contador].classList.add("ativo")
    window.scrollTo({top: 0, behavior: "smooth"});

        if(contador > 0){voltar.style.display = "flex"}
            else{voltar.style.display = "none"}
    atualizarBotoes()
}

voltar.onclick = function(){
    document.querySelector(".tabela.ativo").classList.remove("ativo")
    if(contador > 0){contador -= 1}
    else{contador = listarEras.length - 1}
    listarEras[contador].classList.add("ativo")
    window.scrollTo({top: 0, behavior: "smooth"});

        if(contador > 0){voltar.style.display = "flex"}
            else{voltar.style.display = "none"}
    atualizarBotoes()
}