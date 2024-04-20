const firebaseConfig = {
    apiKey: "AIzaSyCchRx_imJ9nhJ7QEEDCCOHf1XcZ_u4UaI",
    authDomain: "compiler-6cd4a.firebaseapp.com",
    projectId: "compiler-6cd4a",
    storageBucket: "compiler-6cd4a.appspot.com",
    messagingSenderId: "123596947834",
    appId: "1:123596947834:web:26396bbae18a7853e756c3",
    measurementId: "G-W7D1TDR8JD"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Register button clicked
document.getElementById("register-button").addEventListener("click", () => {
    // Get values from HTML elements
    const role = document.getElementById("role").value;
    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // Check if all fields are filled
    if (role === "" || fullname === "" || email === "" || password === "") {
      // Show alert that user did not fill all fields
      alert("Please fill all fields.");
      return;
    }
  
    // Create user with email and password
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
          // User created successfully
          const user = userCredential.user;
          console.log("User created:", user);
  
          // Show alert that user is created
          alert("User created successfully!");
  
          // Redirect to login page
          window.location.href = "login.html";
        })
      .catch((error) => {
          // Error creating user
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error("Error creating user:", errorCode, errorMessage);
        });
  });