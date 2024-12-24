"use client";
import React from "react";
import {
  Layout,
  Row,
  Col,
  Tabs,
  Form,
  Input,
  Select,
  Button,
  Checkbox,
  Input as TextArea,
  Card,
  Flex, 
  Progress 
} from "antd";


const { Content } = Layout;

export default function Landing() {
  const container1 =
    "border tabs container rounded-top-4 mt-4 p-0 d-flex gap-x-5 shadow-md";
  const inputStyles = "pl-4 rounded-5 w-75  p-2 shadow-md ";
  const button = "rounded-5 shadow-md w-75 mt-3";

  const validateForm = (values) => {
    const errors = {};

    if (!values.userId) errors.userId = "User ID is required.";

    if (!values.firstName) {
      errors.firstName = "First Name is required.";
    } else if (values.firstName.length < 2) {
      errors.firstName = "First Name must be at least 2 characters.";
    }

    if (!values.lastName) errors.lastName = "Last Name is required.";

    if (!values.email) {
      errors.email = "Email is required.";
    } else if (!/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/i.test(values.email)) {
      errors.email = "Enter a valid email address.";
    }

    if (!values.password) {
      errors.password = "Password is required.";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required.";
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Passwords do not match.";
    }

    if (
      values.panNumber &&
      !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(values.panNumber)
    ) {
      errors.panNumber = "Enter a valid PAN number (e.g., ABCDE1234F).";
    }

    if (values.aadharNumber && !/^\d{12}$/.test(values.aadharNumber)) {
      errors.aadharNumber = "Enter a valid Aadhar number.";
    }

    if (values.mobileNumber && !/^\d{10}$/.test(values.mobileNumber)) {
      errors.mobileNumber = "Enter a valid 10-digit mobile number.";
    }

    if (!values.authType) errors.authType = "Select an Authentication Type.";
    if (!values.accessMode) errors.accessMode = "Select an Access Mode.";
    if (!values.userType) errors.userType = "Select a User Type.";
    if (!values.address1) errors.address1 = "Address1 is required.";

    return errors;
  };

  const handleFormSubmit = (values) => {
    const errors = validateForm(values);
    if (Object.keys(errors).length > 0) {
      console.error("Validation errors:", errors);
    } else {
      console.log("Form submitted successfully:", values);
    }
  };
  var headers = new Headers();
  headers.append("X-CSCAPI-KEY", "API_KEY");

  var requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };
  const loginData = [
    {
      name: "John Doe",
      email: "example@gmail.com",
      loginTime: "11/11/2024 10:00 AM",
      duration: "3,11,200",
      avatar: "eswar1.png",
    },
    {
      name: "Jane Doe",
      email: "jane.doe@gmail.com",
      loginTime: "12/11/2024 09:30 AM",
      duration: "2,45,100",
      avatar: "eswar1.png",
    },
    {
      name: "Sam Smith",
      email: "sam.smith@gmail.com",
      loginTime: "13/11/2024 11:15 AM",
      duration: "4,20,000",
      avatar: "eswar1.png",
    },
    {
      name: "Alice Brown",
      email: "alice.brown@gmail.com",
      loginTime: "14/11/2024 12:45 PM",
      duration: "1,32,000",
      avatar: "eswar1.png",
    },
  ];
  const activities = [
    {
      id: 1,
      avatar: "eswar1.png",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum minus ab possimus voluptatibus corrupti dignissimos a rerum odio!",
      time: "1 day ago",
    },
    {
      id: 2,
      avatar: "eswar1.png",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum minus ab possimus voluptatibus corrupti dignissimos a rerum odio!",
      time: "2 days ago",
    },
    {
      id: 3,
      avatar: "eswar1.png",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum minus ab possimus voluptatibus corrupti dignissimos a rerum odio!",
      time: "3 days ago",
    },
    {
      id: 4,
      avatar: "eswar1.png",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum minus ab possimus voluptatibus corrupti dignissimos a rerum odio!",
      time: "4 days ago",
    },
  ];
  const items = [
    {
      label: <div className="ml-5 custom">General</div>,
      key: "General",
      children: (
        <Layout className="shadow-md rounded-bottom-4 p-4 mt-0 layout">
          <h4>User Details</h4>
          <br />
          <Form layout="vertical" onFinish={handleFormSubmit}>
            <Row gutter={16}>
              <Col lg={8} xs={12}>
                <Form.Item
                  label="User ID"
                  name="userId"
                  rules={[{ required: true, message: "User ID is required." }]}
                >
                  <Input className={inputStyles} />
                </Form.Item>
              </Col>
              <Col lg={8} xs={12}>
                <Form.Item
                  label="First Name"
                  name="firstName"
                  rules={[
                    { required: true, message: "First Name is required." },
                  ]}
                >
                  <Input className={inputStyles} />
                </Form.Item>
              </Col>
              <Col lg={8} xs={12}>
                <Form.Item
                  label="Last Name"
                  name="lastName"
                  rules={[
                    { required: true, message: "Last Name is required." },
                  ]}
                >
                  <Input className={inputStyles} />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col lg={8} xs={12}>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      type: "email",
                      message: "Enter a valid email address.",
                    },
                  ]}
                >
                  <Input type="email" className={inputStyles} />
                </Form.Item>
              </Col>
              <Col lg={8} xs={12}>
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      min: 6,
                      message: "Password must be at least 6 characters.",
                    },
                  ]}
                >
                  <Input.Password className={inputStyles} />
                </Form.Item>
              </Col>
              <Col lg={8} xs={12}>
                <Form.Item
                  label="Confirm Password"
                  name="confirmPassword"
                  dependencies={["password"]}
                  rules={[
                    {
                      required: true,
                      message: "Confirm Password is required.",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error("Passwords do not match.")
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password className={inputStyles} />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col lg={8} xs={12}>
                <Form.Item
                  label="PAN Number"
                  name="panNumber"
                  rules={[
                    {
                      pattern: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
                      message: "Enter a valid PAN number (e.g., ABCDE1234F).",
                    },
                  ]}
                >
                  <Input maxLength={10} className={inputStyles} />
                </Form.Item>
              </Col>
              <Col lg={8} xs={12}>
                <Form.Item
                  label="Aadhar Number"
                  name="aadharNumber"
                  rules={[
                    {
                      pattern: /^\d{12}$/,
                      message: "Enter a valid Aadhar number.",
                    },
                  ]}
                >
                  <Input maxLength={12} className={inputStyles} />
                </Form.Item>
              </Col>
              <Col lg={8} xs={12}>
                <Form.Item
                  label="Mobile Number"
                  name="mobileNumber"
                  rules={[
                    {
                      pattern: /^\d{10}$/,
                      message: "Enter a valid 10-digit mobile number.",
                    },
                  ]}
                >
                  <Input type="tel" className={inputStyles} />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col lg={8} xs={12}>
                <Form.Item
                  label="Authentication Type"
                  name="authType"
                  rules={[
                    {
                      required: true,
                      message: "Select an Authentication Type.",
                    },
                  ]}
                >
                  <Select className="shadow-md w-75 h-10">
                    <Select.Option value="Data Base"> Data Base</Select.Option>
                    <Select.Option value="LDAP">LDAP</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col lg={8} xs={12}>
                <Form.Item
                  label="Access Mode"
                  name="accessMode"
                  rules={[
                    { required: true, message: "Select an Access Mode." },
                  ]}
                >
                  <Select className="shadow-md w-75 h-10">
                    <Select.Option value="read"> Administrator</Select.Option>
                    <Select.Option value="write">Application</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col lg={8} xs={12}>
                <Form.Item
                  label="User Type"
                  name="userType"
                  rules={[{ required: true, message: "Select a User Type." }]}
                >
                  <Select className="shadow-md w-75 h-10">
                    <Select.Option value="Application">
                      {" "}
                      Application
                    </Select.Option>
                    <Select.Option value="Mobile"> Mobile</Select.Option>
                    <Select.Option value="Both"> Both</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col lg={8} xs={12}>
                <Form.Item label="Unlimited Expiry" name="unlimitedExpiry">
                <Checkbox.Group>
                 
                  <Checkbox  value="Yes" name="No">Yes</Checkbox>
                  </Checkbox.Group>
                </Form.Item>
              </Col>
            </Row>

            <hr />

            <h4>Address Details</h4>
            <Row gutter={16}>
              <Col lg={8} xs={12}>
                <Form.Item
                  label="Address1"
                  name="address1"
                  rules={[{ required: true, message: "Address1 is required." }]}
                >
                  <TextArea
                    className="rounded-3 shadow-md"
                    rows={5}
                    style={{ width: "100%", height: "100px" }}
                  />
                </Form.Item>
              </Col>
              <Col lg={8} xs={12}>
                <Form.Item label="Address2" name="address2">
                  <TextArea
                    className="rounded-3 shadow-md"
                    rows={5}
                    style={{ width: "100%", height: "100px" }}
                  />
                </Form.Item>
              </Col>
              <Col lg={8} xs={12}>
                <Form.Item label="Area" name="area">
                  <TextArea
                    className="rounded-3 shadow-md"
                    rows={5}
                    style={{ width: "100%", height: "100px" }}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col lg={8} xs={12}>
                <Form.Item
                  label="City"
                  name="City"
                  rules={[{ required: true, message: "Select a City." }]}
                >
                  <Input className={inputStyles} />
                </Form.Item>
              </Col>
              <Col lg={8} xs={12}>
                <Form.Item
                  label="State/Province"
                  name="State/Province"
                  rules={[
                    { required: true, message: "Select a State/Province." },
                  ]}
                >
                  <Input className={inputStyles} />
                </Form.Item>
              </Col>
              <Col lg={8} xs={12}>
                <Form.Item
                  label="Pin Code"
                  name="Pin Code"
                  rules={[
                    {
                      required: true,
                      min: 6,
                      pattern: /^\d{6}$/,
                      message: "Pin Code must be at least 6 characters.",
                    },
                  ]}
                >
                  <Input className={inputStyles} />
                </Form.Item>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col lg={6} xs={12}>
                <Button className={button} type="primary" htmlType="submit">
                  Save
                </Button>
              </Col>
              <Col lg={6} xs={12}>
                <Button className={button} type="primary">
                  Save & New
                </Button>
              </Col>

              <Col lg={6} xs={12}>
                <Button className={button} type="primary">
                  Save & Close
                </Button>
              </Col>
              <Col lg={6} xs={12}>
                <Button className={button} type="primary">
                  Close
                </Button>
              </Col>
            </Row>
          </Form>
        </Layout>
      ),
    },
    {
      label: "Activity History",
      key: "Activity History",
      children: (
        <Layout className="shadow-md rounded-bottom-4 p-4 mt-0 layout">
      <h4>Activity History</h4>
      <br />
      {activities.map((activity) => (
        <Row
          gutter={[16, 16]}
          className="mt-3"
          key={activity.id}
          style={{ borderBottom: "1px solid #e0e0e0", paddingBottom: "16px" }}
        >
          <Col xs={6} sm={4} lg={2}>
            <img
              src={activity.avatar}
              alt="Avatar"
              className="rounded-circle"
              width={70}
              height={70}
            />
          </Col>
          <Col xs={18} sm={20} lg={14}>
            <div>{activity.description}</div>
            <div className="opacity-50">{activity.time}</div>
          </Col>
        </Row>
      ))}
    </Layout>

      ),
    },
    {
      label: "Login History",
      key: "Login History",
      children: (
        <Layout className="shadow-md rounded-bottom-4 p-4 mt-0 layout">
        <h4>Login History</h4>
        <Row gutter={[16, 16]} className="mt-3 font-weight-bold">
          <Col xs={24} sm={24} md={6} lg={6}>USER'S NAME</Col>
          <Col xs={24} sm={24} md={6}lg={6}>EMAIL ID</Col>
          <Col xs={24} sm={24} md={6}lg={6}>LOGIN DATE / TIME</Col>
          <Col xs={24} sm={24} md={6}lg={6}>DURATION</Col>
        </Row>
     
        {loginData.map((item, index) => (
          <Row gutter={[16, 16]} className="mt-3" key={index}>
            <Col xs={24} sm={24} md={6}lg={6} className="mt-3">
              <div className="d-flex align-items-center">
                <img
                  src={item.avatar}
                  alt="Avatar"
                  className="rounded-circle"
                  width={40}
                  height={40}
                />
                <span className="ml-3">{item.name}</span>
              </div>
              
           
            </Col>
            <Col xs={24} sm={24} md={6}lg={6} className="mt-3">
              <div>{item.email}</div>
           
            </Col>
            <Col xs={24} sm={24} md={6}lg={6} className="mt-3">
              <div>{item.loginTime}</div>
            </Col>
            
            <Col xs={24} sm={24} md={6}lg={6} className="mt-3">
              <div>{item.duration}</div>
           
         
            </Col>
          </Row>
        ))}
      </Layout>
      ),
    },
    ,
    {
      label: "Working Details",
      key: "Working Details",

      children:(
     <Layout className="  shadow-md rounded-bottom-4 p-4 mt-0 layout container">
     <h4>Working Details</h4>

          <Row gutter={[16, 16]}>
        <Col lg={8} xs={24} sm={12}className="mt-3 ">
          <Card className="shadow-md rounded-4 p-3"
           
            title="Holidays"
            
        extra={<select className="shadow-sm rounded-2 p-">
          <option>2024</option>
          <option>2024</option>
          <option>2024</option>
          <option>2024</option>
        </select>}
          >
        
            <h2 className="d-inline">17</h2><span className="ml-2">Days</span>
            <p className="opacity-50 mt-3">April 5 Good Friday</p>
            <br/>
            
            <div className="text-end">view all</div>
          </Card>
        </Col>
        <Col lg={8} xs={24} sm={12} className="mt-3">
          <Card
            title="Leaves"
             className="shadow-md rounded-4 p-3"
             extra={<select className="shadow-sm rounded-2 p-">
              <option>2024</option>
              <option>2024</option>
              <option>2024</option>
              <option>2024</option>
            </select>}
          >
           <Flex>
            <Progress
      percent={60}
      showInfo={false}
      strokeColor={{
        from: "#DBF1FF", // Start of gradient
        to: "#1890FF",   // End of gradient
      }}
      status="active"
    />
</Flex> 

  <br/>
  <h2 className="d-inline">15</h2><span className="ml-2">Days </span>
  <p className="opacity-50 mt-3">7 Days Available</p>
          </Card>
        </Col>
        <Col lg={8} xs={24} sm={12}className=" mt-3">
          <Card
          className="shadow-md rounded-4 p-3"
            title="Permissions"
         
            extra={<select className="shadow-sm rounded-2 p-">
              <option>2024</option>
              <option>2024</option>
              <option>2024</option>
              <option>2024</option>
            </select>}
          >
           
  <Flex >
  <Progress percent={60} showInfo={false} status="active"
   strokeColor={{
    from: "#DBF1FF", // Start of gradient
    to: "#1890FF",   // End of gradient
  }}
  />
</Flex>
<br/>
<h2 className="d-inline ">23</h2><span className="ml-2">hrs </span>
<p className="opacity-50 mt-3">16 hrs  Available</p>
          </Card>
        </Col>
      </Row>

       
     </Layout>
      ),
    },
    {
      label: "Profile Details",
      key: "Profile Details",
      children: "Tab content for Profile Details",
    },
  ];

  return (
    <div>
        <Content className="container-fluid">
      <Layout className="mt-5 shadow-md border rounded-4 p-3 container ">
        <Row gutter={[16, 16]}>
          <Col xs={24} md={6} xl={3}>
            <img
              className="rounded-circle ml-5"
              src="eswar1.png"
              alt="Profile"
            />
          </Col>
          <Col xs={24} md={18} xl={21}>
            <h3 className="d-inline">Jimmy Rossuow</h3>
            <p className="d-inline ml-5">Marketing Analyst</p>
            <hr />
            <div className="d-md-flex d-sm-inline gap-5">
              <div>eswar@example.in</div>
              <div>7566828967</div>
              <div>California, America</div>
            </div>
          </Col>
        </Row>
        <Row></Row>
      </Layout>
      </Content>
      <Content className="container-fluid">
        <Tabs
          defaultActiveKey="General"
          className={container1}
          items={items}
          style={{ backgroundColor: "rgba(219, 241, 255, 1)" }}
        />
      </Content>
      <br></br>
    </div>
  );
}
