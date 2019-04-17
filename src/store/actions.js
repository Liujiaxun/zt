import { SStorage } from '../core/util'
import {LOGIN,SETUSERS,SETLOGINLOADING} from './types';
import http from '../core/axios'
const actions = {
    //登录
    [LOGIN]({commit,state},{Password,Username}){
        commit(SETLOGINLOADING,true);
        http.post('/api/v1/passport/login',{Password,Username}).then(res => {
            commit(SETLOGINLOADING,false);
            if(!res.Status){
                SStorage.set('ZTTOKEN',res.Data.Token);
                commit(SETUSERS,res.Data);
            }
        }).catch(err => {
            commit(SETLOGINLOADING,false);
        })
    }
}

export default actions;