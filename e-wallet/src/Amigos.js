import React, { Component, useEffect, useState } from 'react'
import styled from 'styled-components'
import fire from './Fire';
import Top from './Top';
import './Amigos.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
//add friend
// transfer
//lista de 
function App() {
    const [user] = useAuthState(fire.auth());

    return (
        <div className="App">

            <div>
                <Top />
            </div>
            <section>
                <Chat />
            </section>
        </div>
    );
}

function Chat() {
    const messagesRef = fire.firestore().collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);
    const [messages] = useCollectionData(query, { idField: 'id' });
    const [formValue, setFormValue] = useState('');

    const sendMessage = async (e) => {
        e.preventDefault();
        const { uid, email } = fire.auth().currentUser;
        await messagesRef.add({
            text: formValue,
            createdAt: new Date(),
            uid,
            email
        });
        setFormValue('');
    }

    return (

        <>
            <div>
                <div >
                    {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} email={fire.auth().currentUser.email} />)}
                    <form color="black" onSubmit={sendMessage}>
                        <div>
                            <input value={formValue} onChange={(e) => setFormValue(e.target.value)} />
                            <button class="btn btn-secondary btn-rounded" type="submit">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

function ChatMessage(props) {

    const { text, uid, email } = props.message;
    const messageClass = uid === fire.auth().currentUser.uid ? 'sent' : 'recieved';
    return (
        <div className="messages-box">
            <div className="img-profile">
                <img className="avatar" src="https://www.iconfinder.com/data/icons/fillies-small/64/id-card-512.png" alt="" /> <strong>{email}</strong>
            </div>
            <div className="message-text">
                <p>{text}</p>
            </div>

        </div>
    )
}
export default App;