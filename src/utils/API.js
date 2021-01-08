import axios from "axios";

const API = "https://randomuser.me/api/?results=15"

export default {
    search: function() {
      return axios.get(API);
    }
  };