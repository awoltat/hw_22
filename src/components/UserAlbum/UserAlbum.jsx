import React from "react";
import './UserAlbum.css';

const UserAlbum = (props) => {
    console.log(props.album);
    return (
        <div className='user-card'>
            <span>User Id: {props.album.userId}</span>
            <span>Id: {props.album.id}</span>
            <span>Title: {props.album.title}</span>
        </div>
    )
};

export default UserAlbum;