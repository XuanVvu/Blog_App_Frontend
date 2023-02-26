import axios from 'axios';

export const fetchPosts = () => axios.get('http://localhost:8080/api/v1/posts');

export const addNewPost = (payload) => axios.post('http://localhost:8080/api/v1/create-post', payload);

export const updatePost = (payload, id) => axios.put(`http://localhost:8080/api/v1/update-post/${id}`, payload);
export const deletePost = (id) => axios.delete(`http://localhost:8080/api/v1/delete-post/${id}`);
