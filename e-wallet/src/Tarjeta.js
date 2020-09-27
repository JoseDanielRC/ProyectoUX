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
    alert("NUMERO CARD: " + cardInfo.name)
    alert("DOCID TARJETA: " + docid)
    const admin = require('firebase-admin');
    /*await fire.firebase().collection('users').doc(docid).update({
      tarjetas: admin.firestore.FieldValue.arrayUnion(cardInfo)
    });*/
    fire.firestore().collection('users').where("id", "==", id).get().then(DocumentSnapshot => {
      DocumentSnapshot.doc("WSYsDftbvGCzsjQ6YAji").update({
        tarjetas: admin.firestore.FieldValue.arrayUnion(cardInfo)
      })
    });
    alert("agregado")
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