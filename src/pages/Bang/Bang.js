import React from 'react';
import Memo from '../../components/Memo';
import Profile from '../../components/Profile';
import './Bang.css';

const data = {
    room: {
        profiles: [
            {
                photo: "https://source.unsplash.com/random/50x50/",
                room: "A방",
                name: "Larry"
            },
            {
                photo: "https://source.unsplash.com/random/50x50.1/",
                room: "B방",
                name: "간지Jack"
            },
            {
                photo: "https://source.unsplash.com/random/50x50.2/",
                room: "C방",
                name: "Tom슨121"
            }
        ],
        memo: {
            title: "memo",
            content: "오늘은 공용 비품의 날!\n공용 화장지 제출해주세요~"
        },
        tip: {
            title: "tip",
            content: "오늘의 꿀팁!"
        }
    }
};

function Bang() {
    const {
        room: {
            profiles,
            memo,
            tip
        }
    } = data;
    return (
        <div className="container">
            {
                profiles.map(profile => (
                    <Profile
                        photo={profile.photo}
                        room={profile.room}
                        name={profile.name}
                    />
                ))
            }
            <Memo
                title={memo.title}
                content={memo.content} />
            <Memo
                title={tip.title}
                content={tip.content} />
        </div>
    );
}

export default Bang;
