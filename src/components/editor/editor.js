import React from 'react';
import ReactQuill from 'react-quill';
import './editor.css';
import 'react-quill/dist/quill.snow.css';

class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            modules: {
                toolbar: {
                    container: [
                        [{ header: [1, 2, false] }],
                        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                        [{ list: 'ordered' }, { list: 'bullet' }],
                        ['link', 'image'],
                        ['clean'],
                    ],
                },
            },
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(value) {
        this.props.parent.handleEditorChange(this, value) //fixit
    }
    render() {
        const formats = [
            'header',
            'bold',
            'italic',
            'underline',
            'strike',
            'blockquote',
            'list',
            'bullet',
            'indent',
            'link',
            'image',
        ];
        return (
            <ReactQuill className="admin-editor" placeholder="在这里编辑..." theme="snow" onChange={this.handleChange} modules={this.state.modules} formats={formats}/>
        );
    }
}

export default Editor;