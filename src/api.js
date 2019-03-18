import axios from "axios";

const call = method => (url, { body, query, headers } = {}) => {
  return axios({
    method,
    baseURL: `http://localhost:8000${url}`,
    data: body,
    headers,
    params: query
  })
    .then(response => response.data)
    .catch(error => {
      const apiError = new Error(error.message);
      apiError.message = error.response.data.message;
      apiError.code = error.response.data.code;
      apiError.status = error.response.data.status;
      throw apiError;
    });
};

export default {
  get: call("GET"),
  post: call("POST"),
  put: call("PUT"),
  delete: call("DELETE")
};
