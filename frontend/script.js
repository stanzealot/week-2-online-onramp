
const clearInput = () =>{
    let input = document.querySelectorAll(".textbox");
    input.forEach(element => {
        element.value ="";
    });
}

const Send = ()=>{
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let mobile = document.querySelector("#mobile").value;
    let message = document.querySelector("#message").value;

    if(name ==="" || email ==="" || mobile ==="" || message ===""){
        window.alert("all input boxes must be filled");
    }
    if(name !=="" && email !=="" && mobile !=="" && message !==""){
        if(isNaN(mobile)){
            window.alert("phone number field must only contain numbers");
        }
        else if(message.length > 100){
            window.alert("message field cannot have more than 100 characters");
        }
        else{
            window.alert("welcome user");
        }

    }

    
}

