"use client";
import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input, Typography, Flex } from "antd";
import { log } from "console";
import Link from "next/link";
import { toast } from "sonner";

type FieldType = {
  newPass?: string;
  confirmPass?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
  if (values?.newPass === values?.confirmPass) {
    toast.success("Successfully Password Reset");
  } else {
    toast.error("Does not match Comfirm Password");
  }
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const SetNewPassForm = () => {
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
        label="New Password"
        name="newPass"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input.Password placeholder="*******" />
      </Form.Item>

      <Form.Item<FieldType>
        name="confirmPass"
        label="Confirm Password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password placeholder="*******" />
      </Form.Item>

      <Form.Item style={{ display: "flex", justifyContent: "center" }}>
        <Button
          htmlType="submit"
          size="large"
          style={{ backgroundColor: "#4DB5AD", color: "#F8FAFC" }}
        >
          Update Password
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SetNewPassForm;
