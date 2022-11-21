import http from '../utils/requset'

// 请求首页数据
export const getData = () => {
    // 返回一个promise对象
    return http.get('/home/getData')
}



export const getProgram='/program/select'

export const addac= '/program/add'

export const findac ='/program/select/'

export const editac = (data) => {
    return http.post('/program/update', data)
}

export const delac = (data) => {
    return http.post('/program/delete/'+data)
}


export const getblessing='/bless/select'


export const delblessing= (data) => {
    return http.post('/bless/delete/'+data)
}

export const editStatus= (data) => {
    return http.post('/bless/update/'+data)
}

export const getUser ='/user/select'

export const addUser = '/user/add'

export const findUser ='/user/select/'

export const editUser = (data) => {
    return http.post('/user/update', data)
}

export const delUser = (data) => {
    return http.post('/user/delete/'+data)
}

export const getbackground ='/background/select'
export const addbackground='/background/add'
export const editbackground='/background/update'
export const delbackground = (data) => {
    return http.post('/background/delete/'+data)
}

export const getMenu = (data) => {
    return http.post('/permission/getMenu', data)
}

export const getalumnus ='/alumnus/select'

export const addalumnus ='/alumnus/add'

export const editalumnus  ='/alumnus/update'


export const delalumnus = (data) => {
    return http.post('/alumnus/delete/'+data)
}

export const getachievement ='/achievement/select'

export const addachievement  = (data) => {
    return http.post('/achievement/add', data)
}

export const editachievement  = (data) => {
    return http.post('/achievement/update', data)
}

export const delachievement  = (data) => {
    return http.post('/achievement/delete/'+data)
}