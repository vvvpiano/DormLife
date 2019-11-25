import React from 'react';
import './css/NavigationBar.css';

import { Link } from 'react-router-dom';

import temp from './images/temp.png';
import home from './images/home.png';
import bang from './images/bang.png';
import community from './images/community.png';
import alarm from './images/alarm.png';

function Button({ image, title, page }) {
    return (
        <Link to={page} className="nav-btn">
            <div>
                <div className="nav-image"><img src={image} width="30" height="30" /></div>
                <div className="nav-title">{title}</div>
            </div>
        </Link>
    );
}

function NavigationBar() {
    return (
        <div className="nav-bar">
            <Button page="/Bang" image={bang} title="방짝궁" />
            <Button page="/Community" image={community} title="커뮤니티" />
            <Button page="/" image={home} title="홈" />
            <Button page="" image={alarm} title="알림" />
            <Button page="/Bab" image={temp} title="밥짝궁" />
        </div>
    );
}

export default NavigationBar;
