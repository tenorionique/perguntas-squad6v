let name = prompt("Bem vindo\n Qual é o seu nome?");
let pergunta = prompt("Deseja participar do quiz?\n 1 - SIM \n 2 - NAO");

nome.textContent = (name);

if (pergunta == 1){
    let quiz1 = prompt("Qual ano que foi lancado Esquadrao Suicida? \n 1- 1998 \n 2 - 2015 \n 3 - 2016");
        if ( quiz1 != "3" ) {
            respErrada1.textContent = ('Resposta 1');
        }
        else{
            respCerta1.textContent = ('Resposta 1');
        }     
    let quiz2 = prompt("Qual ano que foi lançado Harry Potter e o Calice de Fogo? \n 1- 2001 \n 2 - 2005 \n 3 -2008");
        if (quiz2 != "2") {
            respErrada2.textContent = (' Resposta 2');
        } else { 
            respCerta2.textContent = (' Resposta 2');
        }
    let quiz3 = prompt("Qual ano foi lançado Capitã Marvel? \n 1- 2019 \n 2 - 2013 \n 3 -2017 ")
        if (quiz3 != "1") {
            respErrada3.textContent = (' Resposta 3');
        } else {
            respCerta3.textContent = (' Resposta 3');
        }
} 