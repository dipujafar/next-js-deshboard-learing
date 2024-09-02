"use client";
import { ConfigProvider } from "antd";
import { Form, Input, Button } from "antd";

const ChangePasswordForm = () => {
  //@ts-ignore
  const onFinishChangePassword = (values) => {
    console.log("Change Password values:", values);
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            colorBgContainer: "transparent",
            activeBorderColor: "#243A40",
            hoverBorderColor: "#46A39D",
            colorTextPlaceholder: "rgb(192, 199, 202)",
            colorIcon: "rgba(255,255,255,0.45)",
            colorBorder: "#D9D9D9",
            colorText: "white",
          },
          Form: {
            fontFamily: "var(--font-kumbh-sans)",
            labelColor: "white",
          },
        },
      }}
    >
      <Form layout="vertical" onFinish={onFinishChangePassword}>
        <Form.Item
          label="Current Password"
          name="currentPassword"
          rules={[
            {
              required: true,
              message: "Please enter your current password!",
            },
          ]}
        >
          <Input.Password size="large" placeholder="Current Password" />
        </Form.Item>

        <Form.Item
          label="New Password"
          name="newPassword"
          rules={[{ required: true, message: "Please enter a new password!" }]}
        >
          <Input.Password size="large" placeholder="New Password" />
        </Form.Item>

        <Form.Item
          label="Confirm New Password"
          name="confirmNewPassword"
          rules={[
            {
              required: true,
              message: "Please confirm your new password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("newPassword") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password size="large" placeholder="Confirm New Password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" style={{backgroundColor: "#4DB5AD"}} htmlType="submit" block size="large">
            Save Changes
          </Button>
        </Form.Item>
      </Form>
    </ConfigProvider>
  );
};

export default ChangePasswordForm;
