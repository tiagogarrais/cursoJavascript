//Array de 12 ações
let acoes = [
    'gosta mesmo é de ',
    'aprecia ',
    'dá um valor danado para ',
    'vive bebendo ',
    'só sabe pedir ',
    'não se contém quando bebe ',
    'fica rico e valente quando bebe ',
    'vira outra pessoa se beber ',
    'precisa ser levado pra casa quando bebe ',
    'fica todo feliz se oferecerem um pouco de ',
    'bebe fácil um litro de ',
    'usa taça de cristal pra beber '
]


// Criando um Array de 31 bebidas
let bebidas = [
    'cachaça amarela e ainda chama de "meu ouro".',
    'cerveja gelada no boteco da esquina.',
    'cerveja puro malte de latinha.',
    'cachaça de cabeça, só os brutos conhecem!',
    'Vodka, gelo e limão.',
    'gin tônica com limão e hortelã. A cara da riqueza!',
    'vinho tinto doce, daqueles do garrafão de 5 litros.',
    'um legítimo saquê japonês, servido quente!',
    'licor de frutas decorado com flores.',
    'espumante das festas de casamento.',
    'whisky com pedras polidas e geladas.',
    'capeta da barraca de festa com tudo misturado!',
    'absinto suíço com um torrão de açúcar, como manda a tradição.',
    'conhaque de alcatrão, bruto!',
    'champanhe espumante francês, chique demais!',
    'quentão produzido com vinho, maça e gengibre. Uma delícia!',
    'piña colada servida na tijela de vidro que está super na moda! ',
    'amarula bem doce e refrescante!',
    'cerveja artesanal!',
    'vinho branco na taça de cristal.',
    'quentão produzido com cachaça e gengibre!',
    'coquetel de vodka com frutas tropicais!',
    'cerveja long neck com amendoim de tira gosto.',
    'cerveja de litrão no churrasco da família.',
    'caipirinha clássica com cachaça gelo e limão!',
    'cerveja escura, forte e encorpada!',
    'cachaça com refrigerante pra amenizar o gosto forte!',
    'batida de cachaça, caju e leite condensado.',
    'cerveja daquelas que vem no latão de quase meio litro',
    'Tekila com sal e limão!',
    'cerveja gelada do bar mais frequentado da cidade.'
    ]

// Capturar o nome do usuário
nome = document.getElementById('nome')

//Capturar dia de nascimento
//dia = document.getElementById('dia')

//Capturar mês de Nascimento
mes = document.getElementById('mes')


// Criando uma função para gerar o resultado
function gerarRelatorio(){
    const resultadoTela = document.getElementById('resultado')
    resultadoTela.innerHTML = (`${nome.value} ${acoes[mes.value]} ${bebidas[Number.parseInt(dia.value)]}`)   
}