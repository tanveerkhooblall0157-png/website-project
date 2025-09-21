document.querySelector('form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const location = document.getElementById('location').value;
    const message = document.getElementById('message').value;


    // Simple validation checks
    if (name.trim() === '') {
        alert('Please enter your name.');
        event.preventDefault();
        return;
    }


    if (phone.trim() === '') {
        alert('Please enter your phone number.');
        event.preventDefault();
        return;
    }



    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
        return;
    }
    if (location.trim() === '') {
        alert('Please enter your location.');
        event.preventDefault();
        return;
    }



    if (message.trim() === '') {
        alert('Please enter your message.');
        event.preventDefault();
        return;
    }


    alert('Your message has been sent! We will get back to you shortly.');
});



function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}





