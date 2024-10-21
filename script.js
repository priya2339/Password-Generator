const passwordbox = document.getElementById('password');
const lenght  = 12;

const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const symbol = '@!#$%^z7890-=+|}{[]()/><';

const allChars = uppercase + lowercase + number + symbol;

function createpassword(){

    let password = '';

    password += uppercase[Math.floor(Math.random()*uppercase.length)];
    password += lowercase[Math.floor(Math.random()*lowercase.length)];
    password += number[Math.floor(Math.random()*number.length)];
    password += symbol[Math.floor(Math.random()*symbol.length)];


    while(length > password.length){
        password += allChars[Math.floor(Math.random()*allChars.length)];
    }

    passwordbox.value = password;

}

function copypassword(){
    passwordbox.select();
    document.execCommand('copy');
}