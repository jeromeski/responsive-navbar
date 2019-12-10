import React, { Component } from 'react'
import { Responsive, Visibility, Segment, Menu, Container, Button, Image } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import './desktopContainter.styles.css'

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive getWidth={this.props.getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 30, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item
                  exact as={NavLink} 
                  to='/'
                  style={{
                    padding: '0',
                    marginRight: '1rem'
                  }}
                >
                  <Image
                    className='logo' 
                    src='/assets/logo.png'
                    verticalAlign='middle'
                    style={{
                      height: '3rem'
                    }}
                  />
                  Revents
                </Menu.Item>
                <Menu.Item as={NavLink} to='/events'>Events</Menu.Item>
                <Menu.Item as={NavLink} to='/people'>People</Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted={!fixed}>
                    Log in
                  </Button>
                  <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
          </Segment>
        </Visibility>
        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

export default DesktopContainer;
