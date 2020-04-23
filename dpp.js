let jogadorDaVez = 1
let vencedor = ""

const JOGADOR_1 = 1
const JOGADOR_2 = 2

$(".casa").click(function() {
    let background = $(this).css("background-image")

    if (background == "none" || background == "") {          
        const fig = `url(${jogadorDaVez}.jpg)`
        $(this).css("background", fig)
        jogadorDaVez = (jogadorDaVez == JOGADOR_1 ? JOGADOR_2 : JOGADOR_1)

        verificarFimDeJogo()
    }
})

function casasIguais(a, b, c){    
    var bgA = $("#casa" + a).css("background-image")
    var bgB = $("#casa" + b).css("background-image")
    var bgC = $("#casa" + c).css("background-image")

    if ((bgA == bgB) && (bgB == bgC) && (bgA != "none" && bgA != "")) {

        if (bgA.indexOf("1.jpg") >= 0)
            vencedor = "1"
        else
            vencedor = "2"
        return true
    }
    else {
        return false
    }
}

function verificarFimDeJogo() {
    if(casasIguais(1, 2, 3) || casasIguais(4, 5, 6) || casasIguais(7, 8, 9) ||
        casasIguais(1, 4, 7) || casasIguais(2, 5, 8) || casasIguais(3, 6, 9) ||
        casasIguais(1, 5, 9) || casasIguais(3, 5, 7)) {

        $("#resultado").html("<h1>O jogador " + vencedor + " venceu! </h1>")
        $(".casa").off("click")
    }
}