import React, { Component } from 'react';
import { Card } from 'antd';
import ReactQuill from 'react-quill';
import '../styles/message.css';

class Message extends Component{
	modules={
	    toolbar: [
	      [{ 'header': [1, 2, false] }],
	      ['bold', 'italic', 'underline','strike', 'blockquote'],
	      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
	      ['link', 'image'],
	      ['clean']
	    ],
	}

	constructor(props) {
	    super(props);
	    this.state = { text: '' } // You can also pass a Quill Delta here
    	this.handleChange = this.handleChange.bind(this)
	}
	handleChange(value) {
	    this.setState({ text: value })
	    console.log(value)
	}
	createHtmlString() {
	  return {__html: this.state.text};
	}
	render(){
		return (
			<div className="message">
				<div className="message-preview">
					<Card className="message-preview_card" style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
					    <div className="message-preview_image">
					      	<img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
					    </div>
					    <div className="">
					      	<h3>Europe Street beat</h3>
					      	<p>www.instagram.com</p>
					    </div>
					</Card>

					<Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
					    <div className="message-preview_image">
					      	<img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
					    </div>
					    <div className="">
					      	<h3>{this.state.text}</h3>
					      	<p  dangerouslySetInnerHTML={this.createHtmlString()}></p>
					    </div>
					</Card>
				</div>
				<div className="message_editor">
					<div className=""></div>
					<div className="">
						<ReactQuill 
					      	theme="snow"
					      	className="my-editor"
					      	modules={this.modules}
					      	value={this.state.text}
					        onChange={this.handleChange} />
					</div>

				</div>
			</div>
			)
	}
}

export default Message