import React, {useEffect, useState} from "react";
import './UserAlbums.css';
import UserAlbumsService from "./UserAlbumsService";
import UserAlbum from "../UserAlbum/UserAlbum";
import axios from "axios";

const UserAlbums = () => {
    // let albumsService = new UserAlbumsService();
    const [data, setData] = useState({albums: [], isFetching: false});
    // albumsService.getUserAlbums().then(albumsJson => albumsJson.json()).then(albumsResult => setAlbums(albumsResult));

    useEffect(() => {
        const fetchAlbums = async () => {
            try {
                setData({albums: data.albums, isFetching: true});
                const response = await axios.get(' http://jsonplaceholder.typicode.com/albums');
                setData({albums: response.data, isFetching: false});
            } catch (e) {
                console.log(e);
                setData({albums: data.albums, isFetching: false});
            }
        };
        fetchAlbums();
    }, []);

    return(
        <div className='user-albums'>
            {data.albums.map(album =>  <UserAlbum key={album.id} album={album}/>)}

        </div>
    )
};

export default UserAlbums;