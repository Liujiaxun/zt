import Index from '../components/Index'
const componentA = {
    template:`<div style="color:red;">this componentA</div>`
  }
const menu = [
    {
        id: 0,
        title: '首页',
        key: 'index',
        children: [
            {
                title: '系统首页',
                key: 'index-1',
                children: [
                    {
                        title: '个人面板',
                        key: 'index-1-1',
                        path: '/index',
                        name: 'Index',
                        component: Index,
                        meta: { requiresAuth: true },
                    },
                    {
                        title: '登录日志',
                        key: 'index-1-2',
                        path: '/loginlog',
                        name: 'loginlog',
                        component: componentA,
                        meta: { requiresAuth: true },
                    }
                ]
            }
        ]
    },
    // {
    //     id:1,
    //     title:'客户',
    //     key:'customer',
    //     children:[
    //         {
    //             title:'基本信息',
    //             key:'customer-1',
    //             children:[
    //                 {
    //                     title:'客户管理',
    //                     key:'customer-1-1',
    //                     children:[
    //                         {
    //                             title:'客户基本资料',
    //                             key:'customer-1-1-1',
    //                             children:[]
    //                         },
    //                         {
    //                             title:'客户资源管理',
    //                             key:'customer-1-1-2',
    //                             children:[]
    //                         }
    //                     ]
    //                 }
    //             ]
    //         },
    //         {
    //             title:'金融信息',
    //             key:'customer-2',
    //             children:[
    //                 {
    //                     title:'金融管理',
    //                     key:'customer-2-1',
    //                     children:[
    //                         {
    //                             title:'客户余额',
    //                             key:'customer-2-1-1',
    //                             children:[]
    //                         }
    //                     ]
    //                 }
    //             ]
    //         }
    //     ]
    // },
    {
        id: 2,
        title: '订单',
        key: 'order',
        children: [
            {
                title: '订单管理',
                key: 'order-1',
                children: [
                    {
                        title: '订单列表',
                        key: 'order-1-1',
                        children: [],
                        path: '/orderlist',
                        name: 'orderlist',
                        component: Index,
                        meta: { requiresAuth: true },
                    },
                    {
                        title: '多箱订单列表',
                        key: 'order-1-2',
                        children: [],
                        path: '/sloginlog',
                        name: 'sloginlog',
                        component: Index,
                        meta: { requiresAuth: true },
                    },
                    {
                        title: '订单列表下载',
                        key: 'order-1-3',
                        children: [],
                        path: '/orderlistdown',
                        name: 'orderlistdown',
                        component: Index,
                        meta: { requiresAuth: true },
                    }

                ]
            }
        ]
    }, {
        id: 3,
        title: '渠道',
        key: 'channel',
        children: [
            {
                title: '渠道管理',
                key: 'channel-1',
                children: [
                    {
                        title: '物流商',
                        key: 'channel-1-1',
                        children: [],
                        path: '/logistics',
                        name: 'logistics',
                        component: Index,
                        meta: { requiresAuth: true },
                    },
                    {
                        title: '服务渠道',
                        key: 'channel-1-2',
                        children: [],
                        path: '/service',
                        name: 'service',
                        component: Index,
                        meta: { requiresAuth: true },
                    },
                    {
                        title: '号码池管理',
                        key: 'channel-1-3',
                        children: [],
                        path: '/numgl',
                        name: 'numgl',
                        component: Index,
                        meta: { requiresAuth: true },
                    }
                ]
            },
            {
                title: '账户管理',
                key: 'channel-2',
                children: [
                    {
                        title: '发件地址管理',
                        key: 'channel-2-1',
                        children: [],
                        path: '/saddress',
                        name: 'saddress',
                        component: Index,
                        meta: { requiresAuth: true },
                    },
                    {
                        title: '渠道账户管理',
                        key: 'channel-2-2',
                        children: [],
                        path: '/channelaccount',
                        name: 'channelaccount',
                        component: Index,
                        meta: { requiresAuth: true },
                    }
                ]
            },
            {
                title: '限制管理',
                key: 'channel-3',
                children: [
                    {
                        title: '限制管理规则',
                        key: 'channel-3-1',
                        children: [],
                        path: '/astrict',
                        name: 'astrict',
                        component: Index,
                        meta: { requiresAuth: true },
                    },
                    {
                        title: '渠道错误规则',
                        key: 'channel-3-2',
                        children: [],
                        path: '/qderrrule',
                        name: 'qderrrule',
                        component: Index,
                        meta: { requiresAuth: true },
                    },
                    {
                        title: '错误定义',
                        key: 'channel-3-3',
                        children: [],
                        path: '/errsetting',
                        name: 'errsetting',
                        component: Index,
                        meta: { requiresAuth: true },
                    }
                ]
            }

        ]
    },
    {
        id: 4,
        title: '成本',
        key: 'cost',
        children: [
            {
                title: '成本',
                key: 'cost-1',
                children: []
            },
        ]
    },
    {
        id: 4,
        title: '轨迹',
        key: 'trajectory',
        children: [
            {
                title: '轨迹管理',
                key: 'trajectory-1',
                children: [
                    {
                        title: '轨迹查询',
                        key: 'trajectory-1-1',
                        children: [],
                        path: '/trajectoryquery',
                        name: 'trajectoryquery',
                        component: Index,
                        meta: { requiresAuth: true }
                    },
                    {
                        title: '下载列表',
                        key: 'trajectory-1-2',
                        children: [],
                        path: '/downlist',
                        name: 'downlist',
                        component: Index,
                        meta: { requiresAuth: true }
                    }
                ]
            },
            {
                title: '节点管理',
                key: 'trajectory-2',
                children: [
                    {
                        title: '节点设置',
                        key: 'trajectory-2-1',
                        children: [],
                        path: '/nodesetting',
                        name: 'nodesetting',
                        component: Index,
                        meta: { requiresAuth: true }
                    }
                ]
            }
        ]
    },
    {
        id: 5,
        title: '统计',
        key: 'count',
        children: [
            {
                title: '成本',
                key: 'count-1',
                children: []
            },
        ]
    },
    {
        id: 6,
        title: '用户',
        key: 'user',
        children: [
            {
                title: '角色管理',
                key: 'user-1',
                children: [
                    {
                        title: '组织机构',
                        key: 'user-1-1',
                        children: [],
                        path: '/organization',
                        name: 'organization',
                        component: Index,
                        meta: { requiresAuth: true }
                    }, {
                        title: '菜单管理',
                        key: 'user-1-2',
                        children: [],
                        path: '/menumanage',
                        name: 'menumanage',
                        component: Index,
                        meta: { requiresAuth: true }
                    },
                    {
                        title: '角色管理',
                        key: 'user-1-3',
                        children: [],
                        path: '/role',
                        name: 'role',
                        component: Index,
                        meta: { requiresAuth: true }
                    }, {
                        title: '权限管理',
                        key: 'user-1-4',
                        children: [],
                        path: '/permission',
                        name: 'permission',
                        component: Index,
                        meta: { requiresAuth: true }
                    },
                ]
            },
            {
                title: '日志管理',
                key: 'user-2',
                children: [
                    {
                        title: '登录日志',
                        key: 'user-2-1',
                        children: [],
                        path: '/log',
                        name: 'log',
                        component: Index,
                        meta: { requiresAuth: true }
                    }, {
                        title: '异常登录',
                        key: 'user-2-2',
                        children: [],
                        path: '/errloginlog',
                        name: 'errloginlog',
                        component: Index,
                        meta: { requiresAuth: true }
                    },
                    {
                        title: '操作日志',
                        key: 'user-2-3',
                        children: [],
                        path: '/operationlog',
                        name: 'operationlog',
                        component: Index,
                        meta: { requiresAuth: true }
                    }
                ]
            },

        ]
    },
    {
        id: 7,
        title: '设置',
        key: 'setting',
        children: [
            {
                title: '设置',
                key: 'setting',
                children: []
            }
        ]
    }
]
export const Routers = function(){
    let router = [];
    for(let i=0;i<menu.length;i++){
        let menu1 = menu[i].children;
        if(menu1){
            for(let j=0;j<menu1.length;j++){
                let menu2 = menu1[j].children;
                if(menu2){
                    for(let x=0;x<menu2.length;x++){
                        router.push(menu2[x])
                    }
                }
            }
        }
    }
    return router;
}



export default menu;