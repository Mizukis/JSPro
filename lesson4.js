
// Задание 1
const str1 = `He said, 'I've never been to London.' I said: 'I don't like fruit'!`;
str1.replace(/'/g, `"`);

// Задание 2 Два случая, знак препинания до и после кавычек
const str2 = `He said, 'I've never been to London.' I said: 'I don't like fruit'!`; // .до кавычек и !после
str2.replace(/('\B)|(\B')/g, `"`);


// Задание 3

function validateForm() {
    var expName = /\w+\s\w+/gi;
    var expPhone = /^\+\d{1,3}\(\d{3}\)\d{3}-\d{4}$/;
    var expMail = /^[\w]{1}[\w-\.]+@[\w-]+\.[a-z]{2,11}$/i;
    var expMsg = /\w+/gi;

    var $name = document.getElementsByName('name')[0].value;
    var $phone = document.getElementsByName('phone')[0].value;
    var $email = document.getElementsByName('email')[0].value;
    var $message = document.getElementsByName('message')[0].value;

    if(expName.test($name) === true) {
        document.getElementById('name').className = 'good';
    } else {
        document.getElementById('name').className = 'error_msg';
    }

    if(expPhone.test($phone) === true) {
        document.getElementById('phone').className = 'good';
    } else {
        document.getElementById('phone').className = 'error_msg';
    }

    if(expMail.test($email) === true) {
        document.getElementById('email').className = 'good';
    } else {
        document.getElementById('email').className = 'error_msg';
    }
    if(expMsg.test($message) === true) {
        document.getElementById('message').className = 'good';
    } else {
        document.getElementById('message').className = 'error_msg';
    }

}
document.querySelector('.button').addEventListener("click", validateForm);
