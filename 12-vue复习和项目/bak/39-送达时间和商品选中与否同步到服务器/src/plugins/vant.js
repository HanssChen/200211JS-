import Vue from 'vue'

// 1. 底部的导航
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar).use(TabbarItem);

// 2. Loading
import { Loading } from 'vant';
Vue.use(Loading);

//3. 图片懒加载
import { Image } from 'vant';
Vue.use(Image);

// 提示
import { Toast } from 'vant';
Vue.use(Toast);

// 确定的框框
import { Dialog } from 'vant';
Vue.use(Dialog);

// 6. 导航栏
import { NavBar } from 'vant';
Vue.use(NavBar);

// 7. 地址
import { ContactCard, ContactList, ContactEdit } from 'vant';
Vue.use(ContactCard).use(ContactList).use(ContactEdit);

import { AddressList } from 'vant';
Vue.use(AddressList);

import { AddressEdit } from 'vant';
Vue.use(AddressEdit);

// 8. 单元格
import { Cell, CellGroup } from 'vant';
Vue.use(Cell).use(CellGroup);

// 9. 提交订单
import { SubmitBar } from 'vant';
Vue.use(SubmitBar);

// 10. 宫格
import { Grid, GridItem } from 'vant';
Vue.use(Grid).use(GridItem);

// 弹出层
import { Popup } from 'vant';
Vue.use(Popup);

// 时间
import { DatetimePicker } from 'vant';
Vue.use(DatetimePicker);