import Vue from 'vue'
import Vuex from 'vuex'
import {listData} from './data.js';
import Cookie from 'js-cookie';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    recordNavInd:parseInt(Cookie.get('recordNavInd')) || 0
  },
  getters:{
    
  },
  mutations: {
    setRecordNavInd(state,payload){
      state.recordNavInd = payload;
      // 记录上次点击的下标id，并保存1天
      console.log(payload)
      Cookie.set('recordNavInd',payload,1);
    }
  },
  actions: {
    // 假装自己是个接口
    getSomeData(context,payload){
      return new Promise(function(resolve){
        setTimeout(() => {
          let requestData = listData.find(ele=>ele.id == payload.id);
          resolve(requestData?requestData:listData[0])
        }, 200);
      })
    }
  }
})
