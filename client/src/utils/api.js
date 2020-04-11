import axios from 'axios';

export default {
	readItem: () => {
		return axios.get('/api/item');
    }
	
};
