import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID hLCR0tkpJnYQWNqkkyXWq-YAvG2HcaWSv77539hW3wU",
  },
});
