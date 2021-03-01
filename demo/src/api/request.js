// axios请求封装
import axios from 'axios'
// 创建axios 实例对象
const request = axios.create({
  baseURL:"http://api-toutiao-web.itheima.net"
  //  baseURL:"http://ttapi.research.itcast.cn/"
});

export default request