var tabela = document.querySelector("table");
var checkbox = document.querySelector("#editar")

checkbox.addEventListener("change", function() {
    if(this.checked){
        tabela.addEventListener("click", mudarPaciente)
        console.log("checado")
    }else {
        tabela.removeEventListener("click", mudarPaciente)
        console.log("deschecado")
    }
})

function mudarPaciente(event) {
    if(event.target.parentNode.classList == "paciente" && event.target.classList != "info-imc"){
        var valorAntigo = event.target.textContent
        event.target.contentEditable = "true"

        event.target.addEventListener('blur', function() {
            var peso = this.parentNode.querySelector(".info-peso").textContent
            var altura = this.parentNode.querySelector(".info-altura").textContent
            
            verificarConteudo(event.target.textContent, valorAntigo, event.target.classList[0], event.target)

            if(!verificarConteudo()) {
                var imc_tr = this.parentNode.querySelector(".info-imc")
                var imc = calculaImc(peso, altura)

                valorAntigo = this.textContent
                

                if(isNaN(imc)) {
                    return;
                }else {
                    imc_tr.textContent = imc
                }
                
                event.target.contentEditable = "false"
            }
        })
    }
}


function verificarConteudo(valorAtual, valorAntigo, tdClass, tdContent) {

    if(!validaAltura(valorAtual) && tdClass == "info-altura"){
        tdContent.textContent = valorAntigo
        
    }else if(!validaPeso(valorAtual) && tdClass == "info-peso"){
        tdContent.textContent = valorAntigo
        
    }else if(!validaGordura(valorAtual) && tdClass == "info-gordura") {
        tdContent.textContent = valorAntigo
        
    }else if (!validaNome(valorAtual) && tdClass == "info-nome") {
        tdContent.textContent = valorAntigo
    }else {
        return false;
    }
}