"use client";
import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input, Typography, Flex } from "antd";
import Link from "next/link";

type FieldType = {
  email?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const LoginForm = () => {
  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
       className="md:w-[481px]"
    >
      <Form.Item<FieldType>
        label="Email"
        name="email"
        rules={[
          { required: true, message: "Please input your email!" },
          {
            type: "email",
            message: "Please enter a valid email address!",
          },
        ]}
      >
        <Input type="email" placeholder="Example@gamil.com" />
      </Form.Item>

      <Form.Item<FieldType>
        name="password"
        label="Password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password placeholder="*******" />
      </Form.Item>

      <Form.Item<FieldType>
        name="remember"
        valuePropName="checked"
        style={{ color: "#F8FAFC" }}
      >
        <Flex justify="space-between" align="center">
          <Checkbox style={{ color: "#F8FAFC" }}>Remember me</Checkbox>
          <Link href={"/forgetPassword"} style={{ textDecoration: "" }}>
            <p style={{ textDecoration: "none", color: "#F8FAFC" }}>
              Forgot Password?
            </p>
          </Link>
        </Flex>
      </Form.Item>

      <Form.Item style={{ display: "flex", justifyContent: "center" }}>
        <Button
          htmlType="submit"
          size="large"
          style={{ backgroundColor: "#4DB5AD", color: "#F8FAFC" }}
        >
          Sign in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
