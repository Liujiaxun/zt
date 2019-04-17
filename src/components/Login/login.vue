<template>
  <div class="login">
    <div class="login_form">
      <a-card title="欢迎登录" :bordered="false">
      <form class="layui-form">
        <div class="layui-form-item">
          <label
            class="layadmin-user-login-icon layui-icon layui-icon-username inputLeft "
            for="LAY-user-login-username"
          ></label>
          <input
            type="text"
            name="Username"
            lay-verify="Username"
            v-model='Username'
            placeholder="用户名"
            class="layui-input LAY-user-login-username"
          >
        </div>
        <div class="layui-form-item">
          <label class="layadmin-user-login-icon layui-icon layui-icon-password inputLeft " for="LAY-user-login-password"></label>
          <input
            type="password"
            name="Password"
            lay-verify="Password"
            v-model='Password'
            placeholder="密码"
            autocomplete='off'
            class="layui-input LAY-user-login-username"
          >
        </div>
        
        <div class="layui-form-item">
          <div class="layui-input-block" style='margin-left:0;'>
            <button :class="'layui-btn layui-btn-fluid' + (loading ? ' layui-btn-disabled' :'')" lay-submit lay-filter="formDemo" :disabled='loading'>立即提交</button>
          </div>
        </div>
      </form>
      </a-card>
    </div>
  </div>
</template>

<script>
import { LOGIN, SETLOGINLOADING, SETUSERS } from "../../store/types";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      Password: "4olhwSPr)I",
      Username: "tomas7777"
    };
  },
  created(){
    const user = this.$store.getters[SETUSERS]
    const nowtime = Math.round(new Date() / 1000)
    if(user.Token && nowtime < user.TokenExpires){
        this.$router.push({path:'/index'})
    }
  },
  mounted() {
    const self = this;
    layui.use("form", function() {
      var form = layui.form;
      form.verify({
            Username: function(value, item){ //value：表单的值、item：表单的DOM对象
                if(value.length < 1){
                    return '用户名不能为空';
                }
            },
            Password: function(value, item){ //value：表单的值、item：表单的DOM对象
                if(value.length < 1){
                    return '密码不能为空';
                }
            }
        });
        form.on('submit(formDemo)', function(data){
            self.$store.dispatch(LOGIN, data.field);
            return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
        });
    });
  },
  watch: {
    [SETUSERS]: function(newvalue, oldvalue) {
      const nowtime = Math.round(new Date() / 1000)
      if(newvalue.Token && nowtime < newvalue.TokenExpires){
          this.$router.push({path:'/index'})
      }
    }
  },
  computed: {
    ...mapGetters([SETLOGINLOADING, SETUSERS]),
    loading() {
      return this.$store.state.login.loading;
    }
  }
};
</script>

<style lang="stylus">
.layui-form-item
    position relative
.inputLeft {
  position: absolute;
  left: 1px;
  top: 1px;
  width: 38px;
  line-height: 36px;
  text-align: center;
  color: #d2d2d2;
}

.LAY-user-login-username {
  padding-left: 38px;
}

.login {
  width: 100%;
  height: 100%;
  background: url('../../assets/img/login-bg.jpg');
  background-size: cover;
  background-position: 50%;
  position: relative;

  .login_form {
    width: 320px;
    height: 280px;
    background: #fff;
    position: absolute;
    top: 50%;
    right: 160px;
    transform: translateY(-60%);
    border-radius: 5px;
  }
}
</style>
    