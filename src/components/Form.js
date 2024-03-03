import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import Image from "next/image";
import form from "../../public/Form/form.png";
import arrrow from "../../public/rightArrow.svg";

const FormComponent = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="w-full flex items-center justify-between px-2  sm:px-0 bg-gradient-to-r from-[#103D33] via-[#5C6337] to-[#A4873D]">
      <div className="w-[50%] flex pt-[80px]">
        <div className="px-[40px]">
          <p className="text-[24px] font-[600] text-[white]">
            Apply for the Digital Marketing <br /> Programme
          </p>
          <Image src={form} alt="img" className="" />
        </div>
      </div>
      <div className="w-[40%] mx-auto">
        <div className="bg-[white] rounded-3xl min-h-[320px]">
            <div className="flex justify-center pb-[35px] pt-[50px]">
          <Form
          className=""
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please enter your Name",
                },
              ]}
            >
              <Input placeholder="Name"/>
            </Form.Item>

            <Form.Item
            //   label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please enter your email",
                },
              ]}
            >
              <Input  placeholder="Email"/>
            </Form.Item>
            <Form.Item
            //   label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please enter Subject",
                },
              ]}
            >
              <Input  placeholder="Subject"/>
            </Form.Item>
            <Form.Item>
          <TextArea rows={4} placeholder="Message"/>
        </Form.Item>


            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit" className="flex justify-center items-center py-[24px] px-[24px] hover:px-[26px]">
                <p>Send Request</p>
                <Image src={arrrow} alt="arrow" className="ml-1" />
              </Button>
            </Form.Item>
          </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
