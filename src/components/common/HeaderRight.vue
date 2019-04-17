<template>
    <div class='header-right'>
        <div class='userBox header-box'>
            <div class='photo'>
            <img src="../assets/img/u14.png" alt="">
            </div>
            {{$t('common.changeLanguage')}}
        </div>
        <div class='header-box' @click='goHome'>
            <div class='photo'>
            <img src="../assets/img/u132.png" alt="返回首页" title='返回首页'>
            </div>
        </div>
        <div class='messageBox header-box'>
        <span class="layui-badge tag">99</span>
            <div class='photo'>
            <img src="../assets/img/u141.png" alt="消息" title='消息'>
            </div>
        </div>
        <div class='header-box' @click='logout'>
            <div class='photo'>
            <img src="../assets/img/u149.png" alt="退出登录" title='退出登录'>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>
