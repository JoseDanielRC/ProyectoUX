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
    const [cards, setCards] = useState([]);
    const [docid, setDocid] = useState('');
    var tarjetasdb = [];
    const clearInputs = () => {
        setEmail("");
        setPassword("");
    }
    const clearErrors = () => {
        setEmailError("");
        setPasswordError("");
    }
    const handleLogin = async () => {
        document.getElementById("titulo").innerHTML = "Iniciar Sesion";
        clearErrors();
        await fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch((err) => {
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
            }).then(() => {
                cargarTarjetas();
            })
    }
    const cargarTarjetas = async () => {
        let x = 1;
        tarjetasdb = [];
        await fire.firestore().collection('users').where("email", "==", email).get().then(DocumentSnapshot => {
            DocumentSnapshot.docs.forEach(doc => {
                if (doc.exists) {
                    doc.data().tarjetas.forEach(tar => {
                        if (tar != null) {
                            const name = tar.name;
                            const number = tar.number;
                            const expiry = tar.expiry;
                            const cvc = tar.cvc;
                            const obj = {
                                'name': name,
                                'expiry': expiry,
                                'number': number,
                                'cvc': cvc
                            }
                            tarjetasdb.push(obj);
                        }
                    });
                    setCards(tarjetasdb);
                    setDocid(doc.id)
                } else {
                    alert('no existeeee');
                }
            })
        });
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
                cargarTarjetas();
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
    const authListener = async () => {
        await fire.auth().onAuthStateChanged((user) => {
            if (user) {
                tarjetasdb = [];
                clearInputs();
                setUser(user);
                fire.firestore().collection('users').where("id", "==", user.uid).get().then(DocumentSnapshot => {
                    DocumentSnapshot.docs.forEach(doc => {
                        if (doc.exists) {
                            doc.data().tarjetas.forEach(tar => {
                                if (tar != null) {
                                    const name = tar.name;
                                    const number = tar.number;
                                    const expiry = tar.expiry;
                                    const cvc = tar.cvc;
                                    const obj = {
                                        'name': name,
                                        'expiry': expiry,
                                        'number': number,
                                        'cvc': cvc
                                    }
                                    tarjetasdb.push(obj);
                                }
                            });
                            setCards(tarjetasdb);
                            setDocid(doc.id);
                        } else {
                            alert('no existeeee');
                        }
                    })
                });
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
            {user ? (
                <>
                    <Home
                        user={user}
                        uid={user.uid}
                        email={user.email}
                        tarjetas={cards}
                        docid={docid}
                        useEffect={useEffect}
                    />
                </>
            ) : (
                    <>
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
                    </>
                )}


        </div>
    );
}
export default App;