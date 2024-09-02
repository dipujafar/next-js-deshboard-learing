import { TStateProps } from "@/types/utilsTypes";
import { UploadOutlined } from "@ant-design/icons";
import {
  Button,
  ConfigProvider,
  DatePicker,
  Form,
  Input,
  Modal,
  Select,
  Upload,
} from "antd";
import TextArea from "antd/es/input/TextArea";


const DoctorModal = ({
  state: open,
  setState: setOpen,
}: TStateProps<boolean>) => {
  const [form] = Form.useForm();
  const { Option } = Select;
  //@ts-ignore
  const handleSubmit = (values) => {
    console.log("form values", values);
  };
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            colorBgContainer: "transparent",
            activeBorderColor: "#8FD0CB",
            hoverBorderColor: "#8FD0CB",
            colorIcon: "rgb(51, 74, 85)",
            colorTextPlaceholder: "rgb(192, 199, 202)",
            colorBorder: "#D9D9D9",
          },
          Form: {
            fontFamily: "var(--font-kumbh-sans)",
            labelColor: "#2B4E63",
          },
          Select: {
            colorTextPlaceholder: "rgb(192, 199, 202)",
          },
        },
      }}
    >
      <Modal
        open={open}
        footer={null}
        centered={true}
        onCancel={() => setOpen(false)}
        style={{
          minWidth: "max-content",
        }}
      >
        <div>
          <Form
            form={form}
            onFinish={handleSubmit}
            layout="vertical"
            style={{
              maxWidth: 500,
              marginTop: "25px",
            }}
          >
            {/* image upload  */}
            <Form.Item
              name="doctorImg"
              valuePropName="fileList"
              getValueFromEvent={(e) =>
                Array.isArray(e) ? e : e && e.fileList
              }
              style={{
                textAlign: "center",
                border: "2px dashed #D9D9D9",
                paddingBlock: "20px",
                borderRadius: "10px",
              }}
            >
              <Upload
                name="doctorImg"
                listType="picture"
                beforeUpload={() => false}
              >
                <Button icon={<UploadOutlined />}>Upload Doctor Image</Button>
              </Upload>
            </Form.Item>

            {/*  input  title */}
            <Form.Item label="Title" name="title"  rules={[{ required: true, message: "Please enter soctor title" }]}>
              <Input size="large" placeholder="Enter Doctor Title"></Input>
            </Form.Item>

            {/*  input  email */}
            <Form.Item label="Email" name="email"  rules={[{ type: "email",required: true }]}>
              <Input size="large" placeholder="Enter Doctor Title"></Input>
            </Form.Item>

            {/* input  name  */}
            <Form.Item label="First & Last name" name="name"  rules={[{ required: true, message: "Please enter doctor name" }]}>
              <Input size="large" placeholder="Enter Doctor Name"></Input>
            </Form.Item>

            {/* input  Date of birth input  */}
            <Form.Item label="Date of birth" name="dob"  rules={[{ required: true, message: "Please select date of brith" }]}>
              <DatePicker />
            </Form.Item>

            {/* input  Experience  */}
            <Form.Item
              label="Experience"
              name="experience"
              rules={[{ required: true, message: "Please select a value" }]}
            >
              <Select placeholder="Select Experience">
                <Option value="0">0</Option>
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
                <Option value="4">4</Option>
                <Option value="5">5</Option>
              </Select>
            </Form.Item>

            {/* input  About Doctor */}
            <Form.Item label="First & Last name" name="name">
              <TextArea rows={3}></TextArea>
            </Form.Item>

            <Button
              htmlType="submit"
              style={{
                width: "100%",
                height: "48px",
                backgroundColor: "#2B4E63",
                color: "#fff",
              }}
              size="large"
            >
              Add
            </Button>
          </Form>
        </div>
      </Modal>
    </ConfigProvider>
  );
};

export default DoctorModal;
