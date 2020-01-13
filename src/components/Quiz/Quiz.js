import React, {Component} from "react";
import {connect} from "react-redux";
import './Quiz.scss';
import 'antd/dist/antd.css';
import {Tabs, Radio  } from 'antd';
import ImageReader from "../ImageReader/ImageReader";
// import _ from "./../../i18n";
// import { Menu, Icon} from 'antd';
// import axios from "axios";

const { TabPane } = Tabs;

class Quiz extends Component {
    state = {
        value: 1,
    };

    onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    };

    render() {
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        };
        return (
            <div className={"h-screen"} style={{padding:'0.5em'}}>
                <Tabs defaultActiveKey="1" tabPosition={'left'} style={{ height: 700 }}>
                    <TabPane tab={`Exercise-1`} key={'1'}>
                        <h2>Qu'aimez vous manger ? (Cliquez sur l'icone pour voir l'image)</h2>
                        <Radio.Group onChange={this.onChange} value={this.state.value}>
                            <Radio style={radioStyle} value={1}>
                                Couscous de soukaina
                            </Radio>
                                <ImageReader url={ 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/102627415/original/9686a70f2a1178a4754decb238efe4c625568631/moroccan-food-how-to-cook-a-traditional-kouskous.jpg'}/>
                            <Radio style={radioStyle} value={2}>
                                Harira de Tarik
                            </Radio>
                            <ImageReader url={ 'https://es1-ladleandspricell.netdna-ssl.com/wp-content/uploads/2018/02/moroccan-chickpea-lentil-soup-harira-4.jpg'}/>
                            <Radio style={radioStyle} value={3}>
                                Bed and Maticha de Balaoui
                            </Radio>
                            <ImageReader url={ 'http://www.cuisinonsencouleurs.fr/wp-content/uploads/2014/02/image-7-.jpeg'}/>

                        </Radio.Group>
                    </TabPane>
                    <TabPane tab={`Exercise-2`} key={'2'}>
                        Content of tab 2
                    </TabPane>
                    <TabPane tab={`Exercise-3`} key={'3'}>
                        Content of tab 3
                    </TabPane>
                    <TabPane tab={`Exercise-4`} key={'4'}>
                        Content of tab 4
                    </TabPane>

                    {/*{[...Array(50).keys()].map(i => (*/}
                    {/*    <TabPane tab={`Exercise-${i}`} key={i}>*/}
                    {/*        Content of tab {i}*/}
                    {/*    </TabPane>*/}

                    {/*))}*/}
                </Tabs>
            </div>
        );
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);