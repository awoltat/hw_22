class UserAlbumsService {
     getUserAlbums = () => {
        return fetch(' http://jsonplaceholder.typicode.com/albums');
    }
}

export default UserAlbumsService;