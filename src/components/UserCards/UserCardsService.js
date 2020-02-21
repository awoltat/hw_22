class UserService {
    getUsers = () => {
        return fetch('http://jsonplaceholder.typicode.com/users');
    }
}

export default UserService;