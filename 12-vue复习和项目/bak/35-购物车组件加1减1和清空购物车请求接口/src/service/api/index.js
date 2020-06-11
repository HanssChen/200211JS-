import ajax from './ajax'

// 把axios进行封装的目录，获取数据，就像调用一个方法一个来获取  配置了cors
export const getHomeData = ()=>ajax("http://localhost:3000/data");
export const getCategories = ()=>ajax("http://localhost:3000/categories");
export const getCategoriesdetail = (params)=>ajax("http://localhost:3000/categoriesdetail"+params);

//  http://localhost:3000/web/xlmc/api/send_code
// const LOCAL_BASE_URL = 'http://localhost:3000/web/xlmc';
const LOCAL_BASE_URL = '/api';

// 2.1 获取短信验证码(GET)
export const getPhoneCode = (phone) => ajax(LOCAL_BASE_URL + '/api/send_code', {phone});
// 2.2 手机验证码登录(POST)
export const phoneCodeLogin = (phone, code) => ajax(LOCAL_BASE_URL + '/api/login_code', {phone, code}, 'POST');
// 2.3 用户名和密码登录（POST）
export const pwdLogin = (user_name, user_pwd, captcha) => ajax(LOCAL_BASE_URL + '/api/login_pwd',{user_name, user_pwd, captcha}, 'POST')

// 退出登录
export const getLogOut = () => ajax(LOCAL_BASE_URL + '/api/logout');

// 自动登录（获取用户信息）
export const getUserInfo = () => ajax(LOCAL_BASE_URL + '/api/userinfo')

// 添加商品（把商品扔到服务器）  /cart/add  post  参数 goods_id  goods_name  goods_price  small_image
export const addGoodsToCart = (user_id, goods_id,goods_name,goods_price,small_image) => ajax(LOCAL_BASE_URL + '/api/cart/add',{user_id,goods_id,goods_name,goods_price,small_image},"POST")

// 获取当前用户的购物车数据  get  传参是get传参 
export const getGoodsCart = (user_id) => ajax(LOCAL_BASE_URL + '/api/cart/search/'+user_id);

// 修改商品数量
export const changeCartNum = (user_id, goods_id, type) => ajax(LOCAL_BASE_URL + '/api/cart/num',{user_id,goods_id,type},"POST");

// 删除当前用户购物车中的所有的商品
export const clearAllCart = (user_id) => ajax(LOCAL_BASE_URL + '/api/cart/clear/'+user_id);


