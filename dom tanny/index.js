let form1 = document.getElementById('signup');

form1.addEventListener('submit',(e) => {
    e.preventDefault();


    let name = document.getElementById('name').value;

    let email = document.getElementById('email').value;

    let country = document.getElementById('country').value;

    let phone = document.getElementById('phone').value;

    let pass = document.getElementById('password').value;



    let employee={
        
        empname: name,
        empemail: email,
        empcountry: country,
        empphone: phone,
        emppass: pass
    }

    console.log(employee)

})


let form = document.getElementById('signin');

form.addEventListener('submit',(e) => {
    e.preventDefault();


    let name = document.getElementById('signin-name').value;

    let email = document.getElementById('signin-email').value;

    let pass = document.getElementById('signin-password').value;



    let employee={
        
        empname: name,
        empemail: email,
        emppass: pass
    }

    console.log(employee)

})