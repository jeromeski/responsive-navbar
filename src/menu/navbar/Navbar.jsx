import React, {Component} from 'react';
import DesktopContainer from './desktop/DesktopContainer';
import { Responsive } from 'semantic-ui-react';
import MobileContainer from './mobile/MobileContainer';
import PropTypes from 'prop-types';


class Navbar extends Component {
  render() {

    const getWidth = () => {
      const isSSR = typeof window === 'undefined'
    
      return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
    }

    const {children} = this.props

    return (
      <div>
        <DesktopContainer getWidth={getWidth}>{children}</DesktopContainer>
        <MobileContainer getWidth={getWidth}>{children}</MobileContainer>
      </div>
    )
  }
}

Navbar.propTypes = {
  children: PropTypes.node,
}


export default Navbar;


/*
<Menu inverted fixed="top">
  <Container>
    <Menu.Item header>
      <img src="assets/logo.png" alt="logo" />
      Re-vents
    </Menu.Item>
    <Menu.Item name="Events" />
    <Menu.Item>
                <Button floated="right" positive inverted content="CrEvent" />
    </Menu.Item>
    <Menu.Item position="right">
      <Button basic inverted content="Login" />
                <Button basic inverted content="Sign Out" st{marginLeft: '0.5em'}} />
    </Menu.Item>
  </Container>
</Menu>

*/