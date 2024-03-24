import { CheckOutlined } from "@ant-design/icons";
import { notification } from "antd";
import axios from 'axios';
import React from "react";
import { getUrlDevLinkV3 } from './helpFunction';

let assignObjectHeader = {

};

/*axit post*/
export async function axiosPOST(type = '', Url, param = {}, header = {}) {
  let URL_BASE_ADMIN = getUrlDevLinkV3(type)
  Object.assign(header, assignObjectHeader);
 
  return axios.post(URL_BASE_ADMIN + Url, param, { headers: header }).then(res => {
    if (res?.data?.status) {
      // if (!res?.data?.skipMessage) {
      //   notification.open({
      //     message: res?.data?.message,
      //     icon: <CheckOutlined style={{ color: '#61ff00' }} />,
      //   });
      // }
    }
    return res;
  }).catch(err => {
    if (err?.response?.status === 500) {
      // notification.open({
      //     message: err?.response?.statusText,
      //     icon: <WarningOutlined style={{ color: 'red' }} />,
      // });
    } else {
      // const message = err?.response?.statusText ? err?.response?.statusText : 'Network Error';
      // notification.open({
      //     message: message,
      //     icon: <WarningOutlined style={{color: 'red'}}/>,
      // });
    }
    return err;
  })
}

/*axit get*/
export async function axiosGET(type, Url, header = {}) {
  let URL_BASE_ADMIN = getUrlDevLinkV3(type)
  Object.assign(header, assignObjectHeader);

  return (axios.get(URL_BASE_ADMIN + Url, { headers: header }).then(res => {
    return res;
  }).catch(err => {
    if (err?.response?.data?.message) {
      // notification.open({
      //     message: err?.response?.data?.message,
      //     icon: <WarningOutlined style={{ color: 'red' }} />,
      // });
    } else {
      // const message = err?.response?.statusText ? err?.response?.statusText : 'Network Error';
      // notification.open({
      //     message: message,
      //     icon: <WarningOutlined style={{color: 'red'}}/>,
      // });
    }

    return err;
  }));
}

/*axit post*/
export async function axiosPUT(type = '', Url, param = {}, header = {}) {
  let URL_BASE_ADMIN = getUrlDevLinkV3(type)
  Object.assign(header, assignObjectHeader);
 
  return axios.put(URL_BASE_ADMIN + Url, param, { headers: header }).then(res => {
    if (res?.data?.status) {
      // if (!res?.data?.skipMessage) {
      //   notification.open({
      //     message: res?.data?.message,
      //     icon: <CheckOutlined style={{ color: '#61ff00' }} />,
      //   });
      // }
    }
    return res;
  }).catch(err => {
    if (err?.response?.status === 500) {
      // notification.open({
      //     message: err?.response?.statusText,
      //     icon: <WarningOutlined style={{ color: 'red' }} />,
      // });
    } else {
      // const message = err?.response?.statusText ? err?.response?.statusText : 'Network Error';
      // notification.open({
      //     message: message,
      //     icon: <WarningOutlined style={{color: 'red'}}/>,
      // });
    }
    return err?.response;
  })
}