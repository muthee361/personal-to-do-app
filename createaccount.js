

const submitBtn = document.querySelector('.btn');
const firstName = document.getElementById('name');
const userName = document.getElementById('username');
const userPass = document.getElementById('pass');


loadEventListeners();

function loadEventListeners() {
    //submit
    submitBtn.addEventListener('click', submit);
}



//function get Dtails
function submit() {
    if (firstName.value === '' || userName.value === '' || userPass.value === '') {
        alert('please, fill all fields..');
    }
    else {
        getDetails(userName.value, userPass.value, firstName.value);
        function getDetails(name, pass, fname) {
            let tasks;

            if (localStorage.getItem(`${userName.value}`) === null) {
                tasks = [];
            } else {
                tasks = JSON.parse(localStorage.getItem(`${userName.value}`));
            }
            tasks.push(fname);
            tasks.push(name);
            tasks.push(pass);

            //add to local storage
            localStorage.setItem(`${userName.value}`, JSON.stringify(tasks));
            alert("Account sucessfully created");
            userName.value = '';
            userPass.value = '';
            firstName.value = '';
            document.location = "index.html";



        }

    }




}
// function saveTasksToLocalStorage(task){
//     let tasks;
//     if(localStorage.getItem('tasks') === null) {
//         tasks = [];
//     }else{
//         tasks = JSON.parse(localStorage.getItem('tasks'));
//     }
//     tasks.push(task);

//     //add to local storage
//     localStorage.setItem('tasks', JSON.stringify(tasks));
// }