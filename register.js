 const firebaseConfig = {
    apiKey: "AIzaSyB11_21N9mfkaG_Z62pFprwO_h-w8ekrQs",
    authDomain: "compiler-8e073.firebaseapp.com",
    projectId: "compiler-8e073",
    storageBucket: "compiler-8e073.appspot.com",
    messagingSenderId: "1070161979004",
    appId: "1:1070161979004:web:11c7f94b909d65c4eb8bf9"
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
