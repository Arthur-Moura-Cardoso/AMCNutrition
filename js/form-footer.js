const botao_inscrever = document.querySelector(".botao_inscrever")
const botoes_fechar = document.querySelectorAll(".fechar")
const botao_enviar = document.querySelector(".enviar_form-footer")
const body_form_footer = document.querySelector(".footer_form")
const inputs = body_form_footer.querySelectorAll('input')
const mensagem_erro = document.querySelector(".mensagem_erro")
const tel = document.querySelector("#telefone_footer")

botao_enviar.addEventListener('click', function() {
    verificarFormFooter()
    
    if(mensagem_erro.innerText == "") {
        let container_form = body_form_footer.querySelector(".container_footer-form")
        let load = body_form_footer.querySelector(".load_footer-form")
        let mensagem_exito = body_form_footer.querySelector(".mensagem_sucesso")

        container_form.style.display = "none"
        load.style.display = "flex"
        load.classList.add("ativo")
        setTimeout(() => {
            load.style.display = "none"
            load.classList.remove("ativo")
        
            mensagem_exito.style.display = "flex"
            setTimeout(() => {
                mensagem_exito.classList.add("ativo")
            }, 
            10);
        }, 1600)
    }
})

botao_inscrever.addEventListener('click', () => {
    body_form_footer.style.display = "flex"
    setTimeout(() => {
        body_form_footer.classList.add("ativo-form")
    }, 
    1);
})

botoes_fechar.forEach(botao => {
    botao.addEventListener('click', () => {
        body_form_footer.classList.remove("ativo-form")
        setTimeout(() => {
            body_form_footer.style.display = "none"
        }, 
        500);
    })
})

function verificarFormFooter() {
    inputs.forEach(element => {
        if(element.value == "") {
            let label = element.parentElement.querySelector("label")
            element.classList.add("erroForm")
            label.style.color = "#861d1d"
            mensagem_erro.innerText = "Os campos não podem ficar vazio"
            limparErro(element, label)

        }else if (element.type == 'email') {
            if(!validarEmail(element.value)) {
                let label = element.parentElement.querySelector("label")
                element.classList.add("erroForm")
                label.style.color = "#861d1d"
                mensagem_erro.innerText = "Email inválido !"
                limparErro(element, label)
            }
        }
    })
}

function limparErro(element, label) {
        element.addEventListener('input', ()=> {
        element.classList.remove("erroForm")
        label.style.color = "#435334"
        mensagem_erro.innerText = "" 
    })
}

function validarEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

tel.addEventListener('focusout', () => {
    let numeroTelefone = mascaraDeTelefone(tel)

    if(numeroTelefone == "()-") {
        tel.value = ""
        mensagem_erro.innerText = "Por favor insira seu telefone"
    }else if (numeroTelefone.length < 14){
        tel.value = ""
        mensagem_erro.innerText = "Insira um telefone válido (XX)XXXX - XXXXX"
    }else {
        tel.value = numeroTelefone
    }

})

function mascaraDeTelefone(telefone){
    let valorInput = verificarNumeros(telefone.value)
    const numeroTelefone = valorInput    
    let numeroAjustado;

    const ddd = numeroTelefone.slice(0,2)
    const parte1 = numeroTelefone.slice(2,6)
    const parte2 = numeroTelefone.slice(6,11)
    numeroAjustado = `(${ddd})${parte1}-${parte2}`   
    
    return numeroAjustado;
}

function verificarNumeros(text) {
    var valorInput = text.replace(/[^0-9]/g,'');
    return valorInput;
}