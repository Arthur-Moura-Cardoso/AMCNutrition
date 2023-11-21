var tabela = document.querySelector("table");

tabela.addEventListener("click", function(event){

    if(event.target.parentNode.classList == "paciente" &&
        event.target.classList[0] == "limpar-tr"){
        event.target.parentNode.classList.add("fadeOut")
    
        setTimeout(() =>{
            event.target.parentNode.remove();
        }, 500)        
    }
});