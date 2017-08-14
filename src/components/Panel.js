import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import Data from './Data';
import Message from './Message';
import MyEditor from './Editor';
import '../styles/panel.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  
} from 'react-router-dom'
import {browserHistory} from 'react-router';


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
  render() {
    return (
	    <Router history={browserHistory}>
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
			    </div>
			    <div className="panel_main">
			    	<Route path="/data" component={Data}/>
			    	<Route path="/message" component={Message}/>
			    	<Route path="/myEditor" component={MyEditor}/>
			    </div>
	 	    </div>
	      </div>
	    </Router>
    );
  }
}

export default Panel;
