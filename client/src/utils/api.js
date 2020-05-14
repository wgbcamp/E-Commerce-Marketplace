import axios from 'axios';

export default {
	readItemByID: data => {
		return axios.post('/api/item/byID', data)
	},
	readItemByIDpurchased: data => {
		return axios.post('/api/item/byIDpurchased', data)
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
	},
	updateItem: data => {
		return axios.put('/api/item/update', data);
	},
	signUp: data => {
		return axios.post('/api/signUp', data)
	},
	signIn: data => {
		return axios.post('/api/signIn', data)
	},
	searchForAccount: data => {
		return axios.post('/api/searchForAccount', data)
	},
	itemSeller: data => {
		return axios.post('/api/findItemSeller', data)
	},
	searchPostsByAccount: data => {
		return axios.post('/api/searchPostsByAccount', data)
	},
	searchBuysByAccount: data => {
		return axios.post('/api/searchBuysByAccount', data)
	}
};
