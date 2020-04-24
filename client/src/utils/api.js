import axios from 'axios';

export default {
	readItem: () => {
		return axios.get('/api/item');
	},
	readPurchases: () => {
		return axios.get('/api/item/readpurchase');
	},
	searchPosts: data => {
		console.log('test')
		return axios.post('/api/item/search', data);
	},
	postItem: data => {
		return axios.post('/api/item', data)
	},
	postImage: data => {
		return axios.post("/profile", data)
	},
	purchaseItem: data => {
		return axios.post('/api/item/purchase', data);
	},
	deleteItem: data => {
		console.log("Utils");
		
		return axios.post('/api/item/delete', data)
		
	}
};
