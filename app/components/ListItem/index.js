import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';

function ListItem(props) {
  return (
    <Item>
      {props.currentString}
    </Item>
  );
}

ListItem.propTypes = {
  currentString: PropTypes.any,
};

export default ListItem;
