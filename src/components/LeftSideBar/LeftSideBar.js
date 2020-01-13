import React, {Component} from "react";
import {connect} from "react-redux";
import './LeftSideBar.scss';
import 'antd/dist/antd.css';
import { Menu, Icon, Drawer, Button} from 'antd';
import axios from "axios";
import {setSelectedNotion, setSelectedNotionType} from "../../actions/actions";
// import _ from "./../../i18n";

const { SubMenu } = Menu;

class LeftSideBar extends Component{
    state = {
        capsules:null,
        drawerNotions:null,
        visible:false,
    };

    componentDidMount() {
        // let config= {headers:{'Authorization': "bearer " + localStorage.getItem('id_token')}}
        axios.get('https://b4-api.azurewebsites.net/api/Cours/?profileId=1').then((res)=>{
            console.log(res);
            if (res['data']){
                localStorage.setItem('capsules', JSON.stringify(res['data']));
                // console.log(JSON.parse(localStorage.getItem('capsules')));
                this.setState({capsules :JSON.parse(localStorage.getItem('capsules')) });
            }
        });
    }

    subMenuAndItemClicked = (notion) => {
        this.props.setSelectedNotionType(null);
        this.props.setSelectedNotion(notion);
    };

    render() {
        if (!this.state.capsules) {
            return (
                <>
                <div className={"px-3 py-3"} style={
                    {
                        overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        backgroundColor: '#001529',
                    }
                }>
                    <h1 align={'center'} style={{color: 'white'}}>Capsules are empty !</h1>

                </div>
                    </>
            );
        }

        const menuItem = (notion) => {
            return <Menu.Item key={notion.id} onClick={()=> {this.subMenuAndItemClicked(notion)}}>             <span>
                      <Icon type="file" />
                      <span>{notion.title}</span>
                    </span></Menu.Item>
        };

        const subMenuItems = (notions) => {
            if (!Array.isArray(notions)){
                return menuItem(notions);
            }

                return notions.map((notion)=> {

                    if (!Array.isArray(notion.notions)){
                        return menuItem(notion);
                    }

                    return <SubMenu key={notion.id}
                                      title={
                                          <span>
                      <Icon type="book" style={{color : 'black'}}/>
                      <span>{notion.title}</span>
                    </span>
                                      }
                        onTitleClick={()=> {this.subMenuAndItemClicked(notion)}}
                    >
                        {subMenuItems(notion.notions)}

                    </SubMenu>

                });
        };
        return (
            <>
                <div>
                    <div className={"px-3 py-3"} style={
                        {
                            overflow: 'auto',
                            height: '100vh',
                            position: 'fixed',
                            backgroundColor: '#001529',
                        }
                    }>
                        <h1 align={'center'} style={{color: 'white'}}>{this.state.capsules[0].title}</h1>
                    <Menu
                        style={{ width: 220 }}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode={'vertical'}
                    >
                        {subMenuItems(this.state.capsules[0]['notions'])}

                    </Menu>
                        {/*<Button type="primary" onClick={this.showDrawer}>*/}
                        {/*    Open*/}
                        {/*</Button>*/}
                        {/*<Drawer*/}
                        {/*    title="Basic Drawer"*/}
                        {/*    placement={'bottom'}*/}
                        {/*    closable={true}*/}
                        {/*    onClose={this.onClose}*/}
                        {/*    visible={this.state.visible}*/}
                        {/*>*/}
                        {/*    {Array.isArray(this.state.drawerNotions) ? this.state.drawerNotions.map((notion)=> <p>{notion.title}</p>) : <p>nothing to show</p>}*/}

                        {/*</Drawer>*/}
                    </div>
                 </div>
            </>
        );
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
    setSelectedNotion,
    setSelectedNotionType,
};

export default connect(mapStateToProps, mapDispatchToProps)(LeftSideBar);
