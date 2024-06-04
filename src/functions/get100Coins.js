// import axios from "axios";

// export const get100Coins = () => {
//   const coins = axios
//     .get(
//       "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
//     )
//     .then((response) => {
//       console.log("RESPONSE>>>", response.data);
//       return response.data;
//     })
//     .catch((error) => {
//       console.log("ERROR>>>", error.message);
//     });

//   return coins;
// };
import axios from "axios";

export const get100Coins = () => {
  const options = {
    method: 'GET',
    url: 'https://api.coingecko.com/api/v3/coins/markets',
    params: { 
      vs_currency: 'usd', 
      order: 'market_cap_desc', 
      per_page: '100', 
      page: '1', 
      sparkline: 'false' 
    },
    headers: { 
      accept: 'application/json', 
      'x-cg-pro-api-key': 'CG-5kHMdL15pyoJdzignVD1qvZ9' 
    }
  };

  const coins = axios
    .request(options)
    .then((response) => {
      console.log("RESPONSE>>>", response.data);
      return response.data;
    })
    .catch((error) => {
      console.log("ERROR>>>", error.message);
    });

  return coins;
};
