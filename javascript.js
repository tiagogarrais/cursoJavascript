//Array de 12 ações
let acoes = [
    'gosta mesmo é de ',
    'aprecia ',
    'dá um valor danado para ',
    'vive bebendo ',
    'só sabe pedir ',
    'não se contém quando bebe ',
    'fica rico e valente quando bebe ',
    'seca todos os copos de ',
    'seca todos os copos de ',
    'seca todos os copos de ',
    'seca todos os copos de ',
    'seca todos os copos de '
]


// Criando um Array de 31 bebidas
let bebidas = [
    'cachaça amarela e ainda chama de "meu ouro".',
    'cerveja gelada do boteco de esquina',
    'cerveja puro malte do supermercado: <br> --É mais barato que no bar!',
    'cachaça bruta',
    'Vodka, gelo e limão',
    'gin tônica com limão e hortelã. A cara da riqueza!',
    'cachaça com gasolina e acetona.<br> Não façam isso em casa!',
    'mijo de jumenta parida!',
    'veneno de cobra cascavel',
    'Tekila com sal e limão!',
    'Tekila com sal e limão!',
    'Tekila com sal e limão!',
    'Tekila com sal e limão!',
    'Tekila com sal e limão!',
    'Tekila com sal e limão!',
    'Tekila com sal e limão!',
    'Tekila com sal e limão!',
    'Tekila com sal e limão!',
    'Tekila com sal e limão!',
    'Tekila com sal e limão!',
    'Tekila com sal e limão!',
    'Tekila com sal e limão!',
    'Tekila com sal e limão!',
    'Tekila com sal e limão!',
    'Tekila com sal e limão!',
    'Tekila com sal e limão!',
    'Tekila com sal e limão!',
    'Tekila com sal e limão!',
    'Tekila com sal e limão!',
    'Tekila com sal e limão!',
    'Tekila com sal e limão!'
    ]

// Capturar o nome do usuário
nome = document.getElementById('nome')

//Capturar dia de nascimento
dia = document.getElementById('dia')

//Capturar mês de Nascimento
mes = document.getElementById('mes')


// Criando uma função para gerar o resultado
function gerarRelatorio(){
    const resultadoTela = document.getElementById('resultado')
    resultadoTela.innerHTML = (`${nome.value} ${acoes[mes.value]} ${bebidas[Number.parseInt(dia.value)]}`)   
}