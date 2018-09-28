import React,{Component} from "react";
import { Layout  } from 'antd';
import SiderBar from "../../component/siderbar"
 import HTop from "../../component/htop"
import { Route, Redirect ,Switch} from 'react-router-dom';

// import Navtop from "../.././components/navstop";

  import Dashborad from ".././dashborad";
  import User from ".././user";
//  import Goods from ".././goods";
//  import Message from ".././message";
// import Develop from ".././develop";

import "./home.less";




const { Header, Footer, Sider, Content } = Layout;

class Home extends Component {
   constructor(props){
    super(props)
    this.state = {
        collapsed: false,
        
      };
      console.log(this.props)

   }

   onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }
     render(){
         return(
             <div className="home_box">
               <Layout> 
                    <Sider
                     collapsible
                     collapsed={this.state.collapsed}
                     onCollapse={this.onCollapse}
                    >
                      <SiderBar isshow={this.state.collapsed}></SiderBar>
                    </Sider>
                    <Layout>
                        <Header>
                        <HTop />
                        </Header>
                        <Content>
                          <div className="lay_content_box">

                    
                             <Switch>
                                    <Route path="/home/dashborad" component={Dashborad}/>
                                    <Route path="/home/message" component={User}/>
                                {/*     <Route path="/homepage/goods" component={Goods}/>
                                    <Route path="/homepage/message" component={Message}/>*/}
                            </Switch>  
                            </div>
                        </Content>
                        <Footer style={{zIndex:"100",background:"black"}}></Footer>
                    </Layout>
               </Layout> 
             </div>
         )
     }

}

export default Home;