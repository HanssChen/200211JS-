import React, { Component } from 'react';
import PropTypes from "prop-types"
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

// c  int a = 110;  ts  
export default class RichTextEditor extends Component {
    static propTypes = {
        detail: PropTypes.string
    }
    state = {
        editorState: EditorState.createEmpty(), 
    }
    constructor(props){
        super(props)
        const html = this.props.detail;
        if(html){
            const contentBlock = htmlToDraft(html)
            const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
            const editorState = EditorState.createWithContent(contentState);
            this.state = {
                editorState
            }
        }else{
            this.state = { editorState:EditorState.createEmpty() };
        }
    }
    onEditorStateChange = (editorState) => {
        // console.log("onEditorStateChange")
        this.setState({
            editorState,
        });
    };

    getDetail = () => {
        // 返回输入内容对应的html字符串
        return draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))
    }

    render() {
        const { editorState } = this.state;
        return (
            <div>
                <Editor
                    editorState={editorState}
                    editorStyle={{ border: "1px solid black", minHeight: 200, maxHeight: 600 }}
                    onEditorStateChange={this.onEditorStateChange}
                />
            </div>
        );
    }
}

// draftToHtml(convertToRaw(editorState.getCurrentContent()))   把输入的内容转成html字符串