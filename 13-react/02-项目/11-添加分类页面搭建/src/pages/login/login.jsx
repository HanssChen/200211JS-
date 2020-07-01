import React, {Component} from 'react'
import {
  Form,
  Icon,
  Input,
  Button,
  message
} from 'antd'
import './login.less'
import memorySave from '../../utils/memorySave'
import localstorageSave from '../../utils/localstorageSave'
import {reqLogin} from '../../api'

const Item = Form.Item // 不能写在import之前


/*
登陆的路由组件
 */
class Login extends Component {

  handleSubmit = (event) => {

    // 阻止事件的默认行为
    event.preventDefault()

    // 对所有表单字段进行检验
    this.props.form.validateFields(async (err, values) => {
      // 检验成功
      if (!err) {
        // console.log('提交登陆的ajax请求', values)
        const {username, password} = values
        const result = await reqLogin(username, password)
        // console.log('login()', result)
        if(result.data.status === 0) {
          // 提示登录成功
          message.success('登录成功', 2)
          // 保存用户登录信息
          memorySave.user = result.data.data
          localstorageSave.saveUser(result.data.data)
          // 跳转到主页面
          this.props.history.replace('/')

        } else {
          // 登录失败, 提示错误
          message.error(result.msg)
        }
      } else {
        console.log('检验失败!')
      }
    });

    // 得到form对象
    // const form = this.props.form
    // // 获取表单项的输入数据
    // const values = form.getFieldsValue()
    // console.log('handleSubmit()', values)
  }

  /*
  对密码进行自定义验证
  */
  /*
   用户名/密码的的合法性要求
     1). 必须输入
     2). 必须大于等于4位
     3). 必须小于等于12位
     4). 必须是英文、数字或下划线组成
    */
  validatePwd = (rule, value, callback) => {
    console.log('validatePwd()', rule, value)
    if(!value) {
      callback('密码必须输入')
    } else if (value.length<4) {
      callback('密码长度不能小于4位')
    } else if (value.length>12) {
      callback('密码长度不能大于12位')
    } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
      callback('密码必须是英文、数字或下划线组成')
    } else {
      callback() // 验证通过
    }
    // callback('xxxx') // 验证失败, 并指定提示的文本
  }

  render () {

    // 得到具强大功能的form对象
    const form = this.props.form
    const { getFieldDecorator } = form;

    return (
      <div className="login">
        <header className="login-header">
          <h1>后台管理系统</h1>
        </header>
        <section className="login-content">
          <h2>用户登陆</h2>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Item>
              {
                /*
              用户名/密码的的合法性要求
                1). 必须输入
                2). 必须大于等于4位
                3). 必须小于等于12位
                4). 必须是英文、数字或下划线组成
               */
              }
              {
                getFieldDecorator('username', { // 配置对象: 属性名是特定的一些名称
                  // 声明式验证: 直接使用别人定义好的验证规则进行验证
                  rules: [
                    { required: true, whitespace: true, message: '用户名必须输入' },
                    { min: 4, message: '用户名至少4位' },
                    { max: 12, message: '用户名最多12位' },
                    { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数字或下划线组成' },
                  ],
                  initialValue: 'admin' //指定初始值
                })(
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="用户名"
                  />
                )
              }
            </Item>
            <Form.Item>
              {
                getFieldDecorator('password', {
                  rules: [
                    {
                      validator: this.validatePwd
                    }
                  ]
                })(
                  <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="密码"
                  />
                )
              }

            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登陆
              </Button>
            </Form.Item>
          </Form>
        </section>
      </div>
    )
  }
}

const WrapLogin = Form.create()(Login)
export default WrapLogin