import React from "react";
import "../Login/login.css";
import { Form, Input, message } from "antd";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../../redux/features/alertSlice";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import Header from "../../components/Header";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //form handler
  const onfinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post("/api/v1/user/login", values);
      window.location.reload();
      dispatch(hideLoading());
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success("Login Successfully");
        navigate("/home");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("something went wrong");
    }
  };
  return (
  
    
      
    <div className="login_container">
      
    <div className="login_form_container">
      <div className="left">
  
      <Form onFinish={onfinishHandler} className="register-form" >
        <h3 className="text-center">Login to Your Account</h3>

        <Form.Item  name="email">
          <Input type="email" 
          placeholder="Email"
          required
          className="input" />
        </Form.Item>
        <Form.Item  name="password">
          <Input type="password"
          placeholder="Password"
           required
          className="input" />
        </Form.Item>
       
        <button className="green_btn" type="submit">
          Login
        </button>
      </Form>
      </div>
      <div className="right">
      <h1>New Here ?</h1>
      <Link to="/register" >
      <button type="button" className="white_btn">
							sign Up
						</button>
        </Link>
    </div>
    </div>
    </div>
   
   

);
};

export default Login;
