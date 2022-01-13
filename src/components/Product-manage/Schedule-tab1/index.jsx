import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HomeOutlined, ScheduleOutlined } from "@ant-design/icons";
import { Modal, Button, Input, Form, Row, Col, Select, Radio } from "antd";
import ItemList from "./Iem-list";
import "./style.scss";
const { Option } = Select;
const Schedule = () => {
  const [list, setList] = useState([
    {
      code: "MX001",
      name: "UIUX06",
      start_time: "1 giờ",
      end_time: "1 giờ",
    },
  ]);
  const [timeHT, setTimeHT] = useState({
    start: "6h",
    end: "6h",
  });
  const number = [];
  for (let index = 1; index < 32; index++) {
    number.push(index);
  }
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    if (value === 1) {
      setIsModalVisible(false);
      setList([
        ...list,
        {
          code: "MX001",
          name: "UIUX06",
          start_time: timeHT.start,
          end_time: timeHT.end,
        },
      ]);
    }
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const time = [];
  for (let index = 1; index < 25; index++) {
    time.push(index + " giờ");
  }
  function handleChange(value) {
    setTimeHT({
      start: value,
      end: timeHT.end,
    });
  }
  function handleChange1(value) {
    setTimeHT({
      start: timeHT.start,
      end: value,
    });
  }
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="schedule">
      <div className=" d-flex justify-content-between align-items-center">
        <div style={{ alignItems: "flex-end" }} className="d-flex">
          <Form>
            <Form.Item label="Mã xưởng">
              <Input width="260px" size="large" placeholder="KH 243249990000" />
            </Form.Item>
            <Form.Item label="Thời gian">
              <Input width="260px" size="large" placeholder="01-2022" />
            </Form.Item>
          </Form>
          <Button
            style={{ marginLeft: "10px", float: "right", marginBottom: "19px" }}
            size="large"
            type="primary"
          >
            Tìm kiếm
          </Button>
        </div>
        <div>
          <Button onClick={showModal} size="large" type="primary">
            Tạo lịch
          </Button>
          <Modal
            style={{ width: "1000px", height: "700px" }}
            centered
            header={null}
            footer={null}
            title="Tạo lịch làm việc cho xưởng sản xuất"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>Xưởng sản xuất</p>
            <Input value="UIUX06" size="large" />
            <p>Tháng</p>
            <Input value="12/2022" size="large" />
            <Radio.Group
              style={{ marginTop: "20px" }}
              onChange={onChange}
              value={value}
            >
              <Radio value={1}>Chọn giờ</Radio>
              <Radio value={2}>Chọn ca</Radio>
            </Radio.Group>
            <div className="flex items-center">
              <Select
                size="large"
                defaultValue={time[0]}
                style={{ width: "100%" }}
                onChange={handleChange}
              >
                {time.map((item) => (
                  <Option value={item}>{item}</Option>
                ))}
              </Select>
              <Select
                size="large"
                defaultValue={time[0]}
                style={{ width: "100%" }}
                onChange={handleChange1}
                className="m-1"
              >
                {time.map((item) => (
                  <Option value={item}>{item}</Option>
                ))}
              </Select>
            </div>

           
            <div className="flex m-1">
              ca <br />
              làm
              <br /> việc
              {number.map((item) => (
                <div className="itemss">
                  <div> {item}</div>
                </div>
              ))}
            </div>
            <div className="flex m-1">
              ca 1
              {number.map((item) => (
                <div className="itemss">
                  <div style={{ opacity: "0" }}> {item}</div>
                </div>
              ))}
            </div>
            <div className="flex m-1">
              ca 2
              {number.map((item) => (
                <div className="itemss">
                  <div style={{ opacity: "0" }}> {item}</div>
                </div>
              ))}
            </div>
            <div className="flex m-1">
              ca 3
              {number.map((item) => (
                <div className="itemss">
                  <div style={{ opacity: "0" }}> {item}</div>
                </div>
              ))}
            </div>
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
              className="button"
            >
              <Button type="primary" size="large" onClick={handleCancel}>
                Thoát
              </Button>
              <Button
                style={{ margin: "0 10px" }}
                size="large"
                onClick={handleOk}
                type="primary"
              >
                OK
              </Button>
            </div>
          </Modal>
        </div>
      </div>
      <div
        className="d-flex justify-content-between align-items-center"
        style={{ width: "60%", margin: "50px 0" }}
      >
        <div className="items-color d-flex align-items-center">
          <div style={{ background: "white" }} className="color "></div>
          <div className="text">Chưa có lệnh</div>
        </div>
        <div className="items-color d-flex align-items-center">
          <div style={{ background: "#5FF2DA" }} className="color "></div>
          <div className="text">Mới tạo</div>
        </div>
        <div className="items-color d-flex align-items-center">
          <div style={{ background: "#F7BF03" }} className="color "></div>
          <div className="text">Đang chờ duyệt</div>
        </div>
        <div className="items-color d-flex align-items-center">
          <div style={{ background: "#4EBFFF" }} className="color "></div>
          <div className="text">Đã phê duyệt</div>
        </div>
        <div className="items-color d-flex align-items-center">
          <div style={{ background: "#F012C0" }} className="color "></div>
          <div className="text">Đang thực hiện</div>
        </div>
        <div className="items-color d-flex align-items-center">
          <div style={{ background: "#2C8000" }} className="color "></div>
          <div className="text">Đã hoàn thành</div>
        </div>
        <div className="items-color d-flex align-items-center">
          <div style={{ background: "red" }} className="color "></div>
          <div className="text">Hết hạn</div>
        </div>
      </div>
      <div>
        <Row>
          <Col span={2}>Mã xưởng</Col>
          <Col span={2}>Tên xưởng</Col>
          <Col span={2}>giờ bắt đầu</Col>
          <Col span={2}>giờ kết thúc</Col>
          <Col span={16}>
            <div className="flex">
              {number.map((item) => (
                <div className="list-item">
                  <div> {item}</div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
        <div className="">
          {list.map((item) => (
            <ItemList data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Schedule;
