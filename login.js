import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB11_21N9mfkaG_Z62pFprwO_h-w8ekrQs",
    authDomain: "compiler-8e073.firebaseapp.com",
    projectId: "compiler-8e073",
    storageBucket: "compiler-8e073.appspot.com",
    messagingSenderId: "1070161979004",
    appId: "1:1070161979004:web:11c7f94b909d65c4eb8bf9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Function to create spinner
function createSpinner(button) {
    const spinner = document.createElement('span');
    spinner.classList.add('spinner-border', 'spinner-border-sm', 'ms-1');
    button.appendChild(spinner);
    return spinner;
}

// Function to remove spinner
function removeSpinner(spinner) {
    spinner.remove();
}

var submit = document.getElementById("login");

submit.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default form submission

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var button = event.target; // Get the button that was clicked

    if (!isValidEmail(email)) {
        alert("Enter a valid email address");
        return; // Exit the function early if email is not valid
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        return; // Exit the function early if password is too short
    }

    if (email === "" || password === "") {
        alert("Fill All input fields");
        return; // Exit the function early if any other field is empty
    }

    // Add spinner to the button
    const spinner = createSpinner(button);

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            window.location.href = "index1.html";
            // Remove spinner
            removeSpinner(spinner);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            // Remove spinner
            removeSpinner(spinner);
        });

});

function isValidEmail(email) {
    // Regular expression for validating email addresses
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

//reset password

const reset = document.getElementById("reset");

reset.addEventListener("click", function() {
    var email = document.getElementById("email").value;
    if (email == "") {
        alert("Please enter your email.");
    } else {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                // ..
                alert("Password Reset Email Sent to " + email);
                window.location.reload();
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
                // ..
            });
    }
});
