function isEmail() {
    let str = document.getElementById("email").value;
    let re = /^[^\s()<>@,;:\/]+@\w[\w\-]+\.[a-z]{2,}$/i;
    if (re.test(str)) status.innerHTML = alert('Спасибо за подписку!');
    else status.innerHTML = alert('Надо ввести почту!)');
    if (isEmpty(str)) status.innerHTML = alert('Вы ничего не ввели...');
}
function isEmpty(str){
    return (str === null) || (str.length === 0);
}



function isMessage() {
    let name = document.getElementById("name").value;
    let your = document.getElementById("your_mail").value;
    let text = document.getElementById("text").value;
    let re = /^[а-яА-ЯёЁ a-z]{2,}$/i;
    let de = /^[^\s()<>@,;:\/]+@\w[\w\-]+\.[a-z]{2,}$/i;
    if (re.test(name)) status.innerHTML = true;
    else if (de.test(your)) status.innerHTML = true;
    else status.innerHTML = alert('Надо ввести почту!)');
    if (re.test(text)) status.innerHTML = alert('Спасибо за ваш отзыв!');
    else status.innerHTML = alert('У вас пустое сообщение');
    if (isEmptey(your)) status.innerHTML = alert('Заполните форму!');
}


function isEmptey(your){
    return (your === null) || (your.length === 0);
}


