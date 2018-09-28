import React, { Component } from "react";
import "./login.less";

import { Form, Icon, Input, Checkbox ,notification } from 'antd';

const FormItem = Form.Item;


class Login extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if(values.userName=="admin"&&values.password=="admin"){
          sessionStorage.setItem("user",values.userName)
          this.props.history.push("/home/dashborad")
        }else{
          notification["error"]({
            message: '登录失败',
            description: '账号admin,密码admin',
          });
        }
        
      }
    });
  }
  moves(e){
    let btn = document.querySelector(".login_btn");
    let x = e.nativeEvent.offsetX;
    let y = e.nativeEvent.offsetY;
    btn.style.setProperty('--x', `${ x }px`)
    btn.style.setProperty('--y', `${ y }px`)
  }
  
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={'loginbox'} ref="mybtn">
             <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                  {getFieldDecorator ('userName',
                  {
                    rules: [{ required: true, message: '请输入账号!' }],
                  }
                  )(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                  )
                  }
                </FormItem>
                <FormItem>
                  {getFieldDecorator ('password', {
                    rules: [{ required: true, message: '请输入密码!' }],
                    }
                    )(
                      <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )
                    }
                </FormItem>
                <FormItem ref="formitem">
                  {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                  })(
                    <Checkbox>记住我</Checkbox>
                  )}
                  <a className="login-form-forgot" href="">忘记密码</a>
                    <div className="login_btn"  onClick={this.handleSubmit}  onMouseMove={this.moves.bind(this)} >
                      <span>登录</span>
                    </div>
                </FormItem>
              </Form>         
      </div>
    );
  }
}

Login = Form.create({})(Login);

export default Login;