import React, { Component, useEffect, useState } from 'react';
import './App.css';
import Home from './Home';
import Login from './Login';
import fire from './Fire';
import firestore from './Fire';
const App = () => {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);
    const clearInputs = () => {
        setEmail("");
        setPassword("");
    }
    const clearErrors = () => {
        setEmailError("");
        setPasswordError("");
    }
    const handleLogin = () => {
        document.getElementById("titulo").innerHTML = "Iniciar Sesion";
        clearErrors();
        fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(async => {
                console.log(fire.auth().currentUser.tarjetas)
            }).catch((err) => {
                switch (err.code) {
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;
                    case "auth/wrong-password":
                        setPasswordError(err.message);
                        break;
                }
                alert(err)
            })
        // setUID(fire.auth().currentUser.uid);
    }
    const handleSignup = async () => {
        document.getElementById("titulo").innerHTML = "Crear Cuenta";
        clearErrors();
        await fire
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(async (result) => {
                await fire.firestore().collection("users").add({
                    id: result.user.uid,
                    email,
                    password,
                    URL: "https://moorestown-mall.com/noimage.gif",
                    description: "",
                    imgname: "",
                    isonline: false,
                    tarjetas: [],
                    isverify: false,
                });
            })
            .catch((err) => {
                switch (err.code) {
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailError(err.message);
                        break;
                    case "auth/weak-password":
                        setPasswordError(err.message);
                        break;
                }
            })
        //setUID(fire.auth().currentUser.uid);
    }
    const handleLogout = () => {
        fire.auth().signOut()
    }
    const authListener = () => {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                clearInputs();
                setUser(user);
            } else {
                setUser("");
                // localStorage.removeItem('user');
            }
        })
    }
    useEffect(() => {
        authListener();
    }, [])
    return (
        <div className="App">
            {console.log(fire.firestore().doc(`/users/${user.uid}`).get())}
            {user ? (
                <Home
                    uid={user.uid}
                    email={user.email}
                    tarjetas={
                        []
                    }
                />
            ) : (
                    <Login
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                        handleLogin={handleLogin}
                        handleSignup={handleSignup}
                        hasAccount={hasAccount}
                        setHasAccount={setHasAccount}
                        emailError={emailError}
                        passwordError={passwordError}
                    />
                )}

        </div>
    );
}
export default App;