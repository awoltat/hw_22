import React, {useEffect, useState} from "react";
import './UserCards.css';
import UserAlbum from "../UserAlbum/UserAlbum";
import UserCard from "../UserCard/UserCard";
import axios from "axios";

const UserCards = () => {
    const [data, setData] = useState({cards: [], isFetching: false});

    useEffect(() => {
        const fetchCards = async () => {
            try {
                setData({cards: data.cards, isFetching: true});
                const response = await axios.get('http://jsonplaceholder.typicode.com/users');
                setData({cards: response.data, isFetching: false});
            } catch (e) {
                console.log(e);
                setData({cards: data.cards, isFetching: false});
            }
        };
        fetchCards();
    }, []);



    return (
        <div className='user-cards'>
            {data.cards.map(card =>  <UserCard user={card}/>)}

        </div>
    )
};

export default UserCards;