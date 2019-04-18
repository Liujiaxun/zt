import axios from 'axios';
import {message,notification} from 'ant-design-vue'
import { SStorage } from '../core/util'
!process.env.MOCK ? axios.defaults.baseURL = 'http://192.168.109.223:8000/api/v1/' :f=>f;
axios.defaults.headers.common['Authorization'] = '';

axios.defaults.headers['Content-Type'] = 'application/json'
// axios.defaults.timeout = 5000;
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // console.log(config)
    message.loading('加载中...', 0);
    // config.headers.
    config.headers.Authorization = SStorage.get('ZTTOKEN') && SStorage.get('ZTTOKEN') !== 'null' ? SStorage.get('ZTTOKEN') : '';
    return config;
  }, function (error) {
    // 对请求错误做些什么
    message.destroy()
    console.log(123);
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    message.destroy()
    // let status = 'successs';
    // if(response.data.Status){
    //     status = 'error';
    // }
    // notification[status]({
    //     message: response.data.Msg,
    // });
    return response.data;
  }, function (error) {
    // 对响应错误做点什么
    let msg = error.response.data.Msg || '';
    message.destroy()
    // console.log(error.response)
    if(error.response.status >= 500 ){
        msg = '服务器错误，请联系管理员';
    }
    if(error.response.status == 403){
        msg = '权限不足,请联系管理员!';
    }
    notification['error']({
        message: msg,
    });
    return Promise.reject(error);
});

export default axios;
