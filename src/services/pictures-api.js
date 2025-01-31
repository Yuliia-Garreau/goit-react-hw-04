import axios from "axios";

// axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchPictures = async (query, page, perPage) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?client_id=vCnAZEnSNJU9w_R_2GyUds1TIUdqOXSMrP0Ij_HGqsg&query=${query}&page=${page}&per_page=${perPage}`
  );

  return response.data.results;
};
