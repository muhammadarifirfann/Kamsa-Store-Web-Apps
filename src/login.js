// Konfigurasi Firebase
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Inisialisasi Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Fungsi login
function login() {
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Jika login sukses, arahkan ke landing page
            window.location.href = 'landingpage.html'; // Ganti dengan URL landing page kamu
        })
        .catch((error) => {
            alert("Login gagal: " + error.message);
        });
}

// Event listener untuk tombol login
document.querySelector('button[type="button"]').addEventListener('click', login);
