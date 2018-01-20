import React from 'react';
import bell from './bell.png';
import styles from './Notifications.scss';
import { CSSTransitionGroup } from 'react-transition-group';
import NotificationContainer from '../../containers/NotificationContainer/NotificationContainer';

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "showingNotificationItems": false
    };
  }

  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    return (
      <div
        onMouseEnter={() => this.setState({ showingNotificationItems: true })}
        onMouseLeave={() => this.setState({ showingNotificationItems: false })}>
        <button className={styles.notificationIconBtn}>
          <img src={bell} alt="Bell"/>
          {this.state.showingNotificationItems ?
            <div className={styles.itemsContainerArrow}/>
           :null
          }
        </button>
        
        <CSSTransitionGroup
          transitionName={{
            enter: styles.itemsContainerEnter,
            enterActive: styles.itemsContainerEnterActive,
            leave: styles.itemsContainerLeave,
            leaveActive: styles.itemsContainerLeaveActive,
          }}
          transitionEnterTimeout={200}
          transitionLeaveTimeout={200}>
          {this.state.showingNotificationItems ?
            <div className={styles.itemsContainer}>
              <div className={styles.topBar}/>
              {
                this.props.notificationList.map((item, index) => {
                  return <NotificationContainer movie={item} key={index}/>
                })
              }
            </div>
            : null
          }
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default Notifications;