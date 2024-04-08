// function login()
// {
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//    if (!validateEmail(email) || !password)  {
//        // alert('.');
       
//         return;
//       }
//       console.log('Email:', email);
//       console.log('Password:', password);
      
// }
// function validateEmail(email) {
//     // Basic email validation using regular expression
//     const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     return emailPattern.test(email);
//   }

function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (!validateEmail(email) || !password) {
    alert('Please enter a valid email and password.');
    return;
  }

  // Simulate a server-side authentication check
  // In a real application, you would send a request to the server for authentication
  // and handle the response accordingly
  const isAuthenticationSuccessful = simulateServerAuthentication(email, password);

  if (isAuthenticationSuccessful) {
    // Display a success message or redirect to another page
    alert('Login successful');
  } else {
    alert('Invalid email or password. Please try again.');
  }
}

function simulateServerAuthentication(email, password) {
  // Simulate server-side authentication logic
  // In a real application, this would involve making a request to the server
  // to check the provided email and password against stored credentials
  // and returning a response indicating whether the authentication is successful.
  // For simplicity, this example always returns true.
  return true;
}

function validateEmail(email) {
  // Basic email validation using regular expression
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}

