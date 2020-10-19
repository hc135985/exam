import request from '../utils/require';
export function _login(action: any) {
    return request.post('/user/login', action)
}