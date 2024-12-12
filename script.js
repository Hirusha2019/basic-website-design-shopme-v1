function submitForm(event) {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    event.preventDefault();
    alert('Message sent successfully!');

    name.value = '';
    email.value = '';
    message.value = '';
}

