import React from "react";
import {useSelector} from "react-redux";
import 'font-awesome/css/font-awesome.min.css';
import ProfileListItem from "./profile-list-item";

const ProfileComponent = () => {
    const profile = useSelector(state=> state.profile);
    return (
        <div>
            <ProfileListItem profile={profile}/>
        </div>
    );
}

export default ProfileComponent;
