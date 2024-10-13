import { BASE_URL } from '../..';

const doRegister = async (name, username, password, navigate) => {
    const response = await fetch(`${BASE_URL}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, username, password }),
    });

    if (response.ok) {
        const success = doLogin(username, password, navigate)

        if(success){
            return true
        }else{
            return false
        }       

    } else {
        alert('Registration failed. Please try again.');
        return false
    }
}
const doLogin = async (username, password, navigate) => {
    const response = await fetch(`${BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
        const data = await response.json();
        console.log("data:",data);
        localStorage.setItem('token', data.token);
        localStorage.setItem('id', data.id);
        navigate('/'); // Redirect after login

        return true
    } else {
        alert('Login failed. Please check your credentials.');
        return false
    }
}

export {doLogin, doRegister};