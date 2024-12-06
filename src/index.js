/*
Classificador de Nível de Herói

Entendendo o Desafio 

Agora é a sua hora de brilhar e construir um perfil de destaque na DIO! 

Explore todos os conceitos explorados até aqui e replique (ou melhore, porque não?)
este projeto prático. Para isso, crie seu próprio repositório e aumente ainda mais
seu portfólio de projetos no GitHub, o qual pode fazer toda diferença em suas entrevistas técnicas 😎

Neste repositório, insira todos os links e arquivos necessários para seu projeto, seja um arquivo de
banco de dados ou um link para o template no Figma. 

Dica: Se o expert forneceu um repositório Github, você pode dar um "fork" no repositório dele para
organizar suas alterações e evoluções mantendo uma referência direta ao código-fonte original.
 
Instruções para entrega

# 1️⃣ Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, 
depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"
*/

const state = {
    view: {
        selecao: document.querySelectorAll(".personagens"),
        saidaImagem: document.getElementById("personagem__escolhido"),
        saidaTexto: document.querySelector(".saida__dados")
    },

    values: {
        nome: ["homem aranha", "Capitão America", "Capitão Cueca", "Bob Esponja", "Capitão Carverna", "Scooby-Doo", "Bolt", "Batmam"],
        titulo: 0
    }
};

function addListenerHitBox() {
    state.view.selecao.forEach((personagens) => {
        personagens.addEventListener("mousedown", () => {
            state.view.saidaImagem.src = document.getElementById(personagens.id).getAttribute('src');
            experienciaPersonagem(personagens.id);
        })
    });
}

function experienciaPersonagem(numero) {
    state.values.nome.forEach(element => {
        if (element === state.values.nome[numero]) {
            state.view.saidaTexto.innerText = state.values.nome[numero];
            let experiencia = Math.floor(Math.random() * 12000);

            switch (true) {
                case experiencia <= 1000:
                    titulo = "ferro";
                    break;
                //case 1.001 e 2.000
                case experiencia > 1000 && experiencia <= 2000:
                    titulo = "Bronze";
                    break;
                //case 2.001 e 5.000
                case experiencia > 2000 && experiencia <= 5000:
                    titulo = "Prata";
                    break;
                //Se XP for entre 5.001 e 7.000
                case experiencia > 5000 && experiencia <= 7000:
                    titulo = "Ouro";
                    break;
                //Se XP for entre 7.001 e 8.000 
                case experiencia > 7000 && experiencia <= 8000:
                    titulo = "Platina";
                    break;
                //Se XP for entre 8.001 e 9.000
                case experiencia > 8000 && experiencia <= 9000:
                    titulo = "Ascendente";
                    break;
                //Se XP for entre 9.001 e 10.000
                case experiencia > 9000 && experiencia <= 10000:
                    titulo = "Imortal";
                    break;
                //Se XP for maior ou igual a 10.001 
                default:
                    titulo = "Radiante";
                    break;
            }
            state.view.saidaTexto.innerText = `O Herói de nome "${state.values.nome[numero]} "está no nível de "${titulo}", seu xp é "${experiencia}."`;
        }
    });
}

function initialize() {
    addListenerHitBox();
}

initialize();