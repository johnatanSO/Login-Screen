var singIn = document.getElementById("sing-in")
var singUp = document.getElementById("sing-up")
var body = document.getElementById("body")
var teste = "TESTANDO O GIT" //TESTE DO Git

singIn.addEventListener("click", function(){
    body.className = "sing-in-js"
})

singUp.addEventListener("click", function(){
    body.className = "sing-up-js"
})