// Initialise EmailJS
(function() {
    emailjs.init('EdfyCsZWNaGrPgZOe');
})();

// Clear form 
function clearForm() {
    document.getElementById('contact-form').reset()
}

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_o2fol9r', 'template_xrpdcfh', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
        clearForm();
    });
}
