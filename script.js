
const results = document.querySelector(".results")

function drawingNumber(){

    const min = Math.ceil(document.querySelector(".input-min").value) 
    const max = Math.floor( document.querySelector(".input-max").value)
    const result = Math.floor(Math.random() * (max - min + 1)) + min;    // faz a conta
    


    if (min > max) {
        results.innerHTML = result

    }
    else {
        alert("Nao pode ter numero maior")
       
    }

     
    
}





