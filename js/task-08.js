// const form = document.querySelector('.login-form');

// form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//     event.preventDefault();
//     const { elements: { email, password } } = event.currentTarget;
    
//     (email.value === '' || password.value === '')
//     ? alert('Please fill in all the fields!')
//     : console.log(`Email: ${email.value} Password: ${password.value}`)
    
//     event.currentTarget.reset();
// }

const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(form);
    
    const isSubmited = {
        Email: formData.get('email'),
        Password: formData.get('password')
    };
    
    if (form.email.value === '' || form.password.value === '') {
        alert('Please fill in all the fields!');
    } else {
        console.log(isSubmited);
        event.currentTarget.reset();
    };
};