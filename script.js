

//login form
const user_name = document.getElementById('username');
const user_pass = document.getElementById('password');
const loginSubmit = document.querySelector('.form-items');


let username;
let userpassword;



loadEventListeners();

function loadEventListeners(){
    // login submit
    loginSubmit.addEventListener('submit', verifyLogin);

    // DOM Load Event
    document.addEventListener('DOMContentLoaded', retrieveDetails);
    
}


function verifyLogin(e){

    if(user_name.value === '' || user_pass === ''){
        alert('Some fields missing!!');
    }else{
        
        retrieveDetails();

    }

    e.preventDefault();
}
function retrieveDetails(){
    let user_details;
    if(localStorage.getItem(`${user_name.value}`) === null) {
        user_details = [];
        alert('Username not recognised');
       
    }else{
        user_details = JSON.parse(localStorage.getItem(`${user_name.value}`));
        
        if(user_details.includes(`${user_name.value}`) && user_details.includes(`${user_pass.value}`)){
            alert('Login Sucessful');
            user_name.value = '';
            user_pass.value = '';
            document.location = 'tasks.html';
        }
        
        else if(!(user_details.includes(`${user_pass.value}`))){
            alert('incorrect password entered');
        }
    }
}