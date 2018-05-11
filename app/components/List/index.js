import React from 'react';
import PropTypes from 'prop-types';

import UnsortedList from './Ul';
import Wrapper from './Wrapper';
import ListItem from '../ListItem';

function List(props) {
  const loading = props.loading;
  const error = props.error;
  let content = (<div></div>);

  if (props.strings.length > 0) {
    content = props.strings.map((item) => (
      <ListItem currentString={`item-${item.id}`} item={item} />
    ));
  } else if (loading) {
    content = (<ListItem currentString={'Loading'} />);
  } else if (error) {
    content = (<ListItem currentString={`Error: ${error}`} />);
  } else {
    // Otherwise render a single component
    content = (<ListItem currentString={'Insert a string to start'} />);
  }

  return (
    <Wrapper>
      <UnsortedList>
        {content}
      </UnsortedList>
    </Wrapper>
  );
}

List.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  strings: PropTypes.any,
};

export default List;
