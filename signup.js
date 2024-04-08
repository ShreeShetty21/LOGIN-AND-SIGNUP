function signup() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const dob = document.getElementById('dob').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
  
    // Validation
    if (!validateEmail(email) || !password || !firstName || !lastName || !gender || !validateDateOfBirth(dob) || !validatePhoneNumber(phoneNumber)) {
      alert('Please fill in all fields correctly.');
      return;
    }
  
    // Generate username based on the email account name
    const username = email.split('@')[0];
  
    // Use the gathered data for signup logic (to be implemented)
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Gender:', gender.value);
    console.log('Date of Birth:', dob);
    console.log('Phone Number:', phoneNumber);
    console.log('Username:', username);
    // Perform signup logic (e.g., send data to the server)

    //NAVIGATION TO LOGIN
    window.location.href = 'login.html';
  }
  
  function validateEmail(email) {
    // Basic email validation using regular expression
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }
  
  function validateDateOfBirth(dob) {
    // Validate that the date of birth is not in the future
    const currentDate = new Date();
    const selectedDate = new Date(dob);
    return selectedDate <= currentDate;
  }
  
  function validatePhoneNumber(phoneNumber) {
    // Validate that the phone number has 10 digits
    const phoneNumberPattern = /^\d{10}$/;
    return phoneNumberPattern.test(phoneNumber);
  }
  