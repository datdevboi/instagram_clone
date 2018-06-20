import React, { Component } from 'react';
import { Consumer } from './MainContext';

export default (withContext = WrappedComponent => {
  class ComponentWithContext extends Component {
    render() {
      return (
        <Consumer>
          {context => <WrappedComponent context={context} {...this.props} />}
        </Consumer>
      );
    }
  }

  return ComponentWithContext;
});
