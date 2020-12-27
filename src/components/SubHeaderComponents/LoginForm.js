import { Form, Icon, Input, Button, Checkbox } from 'antd';
import React from 'react';
import axios from 'axios';
import { FacebookProvider, LoginButton } from 'react-facebook';
import {message} from 'antd';
import moment from 'moment';
const FormItem = Form.Item;

const url = 'https://app-manhhieubackend.herokuapp.com/api';

class LoginForm extends React.Component {

  handleResponse = (data) => {

    var data2 = {
      email: data.email, 
      password: data.id, 
      firstname: data.first_name, 
      lastname: data.last_name,
    }


    this.register(data2, () => {
            console.log("OK");
            message.success('Tạo tài khoản thành công!');
    });
    
  }


  register = (data, goLogin) => {
    axios.post(`${url}/user`,{
      email: data.email, 
      password: data.password, 
      firstname: data.firstname, 
      lastname: data.lastname,
      address: data.address,
      phone: data.phone,
      status: 1,
      createat: moment().format(),
      role: 0
    }).then(res => {
   
      goLogin();
    }).catch(err => {
      console.log(err);
    })
  }
 
  handleError = (error) => {
    this.setState({ error });
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onSubmit(values.email, values.password);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
           {getFieldDecorator('email', {
             rules: [{
              type: 'email', message: 'Email không hợp lệ!',
            }, {
              required: true, message: 'Vui lòng nhập email!',
            },]
          })(
            <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                   placeholder="Email" 
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Vui lòng nhập mật khẩu!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Mật khẩu" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Duy trì tài khoản</Checkbox>
          )}<br/>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Đăng nhập
          </Button>
          
       <FacebookProvider appId="807731209985250">
        <LoginButton
          scope="email"
          onCompleted={this.handleResponse}
          onError={this.handleError}
        >
          <span>Login bằng Facebook</span>
        </LoginButton>
      </FacebookProvider>
          

          {' '}
          hoặc <a href="#register" onClick={this.props.onRegister}>Đăng ký ngay!</a><br/>
          <a onClick={this.props.openForgotPassword} className="login-form-forgot" href="#forgot">Quên mật khẩu?</a>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(LoginForm);