import React, {Component} from "react";
import {connect} from "react-redux";
import './RightSideBar.scss';
import 'antd/dist/antd.css';
import { Menu, Icon, Layout } from 'antd';
import {filter} from "lodash";
import {setSelectedNotionBodyType} from "../../actions/actions";
// import _ from "./../../i18n";

const { Content, Sider } = Layout;

const { SubMenu } = Menu;
let i=0,j=0,z=0;
class RightSideBar extends Component {
    state = {
        videos:null,
        images:null,
        pdfs:null,
        notionType:null,
        notion:null,
        collapsed: true,
        capsules:null,
    };

    static getDerivedStateFromProps(props, state) {
        i=0; j=0; z=0;
        state.notion=props.notion.notion;
        if (null !== props.notion.notion){
            state.images=filter(props.notion.notion.images, {'type' : props.notion.selectedType});
            state.videos=filter(props.notion.notion.videos, {'type' : props.notion.selectedType});
            state.pdfs=filter(props.notion.notion.pdfs, {'type' : props.notion.selectedType});
            state.notionType=props.notion.selectedType;
        }

        return state;
    }

    onCollapse = collapsed => {
        this.setState({ collapsed });
    };

    render() {
        const imageBitSection =(image) =>{
            i++;
            return <Menu.Item key={i} onClick={()=>{this.props.setSelectedNotionBodyType({type:'ImageViewer', url:image.url})}}>
                <Icon type="picture" />
                <span>Image</span>
            </Menu.Item>;
        };

        const imagesSection = () => {
            if (null=== this.state.images || null===this.state.notionType || 0=== this.state.images.length){
                return;
            }
            if (1===this.state.images.length){
                return imageBitSection(this.state.images[0]);
            }
            i++;
            return <SubMenu
                key={"sub"+i}
                title={
                    <span>
                  <Icon type="file-image" />
                  <span>Images</span>
                </span>
                }
            >
              {this.state.images.map((image) =>{return imageBitSection(image)})}
            </SubMenu>
        };

        const videoBitSection =(video) =>{
            i++;
            return <Menu.Item key={i} onClick={()=>{this.props.setSelectedNotionBodyType({type:'VideoViewer', url:video.url})}}>
                <Icon type="play-circle" />
                <span>Video</span>
            </Menu.Item>;
        };

        const videosSection = () => {
            if (null=== this.state.videos || null===this.state.notionType || 0=== this.state.videos.length){
                return;
            }
            if (1===this.state.videos.length){
              return videoBitSection(this.state.videos[0]);
            }
            i++;
            return <SubMenu
                key={"sub"+i}
                title={
                    <span>
                  <Icon type="youtube" />
                  <span>Videos</span>
                </span>
                }
            >
                {this.state.videos.map((video) =>{return videoBitSection(video)})}
            </SubMenu>
        };
        const pdfBitSection =(pdf) =>{
            i++;
            return <Menu.Item key={i} onClick={()=>{this.props.setSelectedNotionBodyType({type:'PdfViewer', url:pdf.url})}}>
                <Icon type="file-pdf" />
                <span>PDF</span>
            </Menu.Item>;
        };
        const pdfsSection = () => {
            if (null=== this.state.pdfs || null===this.state.notionType || 0=== this.state.pdfs.length){
                return;
            }

            if (1===this.state.pdfs.length){
                return pdfBitSection(this.state.pdfs[0]);
            }

            i++;
            return <SubMenu
                key={"sub"+i}
                title={
                    <span>
                  <Icon type="file-pdf" />
                  <span>PDFs</span>
                </span>
                }
            >
                {this.state.pdfs.map((pdf) =>{return pdfBitSection(pdf)})}
            </SubMenu>
        };

        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Content></Content>
                <Sider reverseArrow={true} collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline">
                        {imagesSection()}
                        {videosSection()}
                        {pdfsSection()}
                    </Menu>
                </Sider>
            </Layout>
        );
    }
}


const mapStateToProps = state => ({
    notion: state.notion,
});

const mapDispatchToProps = {
    setSelectedNotionBodyType,
};

export default connect(mapStateToProps, mapDispatchToProps)(RightSideBar);
