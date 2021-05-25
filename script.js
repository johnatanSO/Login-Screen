var singIn = document.getElementById("sing-in")
var singUp = document.getElementById("sing-up")
var body = document.getElementById("body")

singIn.addEventListener("click", function(){
    body.className = "sing-in-js"
})

singUp.addEventListener("click", function(){
    body.className = "sing-up-js"
})