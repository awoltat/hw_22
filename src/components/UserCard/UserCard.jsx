import React from "react";
import './UserCard.css';

const UserCard = (props) => {
    console.log(props.user);
    return (
        <div className='user-card'>
            <span>Id: {props.user.id}</span>
            <span>Name: {props.user.name}</span>
            <span>Surname: {props.user.username}</span>
            <span>Email: {props.user.email}</span>
        </div>
    )
};

export default UserCard;