import {SStorage} from '../core/util';
import {SETLOGINLOADING,SETUSERS,ADDTABS,SETTABSACTIVEKEY,REMOVETABS} from './types';
const mutations = {
    [SETLOGINLOADING](state,newstate){
        state.login.loading = newstate;
        SStorage.set('zts',state);
    },
    [SETUSERS](state,newstate){
        state.users = newstate;
        SStorage.set('zts',state);
    },
    [ADDTABS](state,newtabs){
        let tabs = state.tabs;
        let key = newtabs.key;
        let ishas = false;
        for(let i=0;i<tabs.length;i++){
            let tab = tabs[i];
            if(tab.key === key){
                ishas = true;
                break;
            }
        }
        if(!ishas){
            state.tabs.push(newtabs)
        }
        state.tabsActiveKey = key;
        SStorage.set('zts',state);
    },
    [SETTABSACTIVEKEY](state,key){
        state.tabsActiveKey = key;
        SStorage.set('zts',state);
    },
    [REMOVETABS](state,key){
        let lastIndex,newkey=state.tabsActiveKey;
        let tabs = state.tabs.concat();
        tabs.forEach((pane, i) => {
            if (pane.key === key) {
                lastIndex = i
            }
        })

        if(tabs.length){
            if(tabs.length-1 === lastIndex && state.tabsActiveKey === key){
                    newkey = tabs[lastIndex-1] ? tabs[lastIndex-1].key :state.tabsActiveKey;
            }
        }
        
        tabs.splice(lastIndex,1)
        state.tabs = tabs;
        state.tabsActiveKey = newkey;
        SStorage.set('zts',state);
    }
    
}

export default mutations;