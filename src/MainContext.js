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
      profilePics: [],
      fetchedPics: false,
    };
  }

  changeUserId = newId => {
    this.setState({
      userId: newId,
    });
  };

  updatePhotos = photos => {
    this.setState({
      profilePics: photos,
      fetchedPics: true,
    });
  };

  newPhoto = photo => {
    if (this.state.fetchedPics === true) {
      if (this.state.profilePics.length === 0) {
        this.setState({
          profilePics: [photo],
        });
      } else {
        this.setState({
          profilePics: [...this.state.profilePics, photo],
        });
      }
    }
  };

  render() {
    return (
      <Provider
        value={{
          userId: this.state.userId,
          profilePics: this.state.profilePics,
          changeUserId: this.changeUserId,
          updatePhotos: this.updatePhotos,
          newPhoto: this.newPhoto,
        }}>
        {this.props.children}
      </Provider>
    );
  }
}

export { Consumer };
