// Function to handle Hotel/Restaurant registration
// Function to handle registration type
function register(type) {
    if (type === 'Hotel/Restaurant') {
      window.location.href = 'sree.html'; // Redirect to Hotel/Restaurant registration
    } else if (type === 'Charity') {
      window.location.href = 'charity.html'; // Redirect to Charity registration
    }
  }
  
  // Function to handle Hotel/Restaurant form submission
  document.addEventListener('DOMContentLoaded', function () {
    const hotelForm = document.getElementById('hotel-restaurant-form');
    if (hotelForm) {
      hotelForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the form from submitting the traditional way
  
        // Get form data
        const name = document.getElementById('name').value;
        const address = document.getElementById('address').value;
        const type = document.getElementById('type').value;
        const contact = document.getElementById('contact').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const foodType = document.getElementById('food-type').value;
  
        // Validate form data
        if (!name || !address || !type || !contact || !email || !phone || !foodType) {
          alert('Please fill out all fields.');
          return;
        }
  
        // Display success message
        alert('Thank you for registering! We will contact you shortly.');
        window.location.href='donate.html'
        // Optionally, send the form data to a server here
        // Example:
        // const formData = { name, address, type, contact, email, phone, foodType };
        // fetch('/submit', { method: 'POST', body: JSON.stringify(formData) })
        //   .then(response => response.json())
        //   .then(data => console.log(data))
        //   .catch(error => console.error(error));
  
        // Reset the form
        hotelForm.reset();
      });
    }
  });
  


// Function to handle Charity form submission
document.addEventListener('DOMContentLoaded', function () {
  const charityForm = document.getElementById('charity-form');
  if (charityForm) {
    charityForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent the form from submitting the traditional way

      // Get form data
      const name = document.getElementById('name').value;
      const idNumber = document.getElementById('id-number').value;
      const regNumber = document.getElementById('reg-number').value;
      const location = document.getElementById('location').value;

      // Validate form data
      if (!name || !idNumber || !regNumber || !location) {
        alert('Please fill out all fields.');
        return;
      }

      // Display success message
      alert('Thank you for registering! You can now view available donations.');

      // Redirect to accept.html
      window.location.href = 'accept.html';

      // Optionally, send the form data to a server here
      // Example:
      // const formData = { name, idNumber, regNumber, location };
      // fetch('/submitCharity', { method: 'POST', body: JSON.stringify(formData) })
      //   .then(response => response.json())
      //   .then(data => console.log(data))
      //   .catch(error => console.error(error));

      // Reset the form
      charityForm.reset();
    });
  }
});
