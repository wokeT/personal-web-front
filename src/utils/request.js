import axios from "axios";
import { Notification } from 'element-ui'
import { stringify } from "qs";

const checkCode = res => {
  /**
   * 特殊结果处理
   */
  if (!res.code && res.records) {
    return res;
  }
  if (!res.code && res.id) {
    return res;
  }
  if (!res.code && Array.isArray(res)) {
    return res;
  }
  if (res.code && res.code === 20000) {
    return res.data;
  } else {
    throw new Error(res.msg);
  }
};

const request = (url, { method, params, headers }) => {
  const token = localStorage.getItem("token") || "";
  headers = {
    token,
    timeout: 15000,
    responseType: "json",
    contentType: "application/json",
    ...headers
  };
  if (method === "get" || "GET") {
    url = `${url}?${stringify(params)}`;
  }
  return axios({
    method,
    url,
    headers,
    data: params
  })
    .then(res => {
      resolve(checkCode(res.data));
    })
    .catch(e => {
      Notification({
        title: '请求失败',
        message: e.message
      })
    });
};

export default request;
