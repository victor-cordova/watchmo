import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import AppLightboxContainer from '../../containers/AppLightboxContainer/AppLightboxContainer';
import LayoutLanding from '../LayoutLanding/LayoutLanding';
import MovieGridContainer from '../../containers/MovieGridContainer/MovieGridContainer';
import ModalVideoPlayerContainer from '../../containers/ModalVideoPlayerContainer/ModalVideoPlayerContainer';
import styles from './LayoutDispatcher.scss';

class LayoutDispatcher extends React.Component {
  render() {
    return (
      <div>
        <CSSTransitionGroup
          transitionName={{
            enter: styles.layoutContainerEnter,
            enterActive: styles.layoutContainerEnterActive
          }}
          transitionEnterTimeout={500}
          transitionLeave={false}>
          {this.props.showSearchedMovies ?
            <MovieGridContainer key={1}/>
           :
            <LayoutLanding key={2}/>
          }
        </CSSTransitionGroup>
        <ModalVideoPlayerContainer />
        <AppLightboxContainer />
      </div>
    )
  }
}

export default LayoutDispatcher;