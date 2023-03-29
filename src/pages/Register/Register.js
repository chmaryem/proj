import React from "react";
import "../Register/register.css";
import { Form, Input, message } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../../redux/features/alertSlice";
const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //form handler
  const onfinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post("/api/v1/user/register", values);
      dispatch(hideLoading());
      if (res.data.success) {
        message.success("Register Successfully!");
        navigate("/login");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Something Went Wrong");
    }
  };
  return (
    
    <div className="signup-container">
      <div className="signup-form-container ">
      <div className="right">
          <h1>Welcome Back</h1>
          <Link to="/login" >
          <button type="button" className="white_btn">
							Sign in
						</button>
           </Link>
          </div>
      
          <div className="left">
        <Form
          onFinish={onfinishHandler}
          className="register-form"
        >
          <h1>Create Account</h1>
          <Form.Item  name="name">
            <Input type="text"
             required 
             placeholder=" Name"
             className="input"
            
            />
          </Form.Item>
          <Form.Item  name="email">
            <Input type="email" 
            required
            placeholder=" Email"
            className="input" />
          </Form.Item>
          <Form.Item name="password">
            <Input type="password"
             required
             placeholder=" Password"
            className="input" />
          </Form.Item>

          
          <button className="green_btn" type="submit">
            Register
          </button>
        </Form>
        
      </div>
      </div>
		</div>
  );
};

export default Register;
