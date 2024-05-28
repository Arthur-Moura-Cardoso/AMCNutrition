const botao_adicionar = document.querySelector("#buscar-paciente")

const nomes = [
    "Arthur","Gisele","Ashley","Leonardo","Lucas","Guilherme","Gustavo","Livia","Nicole","Beatriz","Julia","Gabriel","Gabrielly","João","Jefferson","Daniel","Matheus","Sara","Giovanna","Marianna","Ana","Anna","Nicolas","Natanael","Vitor","Leandro","Leonel","Valentina","Sofia","Isadora","Enzo"
]

const sobrenomes = [
    "Moura","Cardoso","Kate","Ledo","Alves","Souza","Peres","Maciel","Barreto","Pina","Magalhães","Santos","Gomes","Silva","Almeida","Barbosa","Castro","Coelho","Costa","Coutinho","Dias","Garcia","Lopez","Moreira","Nascimento","Oliveira","Pereira","Ramos","Vieira","Santana","Telles"
]

botao_adicionar.addEventListener('click', ()=> {
    let pacientes = []

    for(let i = 0; i < 4; i++ ) {
        var paciente =  {
            nome: criaNomeAleatorio(),
            altura: calculaAtributo().altura,
            peso: calculaAtributo().peso,
            gordura: calculaAtributo().gordura,
            imc: 0
        }

        paciente.imc = calculaImc(paciente.peso, paciente.altura)
    
        adicionarPacienteNaTabela(paciente)
        
    }



    
})

function criaNomeAleatorio() {
    let nomeAleatorio = nomes[Math.floor(Math.random() * nomes.length)]
    let sobrenomeAleatorio = sobrenomes[Math.floor(Math.random() * sobrenomes.length)]
    let nome = `${nomeAleatorio} ${sobrenomeAleatorio}`

    return nome;
}

function calculaAtributo() {
    let altura = Math.floor(Math.random() * (200 - 145) + 145)
    altura = (altura / 100).toFixed(2)
    
    let peso = Math.floor(Math.random() * (110 - 45) + 45)

    let gordura = Math.floor(Math.random() * (28 - 7) + 7)

    return{
        altura,
        peso,
        gordura
    }
}
