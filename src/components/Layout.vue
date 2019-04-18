<template>
  <div class="Layout">
    <a-layout id="components-layout-demo-fixed">
        <a-layout-header >
          <div class="logo"></div>
          <HeaderTool @goHome='goHome' @logout='logout' />
          <a-menu
            theme="dark"
            mode="horizontal"
            :defaultSelectedKeys="['1']"
            :style="{ lineHeight: '64px' }"
          >
            <a-menu-item  class='ant-menu-item-selected-init' v-for="(item,index) in menu" :key="index" :keyindex='item.key'>
              {{item.title}}
              <div class='menu-item'>
                <div class='menu-item-li' v-for='(item2,i) in item.children' :key='i' :keyindex='item2.key'>
                  <div class='li-header'><b>{{item2.title}}</b></div>
                  <div style='text-align:left;padding-left:20px;line-height:35px;'>
                    <router-link  :to='item3.path'  class='router-link' v-for='(item3,x) in item2.children' :key='x' :keyindex='item3.key'>
                      <span @click='AddTabs(item3)'>{{item3.title}}</span>
                    </router-link>
                  </div> 
                </div>
              </div>
            </a-menu-item>
          </a-menu>
        </a-layout-header>
        <a-layout-content class='content'>
          <div class='main' >
            <a-tabs
                v-if='GETTABS.length'
                hideAdd
                v-model="activeKey"
                type="editable-card"
                @edit="onEdit"
                @tabClick='tabClick'
              >
              <a-tab-pane v-for="pane in GETTABS" :tab="pane.title" :key="pane.key"  :closable="pane.closable">
              </a-tab-pane>
            </a-tabs>
            <router-view/>
          </div>
        </a-layout-content>
        <!-- <a-layout-footer :style="{ textAlign: 'center' }" v-if='showFooter'>
          Ant Design ©2018 Created by Ant UED
        </a-layout-footer> -->
      </a-layout>
  </div>
</template>
<script>
import ApiPath from '../core/ApiPath'
import { mapGetters } from 'vuex'
import { GETTABS,GETTABSACTIVEKEY,ADDTABS,REMOVETABS,SETTABSACTIVEKEY  } from '../store/types';
import {SStorage} from '../core/util';
import menu from '../core/menu';
import HeaderTool from './common/HeaderTool'
export default {
  name: 'Layout',
  components:{HeaderTool},
  data () {
    return {
      menu,
      showFooter:true,
      activeKey:'1'
    }
  },
  mounted(){
    this.$i18n.locale = 'zh'
    this.$http.get(ApiPath.user.getUserInfo).then(res=>{
      console.log(res);
    })
  },
  watch:{
    GETTABSACTIVEKEY:function(n,o){
      this.activeKey = n;
    }
  },
  methods:{
    goHome(){
      this.$router.push('/index');
    },
    logout(){
      SStorage.del('ZTTOKEN')
      SStorage.del('zts')
      this.$router.push({path:'/login'})
    },
    AddTabs(route){
      this.$store.commit(ADDTABS,route);
    },
    tabClick(key){
      const tabs = this.GETTABS.filter(item => item.key === key);
      const tab = tabs.length ? tabs[0] : false;
      if(tab && tab.path !== this.$route.path){
        this.$router.push({path:tab.path});
      }
      if(this.activeKey === key){
        return;
      }
      this.$store.commit(SETTABSACTIVEKEY,key);
    },
    remove (tabsActiveKey) {
      this.$store.commit(REMOVETABS,tabsActiveKey)
    },
    onEdit(tabsActiveKey, action){
      this[action](tabsActiveKey);
    }
  },
  computed:{
    ...mapGetters([
      GETTABS,GETTABSACTIVEKEY 
    ]),

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' scoped>
.Layout
  width:100%;
  height 100%;
#components-layout-demo-fixed
  width:100%;
  height 100%;
  .content
    height 100%
    .main
      background: #f0f2f5;;
      padding: 15px 20px;
      height 100%;
      overflow hidden auto;
  .logo
    width: 120px;
    height: 31px;
    background: rgba(255,255,255,.2);
    margin: 16px 24px 16px 0;
    float: left;
.ant-menu-item-selected-init
  background-color:unset !important;
  height 64px;
  padding: 0;
  min-width: 68px;
  text-align center 
  position relative
  background-size 50% 0!important;
  &:hover
    background:url('../assets/img/header_selected.png') no-repeat !important;
    .menu-item
      display block;
.menu-item
  display none;
  position: absolute 
  min-width 400px;
  min-height 200px;
  background #fff;
  border: 1px solid rgb(228,228,228)
  left: 0;
  box-shadow:0px 0px 3px rgba(0, 0, 0, 0.349019607843137);
  z-index:9999;
  .menu-item-li
    width:100%;
    height:auto;
    .li-header
      width:100%;
      height:40px;
      color: #000
      line-height 40px;
      padding-left: 25px;
      text-align left
    .itembox
      position relative
      padding-left:100px;
      background #fff;
      &:last-child
        border-bottom none
      .left
        position absolute;
        color:#000;
        left:30px;
        line-height 40px;
      .right
        line-height 40px;
        padding: 0px 10px;
        text-align left
.router-link
  margin:0 5px;
  color:#006666;
  font-size 12px;
  &:hover
    color:#3bb19c;
</style>
