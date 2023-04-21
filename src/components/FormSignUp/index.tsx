import Button from 'components/Button'
import Checkbox from 'components/Checkbox'
import { Container } from 'components/Container'
import DropdownList from 'components/DropdownList'
import TextField from 'components/TextField'
import { useState } from 'react'
import * as S from './styles'
import React from 'react'

const FormSignUp = () => {
  const saveform = () => {
    console.log('salvo')
  }

  return (
    <S.Wrapper>
      <Container>
        <h2 className="signintitle">Become a Customer</h2>
        <p>
          Submit the form below to become a new Onfire customer. Please note
          that Onfire does not sell to end users. If you are an existing
          customer, sign in or register for an online account.
        </p>
        <p className="requiredLabel">
          <b>*Required Fields.</b>
        </p>

        <h2>Contact Information</h2>
        <form onSubmit={saveform}>
          <div className="inputs">
            <div className="formColumn">
              <input className="inputLogin" placeholder="Company *" required />
              <input className="inputLogin" placeholder="Bussiness Phone" />
              <input className="inputLogin" placeholder="E-mail Address *" />
            </div>
            <div className="formColumn">
              <input className="inputLogin" placeholder="Name *" required />
              <input
                className="inputLogin"
                placeholder="Mobile Phone *"
                required
              />
              <input className="inputLogin" placeholder="Company Website" />
            </div>
          </div>
          <div className="addresses">
            <h2>Billing Address</h2>
            <div className="inputs">
              <div className="formColumn">
                <input
                  className="inputLogin"
                  placeholder="Address *"
                  required
                />
                <input
                  className="inputLogin"
                  placeholder="Zip Code *"
                  required
                />
              </div>

              <div className="formColumn">
                <input className="inputLogin" placeholder="City *" required />
                <DropdownList />
              </div>
            </div>
            <Checkbox label="Use billing address as shipping address" />

            <div className="shippingInputs">
              <h2>Shipping Address</h2>
              <div className="inputs">
                <div className="formColumn">
                  <input
                    className="inputLogin"
                    placeholder="Address *"
                    required
                  />
                  <input
                    className="inputLogin"
                    placeholder="Zip Code *"
                    required
                  />
                </div>

                <div className="formColumn">
                  <input className="inputLogin" placeholder="City *" required />
                  <DropdownList />
                </div>
              </div>
            </div>
          </div>
          <h2>Company Information</h2>
          <div className="inputs">
            <div className="formColumn">
              <DropdownList />
              <DropdownList />
            </div>

            <div className="formColumn">
              <DropdownList />
              <DropdownList />
            </div>
          </div>

          <Checkbox label="I confirm that i am a licensed  installer and i understand that Onfire does not sell direct to end users" />
          <Checkbox label="I have read and agree to the terms and conditions" />

          <Button className="signinBtn" size="medium">
            SIGN IN
          </Button>
        </form>
      </Container>
    </S.Wrapper>
  )
}

export default FormSignUp
