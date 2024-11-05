let button = document.querySelector('button');
button.textContent = 'Register Here';
button.addEventListener('click', function() {
    window.location.href = 'register.html';
});


let eventTitle = document.querySelector('h1');

eventTitle.addEventListener('mouseover', function() {
    eventTitle.style.backgroundColor = 'yellow';
});

eventTitle.addEventListener('mouseout', function() {
    eventTitle.style.backgroundColor = 'red';
});

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted successfully!');
});



