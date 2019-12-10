import React, { Component } from 'react'
import { Responsive, Sidebar, Menu,Icon, Button, Image } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'


class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { sidebarOpened } = this.state

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={this.props.getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation='overlay'
          direction='left'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
          width='thin'
        >
          <Menu.Item as={NavLink} to='/home'>
            Home
          </Menu.Item>
          <Menu.Item as={NavLink} to='/events'>Events</Menu.Item>
          <Menu.Item as={NavLink} to='/people'>People</Menu.Item>
          <Menu.Item as={NavLink} to='/login'>Log in</Menu.Item>
          <Menu.Item as={NavLink} to='/signup'>Sign Up</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher 
          dimmed={sidebarOpened}
          style={{ minHeight: "100vh" }} > 
              <Menu fixed="top" inverted>
                <Menu.Item 
                  onClick={this.handleToggle}
                >
                  <Icon name='sidebar' size='large'/>
                </Menu.Item>
                <Menu.Item>
                  <Image 
                    src='/assets/logo.png'
                    style={{height: '3rem'}}
                  />
                </Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted>
                    Log in
                  </Button>
                  <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Menu> 
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

export default MobileContainer;