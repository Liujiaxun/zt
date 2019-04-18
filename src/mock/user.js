import ApiPath from "../core/ApiPath"
const Mock = require("mockjs")

Mock.mock(ApiPath.user.getUserInfo, "get", {
    
})

Mock.mock(ApiPath.user.login, "post", function (req) {
    console.log(req)

    return Mock.mock(
        {
            "Status": 0,
            "Data": {
                "UserId": 1,
                "UserName": "@CNAME",
                "Token": '@guid',
                "TokenExpires": Math.round((new Date()).getTime()),
                "Permissions|100-200":[Math.floor(Math.random()*100)],
                "Result": true,
                "Roles": [Math.floor(Math.random()*100)],
            },
            "Msg": "success"
        }
    )
})

// 'name': '@cname',                   // 中文名称
// 'age|1-100': 100,                   // 100以内随机整数
// 'birthday': '@date("yyyy-MM-dd")',  // 日期
// 'city': '@city(true)',              // 中国城市
// 'phone': /^1[385][1-9]\d{8}/,       // 手机号
// 'token': '@guid',                  // token
