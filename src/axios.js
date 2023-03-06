import axios from "axios";
// base URL to make requests
const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",

});

// instance.get('/foo-bar');
// it will show thw link as https://api.themoviedb.org/3/foo-bar
export default instance;