import axios from 'axios';

export default {
	readItem: () => {
		return axios.get('/api/item');
	},
	readPurchases: () => {
		return axios.get('/api/item/readpurchase');
	},
	postItem: data => {
		return axios.post('/api/item', data)
	},
	purchaseItem: data => {
		return axios.post('/api/item/purchase', data);
	},
	deleteItem: data => {
		console.log("Utils");
		
		return axios.post('/api/item/delete', data)
		
	}
};
