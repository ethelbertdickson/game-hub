import axios from 'axios';

export default axios.create({
   baseURL: 'https://api.rawg.io/api',

   params: {
      key: 'd7ec3f6735d14b9bb937e3fee61b3d45',
   },
});
