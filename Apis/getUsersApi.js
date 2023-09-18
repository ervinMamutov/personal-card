import axios from 'axios';
import data from '../src/data/data';

const getUsersApi = async () => {
  const encodingUrl = encodeURI(data.baseUrl);
  try {
    const res = await axios.get(encodingUrl);
    if (res.status === 200) {
      return await res.data;
    } else {
      throw new Error(`Failed fetch an personas cards: status ${res.status}`);
    }
  } catch (err) {
    console(err.message);
    return null;
  }
};

export default getUsersApi;
