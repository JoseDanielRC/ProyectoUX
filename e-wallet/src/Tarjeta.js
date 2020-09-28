import React, { Component, useEffect, useState } from 'react';
import { render } from 'react-dom'
import fire from './Fire';
import Styles from './Styles';
import Home from './Home';
import { Form, Field } from 'react-final-form';
import Card from './Card'
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate
} from './cardUtils'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const Tarjeta = (props) => {
  const {
    email,
    id,
    docid,
  } = props;

  const onSubmit = async (cardInfo) => {
    await sleep(300)
    const tarjetasdb = [];
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
          tarjetasdb.push(cardInfo);
          console.log(cardInfo);
          fire.firestore().collection("users").doc(docid).set({
            URL: "https://moorestown-mall.com/noimage.gif",
            description: "",
            email: email,
            id: id,
            imgname: "",
            isonline: false,
            isverify: false,
            password: doc.data().password,
            tarjetas: tarjetasdb
          })
          alert("Tarjeta agregada exit")
        }
      })
    });
  }
  return (
    <div>
      <Styles>
        <h1>🏁Agregar Tarjeta</h1>
        <h2>Ingrese datos</h2>
        <Form
          onSubmit={onSubmit}
          render={({
            handleSubmit,
            form,
            submitting,
            pristine,
            values,
            active
          }) => {
            const cardInfo = {
              number: values.number,
              name: values.nambe,
              expiry: values.expiry,
              cvc: values.cvc
            }
            return (
              <form onSubmit={handleSubmit}>
                <Card
                  number={values.number || ''}
                  name={values.name || ''}
                  expiry={values.expiry || ''}
                  cvc={values.cvc || ''}
                  focused={active}
                />
                <div>
                  <Field
                    name="number"
                    component="input"
                    type="text"
                    pattern="[\d| ]{16,22}"
                    placeholder="Card Number"
                    format={formatCreditCardNumber}
                  />
                </div>
                <div>
                  <Field
                    name="name"
                    component="input"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <Field
                    name="expiry"
                    component="input"
                    type="text"
                    pattern="\d\d/\d\d"
                    placeholder="Valid Thru"
                    format={formatExpirationDate}
                  />
                  <Field
                    name="cvc"
                    component="input"
                    type="text"
                    pattern="\d{3,4}"
                    placeholder="CVC"
                    format={formatCVC}
                  />
                </div>
                <div className="buttons">
                  <button type="submit" disabled={submitting}>
                    Submit
              </button>
                  <button
                    type="button"
                    onClick={form.reset}
                    disabled={submitting || pristine}
                  >
                    Reset
              </button>
                </div>
                <h2>Values</h2>
                <pre>{JSON.stringify(values, 0, 2)}</pre>
              </form>
            )
          }}
        />
      </Styles>
    </div>
  )
}


export default Tarjeta;