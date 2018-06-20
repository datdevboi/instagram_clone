import React, { Component } from 'react';

const { Consumer, Provider } = React.createContext({
  userId: '',
  updateUserId: () => {},
});

export class MainContext extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: '',
    };
  }

  changeUserId = newId => {
    this.setState({
      userId: newId,
    });
  };
  render() {
    return (
      <Provider
        value={{
          userId: this.state.userId,
          changeUserId: this.changeUserId,
        }}>
        {this.props.children}
      </Provider>
    );
  }
}

export { Consumer };
