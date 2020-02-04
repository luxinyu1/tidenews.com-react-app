import React from 'react';
import { Input, Select, Button, Radio, Tooltip, message } from 'antd';
import axios from 'axios';
import Editor from '../editor/editor';
import Uploader from '../uploader/uploader';
import './admin-write-area.css';

const { TextArea } = Input;

class AdminWriteArea extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            cid: null,
            title: '',
            EditorHTML: '',
            summary: '',
            historyTags: [],
            tags: [],
            category: 'politics'
        };
        this.onTitleChange = this.onTitleChange.bind(this);
        this.handleSummaryChange = this.handleSummaryChange.bind(this);
        this.handleTagChange = this.handleTagChange.bind(this);
        this.handleRadioChange = this.handleRadioChange.bind(this);
        this.submitAll = this.submitAll.bind(this);
    }
    getcid () {
        axios.get();
    }
    handleEditorChange = (result, HTML) => {
        // 通过给子组件传递父组件的this，就实现了子组件获得父组件函数的方法
        this.setState({
            EditorHTML: HTML
        });
    }
    handleSummaryChange (e) {
        this.setState({
            summary: e.target.value
        });
    }
    onTitleChange (e) {
        this.setState({
            title: e.target.value
        });
    }
    handleTagChange (value) {
        this.setState({
            tags: value
        });
    }
    handleRadioChange (e) {
        this.setState({
            category: e.target.value
        });
    }
    getFormatDate () {
        const date = new Date();
        const seperator = "-";
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        const currentDate = year + seperator + month + seperator + strDate;
        return currentDate;
    }
    submitAll () {
        if (!this.state.title) {
            message.error('文章标题为必填项');
            return false;
        } else if (!this.state.EditorHTML) {
            message.error('文章内容为必填项');
            return false;
        } else {
            const currentDate = this.getForamtDate();
            const dataprops = {
                cid: this.state.cid,
                title: this.state.title,
                xml: this.state.EditorHTML,
                summary: this.state.summary,
                tag: this.state.tags,
                category: this.state.category
            }; // 传到接口的参数
        }
    }
    render(){
        return(
            <div className="admin-write-area">
                <div className="admin-write-area-title-input">
                    <Input allowClear size="large" addonBefore="标题" onChange={this.onTitleChange} />
                </div>
                <div className="editor">
                    <Editor parent={ this } />
                </div>
                <div className="admin-write-area-summary-input">
                    <TextArea
                    placeholder="在这里输入文章的描述简介"
                    autoSize={{ maxRows: 2 }}
                    onChange=""
                    />
                </div>
                <div className="admin-write-area-tag-select">
                    <Select mode="tags" style={{ width: '100%' }} placeholder="在这里输入标签，按下回车创建" onChange={this.handleTagChange} maxTagCount={6}>
                        {this.state.historyTags}
                    </Select>
                </div>
                <div className="admin-write-area-cat-radio">
                <Tooltip placement="right" title={"选择内容所属的类别"}>
                    <Radio.Group defaultValue="politics" buttonStyle="solid" onChange={this.handleRadioChange}>
                        <Radio.Button value="politics">时政</Radio.Button>
                        <Radio.Button value="finance">金融</Radio.Button>
                        <Radio.Button value="sports">体育</Radio.Button>
                        <Radio.Button value="society">社会</Radio.Button>
                        <Radio.Button value="technology">科技</Radio.Button>
                    </Radio.Group>
                </Tooltip>
                </div>
                <div className="admin-write-area-uploader">
                    <Uploader />
                </div>
                <div className="admin-write-area-button">
                    <Button type="primary" onClick={this.submitAll}>提交</Button>
                </div>
            </div>
        );
    }
}

export default AdminWriteArea