

const imageArea = document.querySelector('image');
const yourName = document.getElementById('name');

//login form
const user_name = document.getElementById('username');
const user_pass = document.getElementById('password');
const loginSubmit = document.querySelector('.form-items');
// imageArea.style.backgroundImage = "/images/bg.jpg";

let username;
let userpassword;
let name  = "Kelly";


loadEventListeners();

function loadEventListeners(){
    // login submit
    loginSubmit.addEventListener('submit', verifyLogin);

    
}
yourName.textContent = `${name}`;

function verifyLogin(e){
    username = 'kiki';
    userpassword = 'kiki';
    if(user_name.value === '' || user_pass === ''){
        alert('Some fields missing!!');
    }else{
        if(user_name.value.toLowerCase() === username && user_pass.value.toLowerCase() === userpassword) {
            alert("login sucessfull");
            document.location = "tasks.html";
        }else{
            alert("incorrect username or password");
            user_name.value = '';
            user_pass = '';
        }
    }

    e.preventDefault();
}