const baseURL = 'http://10.27.99.158:8080';



const reg = () => {
    const firstName = document.querySelectorAll('input')[0].value;
    const lastName = document.querySelectorAll('input')[1].value;  
    const email = document.querySelectorAll('input')[2].value;
    const pw = document.querySelectorAll('input')[3].value;
    const pw2 = document.querySelectorAll('input')[3].value;    
    let formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('email', email);
    formData.append('password', pw);
    formData.append('confirm', pw);
    fetch(`${baseURL}/registration`, {
        method: "POST",
        mode: "no-cors",
        cache: "no-cache",
        credentials: "same-origin",
        redirect: "follow", 
        referrer: "no-referrer", 
        body: formData,
    })
    .then(dwa => console.log(dwa))
    .then(console.log(firstName, lastName, email, pw, pw2))
}


const login = () => {
    const email = document.querySelectorAll('input')[0].value;
    const pw = document.querySelectorAll('input')[1].value;
    let formData = new FormData();
    formData.append('email', email);
    formData.append('password', pw);
    formData.append('confirm', pw);
    fetch(`${baseURL}/login`, {
        method: "POST",
        mode: "no-cors",
        cache: "no-cache", 
        credentials: "same-origin",
        redirect: "follow", 
        referrer: "no-referrer", 
        body: formData,
    })
    .then(dwa => console.log(dwa))
    .then(console.log(email, pw))
    
    .then(console.log('napasztmek'))
}

export {
  reg,
  login
}
