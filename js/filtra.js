var campoFiltro = document.querySelector("#filtrar-tabela")

campoFiltro.addEventListener("input", function(){
    var pacientes = document.querySelectorAll(".paciente")

    if (this.value.length > 0){
        for (var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i]
            var tdNome = paciente.querySelector(".info-nome")
            var nome = tdNome.textContent
            nome = removerAcentos(nome)
            var expressao = new RegExp(this.value, "i")
            if (!expressao.test(nome)){
                paciente.classList.add("invisivel")
            } else {
                paciente.classList.remove("invisivel")
            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i]
            paciente.classList.remove("invisivel")
        }
    }
});

function removerAcentos(nome) {
    nome.toLowerCase()
    nome = nome.replace(/[áàãâä]/g,"a");
    nome = nome.replace(/[óòõôö]/g,"o")
    nome = nome.replace(/[èéêë]/g,"e");
    nome = nome.replace(/[íìîï]/g,"i")
    nome = nome.replace(/[úùûü]/g,"u")
    nome = nome.replace(/[ç]/g,"c");
    return nome.replace(/[^a-z0-9]/gi,' '); 
}