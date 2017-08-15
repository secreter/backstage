import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Tree } from 'antd';

import Data from './Data';
import Message from './Message';
import MyEditor from './Editor';
import '../styles/panel.css';
import {
  // BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
const TreeNode = Tree.TreeNode;
// import {browserHistory} from 'react-router';


const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Panel extends Component {
  state = {
    current: 'mail',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  }
  render() {
    return (
	      <div className="panel">
	      	<Menu
		        onClick={this.handleClick}
		        selectedKeys={[this.state.current]}
		        mode="horizontal"
		        theme="dark"
		      >
		        <Menu.Item key="mail">
		          <Icon type="mail" />Navigation One
		        </Menu.Item>
		        <Menu.Item key="app">
		          <Icon type="appstore" />Navigation Two
		        </Menu.Item>
		        <SubMenu title={<span><Icon type="setting" />Navigation Three - Submenu</span>}>
		          <MenuItemGroup title="Item 1">
		            <Menu.Item key="setting:1">Option 1</Menu.Item>
		            <Menu.Item key="setting:2">Option 2</Menu.Item>
		          </MenuItemGroup>
		          <MenuItemGroup title="Item 2">
		            <Menu.Item key="setting:3">Option 3</Menu.Item>
		            <Menu.Item key="setting:4">Option 4</Menu.Item>
		          </MenuItemGroup>
		        </SubMenu>
		        <Menu.Item key="alipay">
		          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
		        </Menu.Item>
		      </Menu>
	 	    <div className="panel_body">
	 	    	<div className="panel_side-menu">
			    	<Menu
			          defaultSelectedKeys={['1']}
			          defaultOpenKeys={['sub1']}
			          mode="inline"
			          theme="dark"
			          inlineCollapsed={this.state.collapsed}
			        >
			          <Menu.Item key="1">
			            <Link to="/data">
				            <Icon type="pie-chart" />
				            <span>Data</span>
			            </Link>
			          </Menu.Item>
			          <Menu.Item key="2">
			            <Link to="/message">
				            <Icon type="desktop" />
				            <span>massge</span>
			            </Link>
			          </Menu.Item>
			          <Menu.Item key="3">
			            <Link to="/myEditor">
				            <Icon type="inbox" />
				            <span>myEditor</span>
			            </Link>
			          </Menu.Item>
			          
			          <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
			            <Menu.Item key="5">Option 5</Menu.Item>
			            <Menu.Item key="6">Option 6</Menu.Item>
			            <Menu.Item key="7">Option 7</Menu.Item>
			            <Menu.Item key="8">Option 8</Menu.Item>
			          </SubMenu>
			          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
			            <Menu.Item key="9">Option 9</Menu.Item>
			            <Menu.Item key="10">Option 10</Menu.Item>
			            <SubMenu key="sub3" title="Submenu">
			              <Menu.Item key="11">Option 11</Menu.Item>
			              <Menu.Item key="12">Option 12</Menu.Item>
			            </SubMenu>
			          </SubMenu>
			        </Menu>

			        <Tree
				        showLine
				        defaultExpandedKeys={['0-0-0']}
				        onSelect={this.onSelect}
				      >
				        <TreeNode title="parent 1" key="0-0">
				          <TreeNode title="parent 1-0" key="0-0-0">
				            <TreeNode title="leaf" key="0-0-0-0" />
				            <TreeNode title="leaf" key="0-0-0-1" />
				            <TreeNode title="leaf" key="0-0-0-2" />
				          </TreeNode>
				          <TreeNode title="parent 1-1" key="0-0-1">
				            <TreeNode title="leaf" key="0-0-1-0" />
				          </TreeNode>
				          <TreeNode title="parent 1-2" key="0-0-2">
				            <TreeNode title="leaf" key="0-0-2-0" />
				            <TreeNode title="leaf" key="0-0-2-1" />
				          </TreeNode>
				        </TreeNode>
				      </Tree>

			    </div>
			    <div className="panel_main">
			    	<Switch>
				       	<Route path="/data" component={Data}/>
				    	<Route path="/message" component={Message}/>
				    	<Route path="/myEditor" component={MyEditor}/>
				    	<Route path="/*" component={Data}/>
				    </Switch>
			    </div>
	 	    </div>
	      </div>
    );
  }
}

export default Panel;

// <Route path="/data" component={Data}/>
// 			    	<Route path="/message" component={Message}/>
// 			    	<Route path="/myEditor" component={MyEditor}/>