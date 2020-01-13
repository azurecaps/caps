import React, {Component} from "react";
import {connect} from "react-redux";
import './PdfReader.scss';
import 'antd/dist/antd.css';
import { Document, Page, Text, View, StyleSheet, PDFViewer} from '@react-pdf/renderer';
import _ from "./../../i18n";

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});

// Create Document Component
const MyDocument = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text></Text>
            </View>
            <View style={styles.section}>
                <Text></Text>
            </View>
        </Page>
    </Document>
);

class PdfReader extends Component{
    render() {
        return(
            <div className={"h-screen"} style={{ marginLeft: '0.5em'}}>
                <PDFViewer src={this.props.url}
                           style={{padding:'1em', height: '100%', width: '100%'}}
                >
                    <MyDocument/>
                </PDFViewer>
            </div>
        );
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(PdfReader);
