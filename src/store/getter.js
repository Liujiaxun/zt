import types from './types';
import { SStorage } from '../core/util'
const getters = {
    [types.SETLOGINLOADING](state) {
        return JSON.parse(SStorage.get('zts')) ? JSON.parse(SStorage.get('zts')).login.loading : state.login.loading;
    },
    [types.SETUSERS](state) {
        return JSON.parse(SStorage.get('zts')) ? JSON.parse(SStorage.get('zts')).users : state.users;
    },
    [types.GETTABS](state) {
        return state.tabs;
    },
    [types.GETTABSACTIVEKEY](state) {
        return state.tabsActiveKey;
    }
};

export default getters;

// {"login":{"loading":false},"users":{"UserId":5093,"UserName":"tomas7777","Permissions":[11100,11101,11102,11103,11104,11105,11106,11107,11108,11109,11110,11111,11112,11113,11114,11115,11116,11117,11118,11119,11120,11121,11122,11123,11124,11125,11126,11127,11128,11129,11130,11131,11132,11133,11134,11135,11136,11137,11140,11141,11142,11143,11144,11145,11146,11147,11148,11149,11150,11151,11152,11153,11154,11155,11156,11157,11158,11159,11160,11161,11162,11163,11164,11165,11166,11167,11168,11169,11170,11171,11172,11173,11174,11175,11176,11177,11178,11179,11180,11181,11182,11183,11184,11185,11186,11187,11188,11191,11193,11194,11195,11197,11198,11199,11200,11201,11206,11213,11214,11218,11219,11220,11221,11222,11223,11224,11225,11230,11231,11232,11233,11234,11235,11236,11237,11238,11239,11240,11241,11244,11245,11246,11247,11248,11251,11252,11253,11254,11259,11260,11261,11277,11278,11279,11280,11281,11282,11283,11284],"Roles":[25],"Token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiI1MDkzIiwiTmFtZSI6InRvbWFzNzc3NyIsIlVzZXJBY2NvdW50IjoidG9tYXM3Nzc3IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6InRvbWFzNzc3NyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IjI1IiwiZXhwIjoxNTU1NDcyMjEyLCJpc3MiOiJ0bXN0cmFja2luZy5jb20uY24iLCJhdWQiOiJ0bXN0cmFja2luZy5jb20uY24ifQ.zBuCBKW9N85chQni7JveKsMcvNfLgQZDg9OBWELxsMM","TokenExpires":1555472212}}
// Math.round(new Date() / 1000)