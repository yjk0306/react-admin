import React,{Component} from "react";
import { Row, Col ,Icon ,Card } from 'antd';
import "./index.less";
import EchartDash from "./echarts";

const { Meta } = Card;

export default class Dashborad extends Component {
     constructor(){
           super()

           this.state = {
                 events:[
                       {name:"user",handle:"登录页面"},
                       {name:"user",handle:"进入首页"},
                       {name:"user",handle:"离开页面"}
                 ]
           }
     } 
    render(){
        return (
            <div className="gutter-example dashbox">
                <Row gutter={16}>
                <Col className="gutter-row" span={8}>
                   <div className="dash_left">
                        <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96"  style={{fontSize:'45px'}}/>
                        <div>
                            <div>喜欢</div>
                            <div>125 </div>
                         </div>
                   </div>
                   <div className="dash_left">
                         <Icon type="qq" theme="outlined"  twoToneColor="red"  style={{fontSize:'45px'}}/>
                         <div>
                            <div>QQ</div>
                            <div>452426630 </div>
                         </div>
                   </div>
                   <div className="dash_left">
                        <Icon type="weibo" theme="outlined"  style={{fontSize:'45px'}}/>
                        <div>
                            <div>微博</div>
                            <div>dsiplay_flex </div>
                         </div>
                   </div>
                   <div className="dash_left">
                         <Icon type="gitlab" theme="outlined"  style={{fontSize:'45px'}}/>
                         <div>
                            <div>其他</div>
                            <div>gitlab </div>
                         </div>
                   </div>
                </Col>
                <Col className="gutter-row" span={16}>
                      <div className="dash_echart">
                      <EchartDash />
                      </div>
                </Col>
    
                </Row>
                <div style={{ background: '#ECECEC', padding: '30px' }}>
                  <Row gutter={16}>
                        <Col span={6}>
                        <Card title="事件" 
                        hoverable
                        bordered={false}>
                            {
                                  this.state.events.map((item,index)=>{
                                        return (<div key={index}>{item.name}:{item.handle}</div>)
                                       
                                  })
                            }
                        </Card>
                        </Col>
                        <Col span={6}>
                        <Card  
                        style={{width:"100%"}}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        bordered={false}>
                              <Meta
                                    title="Europe Street beat"
                                    description="www.instagram.com"
                              />

                        </Card>
                        </Col>
                        <Col span={12}>
                        <Card title="饼图" bordered={false}>
                        
                        </Card>
                        </Col>
                  </Row>
                  </div>
          </div>
        )
    }

}