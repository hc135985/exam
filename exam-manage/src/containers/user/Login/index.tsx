import React, { Component } from 'react';
import { _login } from '@/api/user'

class Login extends Component<any> {
    status = {

    }
    async  onChange() {
        let action = {
            user_name: (this.user_name as HTMLInputElement).value,
            user_pwd: (this.user_pwd as HTMLInputElement).value
        }
        let res = await _login(action)
        if (res.data.code) {
            localStorage.setItem('token', res.data.token)
            this.props.history.push('/')
        }
    }
    user_name: null | HTMLInputElement = null
    user_pwd: null | HTMLInputElement = null
    render() {
        return (
            <div className='login'>
                <div>
                    <p>
                        用户名： <input type="text" value='heinan' ref={(e) => { this.user_name = e }} name='user_name' onChange={() => { }} />
                    </p>
                    <p>
                        密码 <input type="password" value='1qaz!QAZ' ref={(e) => { this.user_pwd = e }} name='user_pwd' onChange={() => { }} />
                    </p>
                    <button onClick={() => { this.onChange() }}>登录</button>
                </div>

            </div>
        );
    }
}

export default Login;