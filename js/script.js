// https://api.telegram.org/bot1498033524:AAG-_pssVg1SvGsnti84tSd_J5FwgVXuVco/getUpdates

// https://api.telegram.org/bot1498033524:AAG-_pssVg1SvGsnti84tSd_J5FwgVXuVco/sendMessage?chat_id=-487293988&text=hi_am_a_bot

// https://api.telegram.org/bot1498033524:AAG-_pssVg1SvGsnti84tSd_J5FwgVXuVco/getUpdates

document.querySelector('button').onclick = function () {
    let data = document.querySelector('.data').value;
    let time = document.querySelector('.time').value;
    let address = document.querySelector('.address').value;
    const token = '1498033524:AAG-_pssVg1SvGsnti84tSd_J5FwgVXuVco';
    let url = 'https://api.telegram.org/bot' + token + '/sendMessage?chat_id=-487293988&text='
    let xhttp = new XMLHttpRequest();
   
    xhttp.open("GET", url + 'Дата: ' + data + ';' + '  Час: ' + time + ';' + '  Адреса: ' + address, true);
    
    xhttp.send();
    
}