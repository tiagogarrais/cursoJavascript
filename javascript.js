// Capturar o nome do usuário
let nome = prompt("Digite seu nome")
// let nome = 'Julia'

//Capturar dia de nascimento
let diaNascimento = prompt("Digite o dia do seu nascimento")
// let diaNascimento = 2

//Capturar mês de Nascimento
let mesNascimento = prompt("Digite o mês do seu nascimento")
// let mesNascimento = 5

//Array de 12 ações
let acoes = [
    'Gosta mesmo é de ',
    'Aprecia ',
    'Dá um valor danado para ',
    'Vive bebendo ',
    'Só sabe pedir ',
    'Seca todos os copos de ',
    'Seca todos os copos de ',
    'Seca todos os copos de ',
    'Seca todos os copos de ',
    'Seca todos os copos de ',
    'Seca todos os copos de ',
    'Seca todos os copos de '
]


// Criando um Array de 31 bebidas
let bebidas = [
    'Ypióca ouro',
    'Kayser',
    'Brahma duplo malte',
    'cachaça bruta',
    'Tekila com sal e limão',
    'Tekila com sal e limão',
    'Tekila com sal e limão',
    'Tekila com sal e limão',
    'Tekila com sal e limão',
    'Tekila com sal e limão',
    'Tekila com sal e limão',
    'Tekila com sal e limão',
    'Tekila com sal e limão',
    'Tekila com sal e limão',
    'Tekila com sal e limão',
    'Tekila com sal e limão',
    'Tekila com sal e limão',
    'Tekila com sal e limão',
    'Tekila com sal e limão',
    'Tekila com sal e limão',
    'Tekila com sal e limão',
    'Tekila com sal e limão',
    'Tekila com sal e limão',
    'Tekila com sal e limão',
    'Tekila com sal e limão',
    'Tekila com sal e limão',
    'Tekila com sal e limão',
    'Tekila com sal e limão',
    'Tekila com sal e limão',
    'Tekila com sal e limão',
    'Tekila com sal e limão'
    ]


// Criando uma função para gerar o resultado
function gerarRelatorio(){
    // console.log(nome),
    // console.log(acoes[Number.parseInt(mesNascimento)]),
    // console.log(bebidas[Number.parseInt(diaNascimento)])

    const resultadoTela = document.getElementById('resultado')
    resultadoTela.innerHTML = (`${nome} ${acoes[Number.parseInt(mesNascimento)]} ${bebidas[Number.parseInt(diaNascimento)]} `)
    
}

//Chamando a função
gerarRelatorio()





