import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import FacebookLogin from 'react-facebook-login';

import { FB_APP_ID } from '../../utils/constants';

import './FacebookLoginButton.css';

class FacebookLoginButton extends React.Component {
  render() {
    return (
      <div style={{width: 200, maxWidth: '95%'}}>
        <FacebookLogin
          appId={FB_APP_ID}
          fields="name,email,picture"
          scope="public_profile,user_friends"
          callback={this.responseFacebook}
          cssClass='facebookLoginButton'
          icon="fa-facebook"
          textButton="&nbsp;&nbsp;Login with Facebook"
        />
      </div>
    );
  }

  responseFacebook = async (user) => {
    console.log(user);

    const res = await this.props.mutate({
      variables: {
        token: user.accessToken
      }
    });

    console.log(res);
  };
}

const FBLoginMutation = gql`
  mutation fbUserAuth($token: String!) {
    fbUserAuth(token: $token) {
      success
    }
  }
`;

export default graphql(FBLoginMutation)(FacebookLoginButton);