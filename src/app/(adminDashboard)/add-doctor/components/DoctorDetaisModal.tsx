import { TStateProps } from "@/types/utilsTypes";
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
import Image from "next/image";
import profileImg from "@/assets/image/defaultProfileImg.png";
import { MdOutlineEdit } from "react-icons/md";
import dayjs from "dayjs";



const DoctorDetaisModal = ({
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
            initialValues={{title: "Pro.Dr", name: "Dr. Maria Waston", dob: dayjs(new Date('2024-08-31')), experience: "1", email: "example@gmail.com"}}
          >
            <div className="flex justify-center rounded-full">
            <Image src={profileImg} alt="defaultImage" className="rounded-full size-28"></Image>
            </div>

            {/* image upload  */}
            <Form.Item
              name="doctorImg"
              valuePropName="fileList"
              getValueFromEvent={(e) =>
                Array.isArray(e) ? e : e && e.fileList
              }
              style={{
                textAlign: "center",
                position: "relative",
                bottom: "35px",
                left: "40px",
              }}
            >
              <Upload
                name="doctorImg"
                listType="picture"
                beforeUpload={() => false}
              >
                <div className="bg-[#2B4E63] p-1 rounded">
               <MdOutlineEdit size={20} className="text-white " />
               </div>
              </Upload>
            </Form.Item>

            {/*  title */}
            <Form.Item label="Title" name="title">
              <Input name="title" size="large"  placeholder="Enter Doctor Title"></Input>
            </Form.Item>

             {/* email */}
             <Form.Item label="Email" name="email"  rules={[{ type: "email"}]}>
              <Input size="large" placeholder="Enter Doctor Title"></Input>
            </Form.Item>


            {/*  name  */}
            <Form.Item label="First & Last name" name="name">
              <Input size="large" defaultValue={"Dr. Maria Waston"} placeholder="Enter Doctor Name"></Input>
            </Form.Item>

            {/*   Date of birth input  */}
            <Form.Item label="Date of birth" name="dob">
              <DatePicker/>
            </Form.Item>

            {/*  Experience  */}
            <Form.Item
              label="Experience"
              name="experience"
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

            {/* About Doctor */}
            <Form.Item label="About Doctor" name="aboutDoc">
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
              Save
            </Button>
          </Form>
        </div>
      </Modal>
    </ConfigProvider>
  );
};

export default DoctorDetaisModal;
