import { Form, Icon, Input, Button, Checkbox } from 'antd';
import React from 'react';

import { FacebookProvider, LoginButton } from 'react-facebook';

const FormItem = Form.Item;

class LoginForm extends React.Component {

  handleResponse = (data) => {
    console.log(data);
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