import React, {Component} from "react";
import {connect} from "react-redux";
import './HeaderM.css';
import 'antd/dist/antd.css';
import { Popover} from 'antd';
import {setSelectedNotion,setSelectedNotionType} from "../../actions/actions";
import {map,concat,uniq,includes} from 'lodash';
// import _ from "./../../i18n";

class HeaderM extends Component{

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            toggled: false,
            hovered: false,
            content : '',
            title : '',
        }
    }

handleClick(){
    this.setState({toggled : !this.state.toggled});
}

    hide = () => {
        this.setState({
            videos:null,
            images:null,
            pdfs:null,
            extractedTypes:null,
            notion:null,
            hovered: false,
            othersHovered:false,
        });
    };

    componentDidMount() {
        if (null !== this.state.notion){
            if (null !== this.state.notion.videos){
                this.setState({videos : this.state.notion.videos})
            }
            if (null !== this.state.notion.images){
                this.setState({images : this.state.notion.images})
            }
            if (null !== this.state.notion.pdfs){
                this.setState({pdfs : this.state.notion.pdfs})
            }
        }
    }

    static getDerivedStateFromProps(props, state) {
        state.notion=props.notion.notion;
        if (null !== props.notion.notion){
                state.images=props.notion.notion.images;
                state.videos=props.notion.notion.videos;
                state.pdfs=props.notion.notion.pdfs;
                state.extractedTypes = uniq(concat(map(state.pdfs, 'type'),map(state.images, 'type'),map(state.videos, 'type')));
        }
        return state;
    }
    mouseLeaveTest=()=> {
        this.setState({
            hovered: false,
        });
    };
    handleHoverChange = (receivedtitle,receivedContent,visible) => {
        // console.log('first', receivedtitle,visible, this.state.hovered, othersHovered, this.state.othersHovered);
        this.setState({
            hovered: visible,
            title: receivedtitle,
            content: receivedContent,
        });
    };

    render() {
        return (
            <div>
                <div className="container">
                <div className="component">
                    <button className="cn-button" id="cn-button" onClick={this.handleClick}>Menu</button>
                    <div className={"cn-wrapper"+ (this.state.toggled ? ' opened-nav' : '')} id="cn-wrapper">
                        <ul>
                            <li> <Popover                                 content={this.state.content}
                                                                          title={this.state.title}
                                                                          trigger="hover"
                                                                          onMouseLeave={()=> this.mouseLeaveTest()}
                                                                          visible={false}
                                                                          onVisibleChange={() => this.handleHoverChange('Exemples','Apprenez plus',!this.state.hovered)}><a className={(includes(this.state.extractedTypes, 'Example') ? '' : 'notAllowedNow')} onClick={() => this.props.setSelectedNotionType('Example')} href="#"><span className="icon-indent-right"></span></a></Popover> </li>

                            <li> <Popover                                 content={this.state.content}
                                                                          title={this.state.title}
                                                                          trigger="hover"
                                                                          onMouseLeave={()=> this.mouseLeaveTest()}
                                                                          visible={this.state.othersHovered}
                                                                          onVisibleChange={() => this.handleHoverChange('Exercices','Testez vos connaissances',!this.state.hovered)}><a className={(includes(this.state.extractedTypes, 'Exercice') ? '' : 'notAllowedNow')} onClick={() => this.props.setSelectedNotionType('Exercice')} href="#"><span className="icon-edit "></span></a></Popover></li>

                            <li> <Popover                                 content={this.state.content}
                                                                          title={this.state.title}
                                                                          trigger="hover"
                                                                          visible={this.state.hovered}
                                                                          onVisibleChange={() => this.handleHoverChange('Cours','Concentrez vous',!this.state.hovered)}><a className={(includes(this.state.extractedTypes, 'Cours') ? '' : 'notAllowedNow')} onClick={() => this.props.setSelectedNotionType('Cours')} href="#"><span className="icon-book"></span></a></Popover></li>

                            <li > <Popover                                content={this.state.content}
                                                                          title={this.state.title}
                                                                          trigger="hover"
                                                                          onMouseLeave={()=> this.mouseLeaveTest()}
                                                                          visible={false}
                                                                          onVisibleChange={() => this.handleHoverChange('Blog','Exprimez vous ! (Disponible prochainement)',!this.state.hovered)}><a className={"notAllowedNow"} href="#"><span className="icon-comments"></span></a></Popover></li>

                            <li> <Popover                                 content={this.state.content}
                                                                          title={this.state.title}
                                                                          trigger="hover"
                                                                          onMouseLeave={()=> this.mouseLeaveTest()}
                                                                          visible={false}
                                                                          onVisibleChange={() => this.handleHoverChange('Validation','Debloquer la notion suivante',!this.state.hovered)}><a className={(includes(this.state.extractedTypes, 'Quiz') ? '' : 'notAllowedNow')} onClick={() => this.props.setSelectedNotionType('Quiz')} href="#"><span className="icon-ok-sign"></span></a></Popover></li>
                        </ul>
                    </div>
                    <div id="cn-overlay" className={"cn-overlay"+ (this.state.toggled ? ' on-overlay' : '')}></div>
                </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    notion: state.notion,
});

const mapDispatchToProps = {
    setSelectedNotion,
    setSelectedNotionType,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderM);
