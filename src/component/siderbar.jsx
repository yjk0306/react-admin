import React,{Component} from 'react';
import "./component.less";
import { Menu, Icon } from 'antd';
import {Link} from "react-router-dom";

const SubMenu = Menu.SubMenu;

export default class SiderBar extends Component{
  constructor(props){
    super(props)
    this.state = {
      collapsed: false,
    }
  }
  

  render(){
   
    return(
      <div >
      <div className="menulogo" style={{width:this.props.isshow?80:200}}>
        <img alt="logo" style={{width:32,height:32}} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"></img>
        <img alt="Ant Design" style={{width:84,height:16,display:this.props.isshow?'none':'block'}} src="https://gw.alipayobjects.com/zos/rmsportal/DkKNubTaaVsKURhcVGkh.svg"></img>
      </div>

      <Menu
        defaultSelectedKeys={['1']}
        mode="inline"
        inlineCollapsed={this.state.collapsed}
      >
        <Menu.Item key="1">
          <Icon type="pie-chart" />
          <span>
            <Link to="/home/dashborad">首页</Link>
          </span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="desktop" />
          <span>
          <Link to="/home/message">账号信息</Link>
          </span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="inbox" />
          <span>
          <Link to="/home/goods">我的商品</Link>
          </span>
        </Menu.Item>
        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>开发页面</span></span>}>
          <Menu.Item key="5">
          <Link to="/home/develop">增</Link>
          </Menu.Item>
          <Menu.Item key="6">删</Menu.Item>
          <Menu.Item key="7">改</Menu.Item>
          <Menu.Item key="8">查</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
    )
  } 
 
}