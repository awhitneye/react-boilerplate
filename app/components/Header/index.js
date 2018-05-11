import React from 'react';
import { FormattedMessage } from 'react-intl';

import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import A from './A';
import Img from './Img';
import Banner from './banner.jpg';
import messages from './messages';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <A href="https://github.com/awhitneye">
          <Img src={Banner} alt="react-boilerplate - Logo" />
        </A>
        <NavBar>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/strings">
            <FormattedMessage {...messages.strings} />
          </HeaderLink>
        </NavBar>
      </div>
    );
  }
}

export default Header;
