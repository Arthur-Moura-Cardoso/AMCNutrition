const frasesNutricionaisMotivacionais = [
    "Você é o que você come, então escolha sabiamente.",
    "Coma para nutrir seu corpo, não para satisfazer sua gula.",
    "A alimentação saudável é uma forma de amor próprio.",
    "Cuide do seu corpo. É o único lugar que você tem para viver.",
    "Uma dieta balanceada é a chave para uma vida saudável.",
    "Seu corpo é seu templo, mantenha-o puro e sagrado.",
    "Coma arco-íris - variedade é a chave para a nutrição.",
    "A comida é o combustível do seu corpo. Escolha o melhor.",
    "A nutrição adequada é a base para uma boa saúde.",
    "Mude seus hábitos alimentares, mude sua vida.",
    "Não se prive, se nutra.",
    "A saúde é a verdadeira riqueza, e a nutrição é a chave para alcançá-la.",
    "Coma bem, sinta-se bem, viva bem.",
    "A nutrição é uma parte valiosa do autocuidado.",
    "O corpo alcança o que a mente acredita. Nutra ambos.",
    "Comer saudável não é uma dieta, é um estilo de vida.",
    "Você merece uma alimentação que faz você se sentir bem.",
    "A energia que você coloca em seu corpo é o que você recebe de volta.",
    "A nutrição não é moderação, é equilíbrio.",
    "A comida é a fonte de combustível mais poderosa para o seu corpo.",
    "O que você come em particular, você se torna em geral.",
    "Coma bem, viva bem, seja bem.",
    "Seu corpo é seu melhor investimento, cuide dele com boa alimentação.",
    "A nutrição não é uma tendência, é uma necessidade.",
    "A boa nutrição é a base da saúde e do bem-estar.",
    "Coma conscientemente, viva intencionalmente.",
    "Você merece uma alimentação que nutre sua mente, corpo e alma.",
    "A nutrição é uma forma de autocuidado e amor próprio.",
    "Cada escolha alimentar é uma oportunidade para nutrir seu corpo.",
    "Seu corpo agradece quando você o alimenta com alimentos saudáveis.",
]

var fraseAleatoria = frasesNutricionaisMotivacionais[Math.floor(Math.random() * frasesNutricionaisMotivacionais.length)];
const fraseText = document.querySelector(".frase_motivacional-text")
fraseText.innerText = fraseAleatoria

fraseText.addEventListener('click', () => {
    fraseAleatoria = frasesNutricionaisMotivacionais[Math.floor(Math.random() * frasesNutricionaisMotivacionais.length)];
    fraseText.innerText = fraseAleatoria
})

