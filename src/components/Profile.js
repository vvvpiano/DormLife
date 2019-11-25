import React from 'react';
import PropTypes from "prop-types";
// import './Profile.css';

function Profile({ photo, room, name }) {
  return (
    <div className="profile">
      <div className="profile__photo"><img src={photo} /></div>
      <div className="profile__room">
        <div>{room}</div>
        <div>{name}</div>
      </div>
      <div id="talk-btn">
        <svg height="50" viewBox="0 0 512 512" width="50" xmlns="http://www.w3.org/2000/svg"><path d="m464 48h-320a40.045 40.045 0 0 0 -40 40v64h-56a40.045 40.045 0 0 0 -40 40v160a40.045 40.045 0 0 0 40 40h40v72a8 8 0 0 0 13.657 5.657l77.657-77.657h188.686a40.045 40.045 0 0 0 40-40v-64h56a40.045 40.045 0 0 0 40-40v-160a40.045 40.045 0 0 0 -40-40zm-72 304a24.027 24.027 0 0 1 -24 24h-192a8 8 0 0 0 -5.657 2.343l-66.343 66.343v-60.686a8 8 0 0 0 -8-8h-48a24.027 24.027 0 0 1 -24-24v-160a24.027 24.027 0 0 1 24-24h320a24.027 24.027 0 0 1 24 24zm96-104a24.027 24.027 0 0 1 -24 24h-56v-80a40.045 40.045 0 0 0 -40-40h-248v-64a24.027 24.027 0 0 1 24-24h320a24.027 24.027 0 0 1 24 24z" /><path d="m208 248a32 32 0 1 0 32 32 32.036 32.036 0 0 0 -32-32zm0 48a16 16 0 1 1 16-16 16.019 16.019 0 0 1 -16 16z" /><path d="m112 248a32 32 0 1 0 32 32 32.036 32.036 0 0 0 -32-32zm0 48a16 16 0 1 1 16-16 16.019 16.019 0 0 1 -16 16z" /><path d="m304 312a32 32 0 1 0 -32-32 32.036 32.036 0 0 0 32 32zm0-48a16 16 0 1 1 -16 16 16.019 16.019 0 0 1 16-16z" /><path d="m336 344h-72a8 8 0 0 0 0 16h72a8 8 0 0 0 0-16z" /><path d="m368 344h-8a8 8 0 0 0 0 16h8a8 8 0 0 0 0-16z" /></svg>
      </div>
    </div>
  );
}

Profile.propTypes = {
  room: PropTypes.string,
  name: PropTypes.string.isRequired,
  photo: PropTypes.string
}

export default Profile;