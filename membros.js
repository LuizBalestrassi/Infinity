const botoes = document.querySelectorAll (".selo-mini");
const membros = document.querySelectorAll (".membro");
const SeloMaior = document.querySelectorAll(".seloGrande");

botoes.forEach(function(botao){
    botao.addEventListener("click", function(){
        const membroEscolhido = botao.dataset.membro;

        membros.forEach(function(membro){
            membro.classList.remove("ativo");
        });
        document
            .getElementById(membroEscolhido)
            .classList.add("ativo");

        SeloMaior.forEach(function(selo){
            selo.classList.remove("ativo");
        });
            document
                .getElementById("preview-" + membroEscolhido)
                .classList.add("ativo");
    });
});
