import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import Avatar from 'material-ui/Avatar';
import { withStyles } from 'material-ui/styles';
import UserIcon from 'material-ui-icons/AccountCircle';
import Container from '../layout/container';
import userStyles from './styles/user-style';

@inject((stores) => {
  return {
    user: stores.appState.user,
  }
}) @observer
class User extends Component {
  componentDidMount() {
    // do some
  }

  render() {
    const { classes } = this.props;
    const user = this.props.user.info || {};
    return (
      <Container>
        <div className={classes.avatar}>
          <div className={classes.bg} />
          {
            user.avatar_url ?
              <Avatar className={classes.avatarImg} src={user.avatar_url} /> :
              <Avatar className={classes.avatarImg}>
                <UserIcon />
              </Avatar>
          }
          <span className={classes.userName}>{user.loginName || '未登录'}</span>
        </div>
        {/* 子节点 */}
        {this.props.children}
      </Container>
    )
  }
}

User.wrappedComponent.propTypes = {
  user: PropTypes.object.isRequired,
}

User.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
}

export default withStyles(userStyles)(User);

