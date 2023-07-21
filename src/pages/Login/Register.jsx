/* eslint-disable no-unused-vars */
import React,{useState} from 'react'
import { Container,Row,Col,Form,FormGroup,Button } from 'reactstrap'
import { Link } from 'react-router-dom'

import './Login.css'
import registerImg from './assets/register.png'
import userIcon from './assets/user.png'

const Register = () => {
  const [credentials,setCredentials]=useState({
    userName:undefined,
    email:undefined,
    number:undefined,
    password:undefined
})
  const handleChange= e =>{
    setCredentials(prev=>({...prev,[e.target.id]:e.target.value}))
};
  const handleClick=e=>{
    e.preventDefault();
  }
  return <section id='login'>
    <Container>
      <Row>
        <Col lg='8' className='m-auto'>
          <div className="login__container d-flex justify-content-between">
            <div className="login__img">
              <img src={registerImg} alt="" />
            </div>
            <div className="login__form">
              <div className="user">
                <img src={userIcon} alt="" />
              </div>
              <h2>Register</h2>
              <Form onSubmit={handleClick}>
              <FormGroup>
                  <input type="text" placeholder='Username' required id='userName' onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                  <input type="email" placeholder='Email' required id='email' onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                  <input type="number" placeholder='Mobile Number' required id='number' onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                  <input type="password" placeholder='Password' required id='password' onChange={handleChange}/>
                </FormGroup>
                <Button className="btn secondary__btn auth__btn" type='submit'>Create Account</Button>
              </Form>
              <p>Already have an account?<Link to='/login'><b>Login</b></Link></p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
}

export default Register