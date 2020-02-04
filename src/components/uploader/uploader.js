import React from 'react';
import { Upload, Icon, message } from 'antd';
import './uploader.css';

const { Dragger } = Upload;

class Uploader extends React.Component {
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
        console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} 上传成功`);
        } else if (status === 'error') {
            message.error(`${info.file.name} 上传失败`);
        }
    }
    render() {
        return(
            <Dragger {...this.props}>
            <p className="ant-upload-drag-icon">
              <Icon type="inbox" />
            </p>
            <p className="ant-upload-text">点击或拖放上传文章封面</p>
            <p className="ant-upload-hint">
            	封面图很重要
            </p>
          </Dragger>
        );
    }
}

export default Uploader;