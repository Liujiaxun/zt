<template>
    <div class='header-right'>
        <div class='userBox header-box'>
            <div class='photo'>
            <img src="../../assets/img/u14.png" alt="">
            </div>
            {{$t('common.changeLanguage')}}
        </div>
        <div class='header-box' @click="goHome">
            <div class='photo'>
            <img src="../../assets/img/u132.png" alt="返回首页" title='返回首页'>
            </div>
        </div>
        <div class='messageBox header-box'>
            <span class="layui-badge tag">99</span>
            <div class='photo'>
            <img src="../../assets/img/u141.png" alt="消息" title='消息'>
            </div>
        </div>
        <div class='header-box' @click="logout">
            <div class='photo'>
                <img src="../../assets/img/u149.png" alt="退出登录" title='退出登录'>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        
        },  
        methods:{
            goHome(){
                this.$emit('goHome');
            },
            logout(){
                this.$emit('logout');
            }
        },
    mounted(){
        console.log(this.$props)
    }
}
</script>
<style lang="stylus">
.header-right
    float:right
    height 100%;
    .header-box
        margin-left: 10px;
        margin-right: 5px;
        padding: 0px 10px;
        cursor pointer
        float:left
        &:first-child
            margin-left:0;
        &:last-child
            margin-right:0;
    .userBox
        padding-left:40px;
        position relative
        color:#fff;
        font-size:18px;
        .photo
            position:absolute;
            left: 0;
    .messageBox
        width: 50px;
        text-align center
        padding:0;
        position relative
    .tag
        position absolute
        top:15px;
        border-radius: 20px;
    img 
        margin-top:2px;
</style>
