import axios from 'axios';

export default {
	readItem: () => {
		return axios.get('/api/item');
	},
	readItemByID: data => {
		return axios.post('/api/item/byID', data)
	},
	readPurchases: () => {
		return axios.get('/api/item/readpurchase');
	},
	searchPosts: data => {
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
		return axios.post('/api/item/delete', data)
		
	}
};
