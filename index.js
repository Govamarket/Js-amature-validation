
// // }

// const button = document.getElementById('submit');
// button.addEventListener('click', function (event) {
//     event.preventDefault();
//     let name = document.getElementById('name')
//     let email = document.getElementById('email')
//     let confirm = document.getElementById('confirm')
    
//     let input = document.getElementById('name').value;
//     return input;
//     console.log(input);
//     // if (name > text ) {
//     //     console.log('must not be less than 3 characters')
//     // }

// });

// function isEmail(emailAdress){
//     let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// //   if (emailAdress.match(regex)) 
// //     return true; 

// //    else 
// //     return false; 
// if(regex.test(emailAdress)){
//     return "email is correct";
// } 
// else if(!regex.test(emailAdress)){
//     return "email is invalid"
// }
// else {
//     return "email is not correct";
// }
// }
// console.log(isEmail("yodjdhdhexample.com"));






// const button = document.getElementById('submit');
// button.addEventListener('click', function () {
//     event.preventDefault();
   
// let name = document.getElementById('name');
// let email = document.getElementById('email');
// let password = document.getElementById('password');
// let confirm = document.getElementById('confirm');
// function checkpasswordmatch(password, confirm) {
//  if (password.value !== confirm.value) {
//     console.log("password do not match")
//  }   
// }
// });



// const username = document.getElementById('name');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const confirm = document.getElementById('confirm');
// // const form = document.querySelector('form');
// const button =document.getElementById('submit');
// const errormessages = document.querySelector('errormessages');

// button.addEventListener('submit', (e) => {
//     const errors = [];
// // event.preventDefault();
//     if (username.value.trim() === '') {
//         errors.push("username required");
//     }

//     if (password.value.length > 8) {
//         errors.push("password must be at least 8 and 15 characters long");
//     }


//     if (errors.length > 0) {
//         e.preventDefault();
//         errormessages.toggleAttribute('hidden');
//         errormessages.innerHTML = errors.join(',');
//     }
// }); 


submit.addEventListener("click", submit);
function validate() {
    var user = document.forms.username.value;
    event.preventDefault();
    alert("hello");
    if (username.value.length < 3) {
        alert("username must be at least 3 characters long");
        console.log("add more characters");
    }else if (username.value.length >3) {
        alert("Welcome");
        alert(user);
        console.log(user);
    }
    
    let email = document.forms.email.value;
    let regex = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z{2,20}])$/;
    if (regex.test(email))
    alert(email);
    console.log(email);
   
    let psw1 = document.getElementById("psw1").value;
    let psw2 = document.getElementById("psw2").value;
    if (psw1.length < 8) {
        alert("pasword must be at least 8 characters and above");
        
    
        console.log(psw1);
    }if (psw1!==psw2) {
        alert("Invalid password");
    }else {
        alert("password correct");
        console.log(psw1);

    }


}

