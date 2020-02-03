import React from 'react';
import { Input, Select, Button, Radio, Tooltip } from 'antd';
import Editor from '../editor/editor';
import axios from 'axios';
import './admin-write-area.css';

const { TextArea } = Input;

class AdminWriteArea extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            EditorHTML: '',
            historyTags: [],
            tags: [],
            category: 'politics'
        };
        this.onTitleChange = this.onTitleChange.bind(this);
        this.handleTagChange = this.handleTagChange.bind(this);
        this.handleRadioChange = this.handleRadioChange.bind(this);
    }
    handleEditorChange = (result, HTML) => {
        // 通过给子组件传递父组件的this，就实现了子组件获得父组件函数的方法
        this.setState({
            EditorHTML: HTML
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
    submitAll() {
        axios.put();
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
                <div className="admin-write-area-button">
                    <Button type="primary" onClick={this.submitAll}>提交</Button>
                </div>
            </div>
        );
    }
}

export default AdminWriteArea