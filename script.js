let chk1 = document.querySelector('input[name="radio1"]')
let radio1 = document.querySelector("#rad1")
chk1.addEventListener('change',()=>{
    if(chk1.checked){
        radio1.style.color = "green"
    }
    else{
        radio1.style.color = "black"
    }
})