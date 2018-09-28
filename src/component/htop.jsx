import React, { Component } from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import "./component.less";
const menu = (
    <Menu>
      <Menu.Item>
              <span  onClick={this.gologin}>退出登录</span>
      </Menu.Item>
    </Menu>
  );

export default class HeaderTop extends Component{
    constructor(props){
        super(props)
        this.state = {
            username:sessionStorage.getItem("user")
        }
        this.gologin = this.gologin.bind(this)
        console.log(this.props)
    }
    gologin(){
        console.log("dddd")
         this.props.history.push("/");
    }
    render(){
        return(
            <div className='headerbox'>
               
                <div style={{marginRight:10}}>
                    <Dropdown overlay={menu}>
                      <a href="">{this.state.username}
                       <Icon type="down" />
                       </a>          
                    </Dropdown>
                </div>
                <div><Icon type="home" /></div>
            </div>
        )
    }
}