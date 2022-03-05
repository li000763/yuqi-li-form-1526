let name = document.getElementById("fullname");
let email = document.getElementById("email");
let message = document.getElementById("message");
let submit = document.getElementById("submit");

submit.addEventListener('click',function(event){
    event.preventDefault();
});

function checkInput() {
    console.clear();
    let reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    let data = {
        
    };
    let error = [];

    if(name.value != "") {
        data.name = name.value;

    } else {
        error[0] = "Full name is missing";
    } 
    if(email.value != "") {
        if(reg.test(email.value)) {
           data.email = email.value;
        } else {
           error[1] = "Email is wrong" 
        }

    } else {
        error[1] = "Email is missing";
        
    } 
    if(message.value != "") {
        data.message = message.value;

    } else {
        error[2] = "message name is missing";
        
    } 
    
    if(error.length == 0){
       console.log(data);
    } else {
        console.log(error);
    }
    


    
    
}
