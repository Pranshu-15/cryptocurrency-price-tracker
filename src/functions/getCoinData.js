// import axios from "axios";

// export const getCoinData = (id, setError) => {
//   const coin = axios
//     .get(`https://api.coingecko.com/api/v3/coins/${id}`)
//     .then((response) => {
//       if (response.data) {
//         return response.data;
//       }
//     })
//     .catch((e) => {
//       console.log(e.message);
//       if (setError) {
//         setError(true);
//       }
//     });

//   return coin;
// };
import axios from "axios";

export const getCoinData = (id, setError) => {
  const options = {
    method: 'GET',
    url: `https://api.coingecko.com/api/v3/coins/${id}`,
    headers: { 
      accept: 'application/json', 
      'x-cg-pro-api-key': 'CG-5kHMdL15pyoJdzignVD1qvZ9' 
    }
  };

  const coin = axios
    .request(options)
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    })
    .catch((e) => {
      console.log(e.message);
      if (setError) {
        setError(true);
      }
    });

  return coin;
};
