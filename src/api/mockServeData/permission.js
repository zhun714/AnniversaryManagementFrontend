import Mock from 'mockjs'
export default {
    getMenu: config => {
        const { username, password } = JSON.parse(config.body)
        // 先判断用户是否存在
        // 判断账号和密码是否对应
        if (username === 'admin' && password === 'admin') {
            return {
                code: 20000,
                data: {
                    menu: [
                        {
                            path: '/home',
                            name: 'home',
                            label: '首页',
                            icon: 's-home',
                            url: 'home/index'
                        },
                        {
                            path: '/huodong',
                            name: 'huodong',
                            label: '活动管理',
                            icon: 'folder-opened',
                            url: 'huodong/index'
                        },
                        {
                            path: '/user',
                            name: 'user',
                            label: '校友管理',
                            icon: 'user',
                            url: 'User/index'
                        },
                        {
                            path: '/zhufu',
                            name: 'zhufu',
                            label: '祝福管理',
                            icon: 'chat-dot-square',
                            url: 'zhufu/index'
                        },
                        {
                            path: '/bkground',
                            name: 'bkground',
                            label: '虚拟背景管理',
                            icon: 'camera',
                            url: 'bkground/index'
                        },
                        {
                            label: '学院风采管理',
                            icon: 'notebook-2',
                            children: [
                                {
                                    path: '/page1',
                                    name: 'page1',
                                    label: '学院风采',
                                    icon: 'setting',
                                    url: 'xueyuanguanli/xueyuan.vue'
                                },
                                {
                                    path: '/page2',
                                    name: 'page2',
                                    label: '校友风采',
                                    icon: 'setting',
                                    url: 'xueyuanguanli/xiaoyou.vue'
                                }
                            ]
                        }
                    ],
                    token: Mock.Random.guid(),
                    message: '获取成功'
                }
            }
        } else if (username === 'xiaoxiao' && password === 'xiaoxiao') {
            return {
                code: 20000,
                data: {
                    menu: [
                        {
                            path: '/',
                            name: 'home',
                            label: '首页',
                            icon: 's-home',
                            url: 'home/index'
                        },
                        {
                            path: '/video',
                            name: 'video',
                            label: '商品管理',
                            icon: 'video-play',
                            url: 'mall/index'
                        }
                    ],
                    token: Mock.Random.guid(),
                    message: '获取成功'
                }
            }
        } else {
            return {
                code: -999,
                data: {
                    message: '密码错误'
                }
            }
        }

    }
}