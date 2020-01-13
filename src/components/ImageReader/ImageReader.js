import React, {Component} from "react";
import {connect} from "react-redux";
import './ImageReader.scss';
import 'antd/dist/antd.css';
import Viewer from 'react-viewer';
// import _ from "./../../i18n";
// import {Button, Icon} from 'antd';

class ImageReader extends Component{
    constructor(props) {
        super(props);
        this.state = {
            source: this.props.url,
            visible: false,
        };
    }

    render() {
        return (
            <div>
                {/*<Button className={"buttonImg"} onClick={() => { this.setState({visible : true}); } }>show</Button>*/}
                {/*<Button onClick={() => { this.setState({visible : true}); } } type="primary" size={'large'}><span><Icon type="file-image" /></span>*/}
                {/*    Voir les images*/}
                {/*</Button>*/}
                {/*<span>*/}
                {/*      <Icon type="file-image" style={{color : 'black'}} onClick={() => { this.setState({visible : true}); } }/>*/}
                {/*    </span>*/}
                <a href="#"><span onClick={() => { this.setState({visible : true}); }} className="icon-picture"></span></a>
                <Viewer
                    visible={this.state.visible}
                    onClose={() => { this.setState({visible : false}); } }
                    images={[{src: this.props.url, alt: ''}]}
                    downloadable={false}
                    noImgDetails={false}
                    showTotal={true}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageReader);
