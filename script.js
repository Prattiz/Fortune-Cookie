    let number = Math.round(Math.random() * 10);

number = Number(number)

let listMensages = [
    "Não importa o que você decidiu, o que importa é que isso te faça feliz.",

    "Todos os dias você se supera de alguma forma e isso já é o suficiente.",

    "Se a caminhada está difícil, é porque você está no caminho certo. Não desista até conquistar aquilo que você merece!",

    "Não tenha medo de mudar, tenha medo de daqui um ano estar reclamando dos mesmos problemas.",

    "Você é mais corajoso do que pensa, mais forte do que parece e mais esperto do que acredita.",

    "Erros são provas de que você está tentando. Não desista!",

    "Não espere incentivo dos outros. O primeiro a acreditar no seu sonho tem que ser você.",

    "Valorize as pequenas vitórias, o sucesso é a soma de pequenos esforços.",

    "O sucesso não vem daquilo que você faz ocasionalmente. Ele vem do que você faz consistentemente.",

    "Não deixe que as pessoas te façam desistir daquilo que você mais quer na vida. Acredite, lute e conquiste tudo que puder!",

    "Não deixe que as pessoas te façam desistir daquilo que você mais quer na vida. Acredite, lute e conquiste tudo que puder!", 
];


function tryButton(){
    document.querySelector(".content").classList.add("hide")

    document.querySelector(".content2").classList.remove("hide")

    document.querySelector(".mensage").innerText = listMensages[number]

}

function back(){
    document.querySelector(".content").classList.remove("hide")
    document.querySelector(".content2").classList.add("hide")
}




