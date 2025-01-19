// Original content of login.js before updates
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const signUpForm = document.getElementById('sign-up-form');
    const loginSection = document.getElementById('login-section');
    const signUpSection = document.getElementById('sign-up-section');
    const switchToLogin = document.getElementById('switch-to-login');
  
    let registeredUsers = [];
  
    function handleSignUpFormSubmission(e) {
        e.preventDefault();
        const name = document.getElementById('Name').value;
        const email = document.getElementById('Email').value;
        const password = document.getElementById('Password').value;
  
        if (registeredUsers.some(user => user.email === email)) {
            alert('Email is already registered.');
            return;
        }
  
        registeredUsers.push({ name, email, password });
        alert('Sign-up successful!');
        signUpSection.classList.add('hidden');
        loginSection.classList.remove('hidden');
    }
  
    function handleLoginFormSubmission(e) {
        e.preventDefault();
        const email = document.getElementById('Gmail').value;
        const password = document.getElementById('password').value;
  
        const user = registeredUsers.find(user => user.email === email && user.password === password);
        if (user) {
            alert(`Welcome back, ${user.name}!`);
            window.location.href = './index.html';
        } else {
            alert('Invalid credentials.');
        }
    }
  
    switchToLogin.addEventListener('click', () => {
        signUpSection.classList.add('hidden');
        loginSection.classList.remove('hidden');
    });
  
    signUpForm.addEventListener('submit', handleSignUpFormSubmission);
    loginForm.addEventListener('submit', handleLoginFormSubmission);
  });
  