"use client";
import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import Image from "next/image";
import { useState } from "react";
import foorm from "../../public/Form/form.png";
import arrrow from "../../public/rightArrow.svg";

const FormComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const onFinish = async (values) => {
    setIsLoading(true);
    const response = await fetch("https://sheetdb.io/api/v1/i6yywx20wi47f", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const res = await response.json();
    if (res.created) {
      setShowPopup(true);
      setIsLoading(false);
      setTimeout(() => {
        window.location.reload();
        setTimeout(() => {
          setShowPopup(false);
        }, 1000);
      }, 1000);
    } else {
      setIsLoading(false);
      setShowErrorPopup(true);
      setTimeout(() => {
        setShowErrorPopup(false);
      }, 2000);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      {isLoading && (
        <div class="overlay">
          <span class="loader"></span>
        </div>
      )}
      <div className="w-full lg:flex items-center justify-between px-2  sm:px-0 bg-gradient-to-r from-[#103D33] via-[#5C6337] to-[#A4873D]">
        <div className="lg:w-[50%] flex lg:pt-[80px] pt-[40px]">
          <div className="lg:px-[40px] px-[20px]">
            <p className="text-[24px] hidden lg:block font-[600] text-[white]">
              Apply for the Digital Marketing <br /> Programme
            </p>
            <p className="text-[24px] lg:hidden text-center font-[600] text-[white]">
              Apply for the Digital Marketing Programme
            </p>
            <Image src={foorm} alt="img" className="" />
          </div>
        </div>
        <div className="lg:w-[40%] w-[95%] pb-[20px] mx-auto">
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
                  name="Name"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your Name",
                    },
                  ]}
                >
                  <Input placeholder="Name" />
                </Form.Item>

                <Form.Item
                  //   label="Password"
                  name="Email"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your email",
                    },
                  ]}
                >
                  <Input placeholder="Email" />
                </Form.Item>
                <Form.Item
                  //   label="Password"
                  name="Subject"
                  rules={[
                    {
                      required: true,
                      message: "Please enter Subject",
                    },
                  ]}
                >
                  <Input placeholder="Subject" />
                </Form.Item>
                <Form.Item name="Message">
                  <TextArea rows={4} placeholder="Message" />
                </Form.Item>
                <div className="flex justify-center">
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="flex justify-center items-center py-[24px] lg:px-[24px] hover:px-[26px]"
                    >
                      <p>Send Request</p>
                      <Image src={arrrow} alt="arrow" className="ml-1" />
                    </Button>
                  </Form.Item>
                </div>
              </Form>
            </div>
          </div>
          {showPopup && (
            <div className="w-full h-screen bg-[rgba(0,0,0,.3)] fixed left-0 top-0 z-50 flex justify-center items-center">
              <div className=" bg-[#fff] p-8 rounded-md text-[15px] flex justify-center items-center w-[40%]">
                <p className="text-[#329b32]">Form submitted successfully!</p>
              </div>
            </div>
          )}

          {showErrorPopup && (
            <div className="w-full h-screen bg-[rgba(0,0,0,.3)] fixed left-0 top-0 z-50 flex justify-center items-center">
              <div className=" bg-[#fff] p-8 rounded-md text-[15px] flex justify-center items-center w-[40%]">
                <p className="text-[#cd3e3e]">
                  Something went wrong. Try again.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FormComponent;
