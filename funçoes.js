let data = new Date()
let horas = data.getHours()
let minutos = data.getMinutes()
let horario = document.getElementById("horario")

horario.innerHTML=`Horário: ${horas}:${minutos}`


function enviar(){
    let num = window.document.getElementById("num")
    let tab = window.document.getElementById("seltab")
    let res = window.document.getElementById("res")
    
    

    if(num.value === ""){
        window.alert("[ERRO] É necessário digitar um valor")
    }else{
        tab.innerHTML=" "
        for (let c =1; c<11; c++){
            

            let item= document.createElement("option")
            item.innerText=`${num.value} x ${c} = ${num.value * c}`
            tab.appendChild(item)

        }num.value=""
        num.focus()

    }res.innerHTML="Já pode escolher o próximo número!"
}

