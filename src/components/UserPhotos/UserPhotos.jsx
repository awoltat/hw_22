import React, {useEffect, useState} from "react";
import UserAlbum from "../UserAlbum/UserAlbum";
import UserPhoto from "../UserPhoto/UserPhoto";
import axios from "axios";
import './UserPhotos.css';

const UserPhotos = () => {
    const [data, setData] = useState({photo: [], isFetching: false});

    useEffect(() => {
        const fetchPhoto = async () => {
            try {
                setData({photo: data.photo, isFetching: true});
                const response = await axios.get('http://jsonplaceholder.typicode.com/photos');
                setData({photo: response.data, isFetching: false});
            } catch (e) {
                console.log(e);
                setData({photo: data.photo, isFetching: false});
            }
        };
        fetchPhoto();
    }, []);



    return (
        <div className='user-cards'>
            {data.photo.map(photo =>  <UserPhoto photo={photo}/>)}
        </div>
    )
};

export default UserPhotos;