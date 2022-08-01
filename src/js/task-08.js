const form = document.querySelector('.login-form');
// console.log(form);

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    if (form.email.value === "" || form.password.value === "") {
        alert("Please fill in all the fields!");
    } else {
        const formData = new FormData(event.currentTarget);

    console.log(formData);

    formData.forEach((value, name) => {
    
    console.log('onFormSubmit -> name:', name);
    console.log('onFormSubmit -> value:', value);
        
        event.currentTarget.reset()
    });
    }
};
