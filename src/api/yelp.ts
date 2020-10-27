import axios, { AxiosResponse } from "axios";

const yelp = axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 0yF1IyKI4IvZbV6y-wazS1sf8hPb-DtQpYEGWrWgxbFof0EmVkT7_Z_70_vkhvKzHUDHLz7GgC-NlVKbswKKmW0uevDJ1nra2nhEVljUcGvXGdW-x79LM1H78vyDX3Yx",
  },
});

export default yelp;
//Yelp
// Client ID
// CXHcDkmTRoJFI8tYxCvAzA
// API Key
// 0yF1IyKI4IvZbV6y-wazS1sf8hPb-DtQpYEGWrWgxbFof0EmVkT7_Z_70_vkhvKzHUDHLz7GgC-NlVKbswKKmW0uevDJ1nra2nhEVljUcGvXGdW-x79LM1H78vyDX3Yx
