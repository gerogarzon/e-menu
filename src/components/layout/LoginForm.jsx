import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';

const LoginForm = () => {
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
    //   onFinish={onFinish}
    //   onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      
      <Form.Item
        label="Nombre de Usuario"
        name="username"
        rules={[{ required: true, message: 'Ingresa el nombre de Usuario!' }]}
      >
  
        <Input />
      </Form.Item>

      <Form.Item
        label="Contraseña"
        name="password"
        rules={[{ required: true, message: 'Ingresa tu contraseña!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Recordarme</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Enviar
        </Button>
      </Form.Item>
    </Form>
  )
}

export default LoginForm