"use client";
import { ConfigProvider } from "antd";
import { Form, Input, Button } from "antd";

const EditProfileForm = () => {
  //@ts-ignore
  const onFinishEditProfile = (values) => {
    console.log("Edit Profile values:", values);
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            colorBgContainer: "transparent",
            activeBorderColor: "#243A40",
            hoverBorderColor: "#46A39D",

            colorText: "white",
          },
          Form: {
            fontFamily: "var(--font-kumbh-sans)",
            labelColor: "white",
          },
         
        },
      }}
    >
      <Form
        layout="vertical"
        onFinish={onFinishEditProfile}
        initialValues={{
          userName: "Akash Sharif",
          email: "akash@gmail.com",
          contactNo: "99007007007",
        }}
      >
        <Form.Item
          label="User Name"
          name="userName"
          rules={[{ required: true, message: "Please enter your user name!" }]}
        >
          <Input size="large" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Please enter a valid email!",
            },
          ]}
        >
          <Input  size="large" />
        </Form.Item>

        <Form.Item
          label="Contact no"
          name="contactNo"
          rules={[
            {
              required: true,
              message: "Please enter your contact number!",
            },
          ]}
        >
          <Input size="large"  />
        </Form.Item>

        <Form.Item >
          <Button type="primary" htmlType="submit"  style={{backgroundColor: "#4DB5AD"}} block size="large">
            Save Changes
          </Button>
        </Form.Item>
      </Form>
    </ConfigProvider>
  );
};

export default EditProfileForm;
