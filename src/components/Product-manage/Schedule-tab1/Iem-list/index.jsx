import React, { useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { Tabs, Popover, Button, Input, Form, Row, Col } from "antd";

const ItemList = ({ data }) => {
  const number = [];
  for (let index = 1; index < 32; index++) {
    number.push(index);
  }
  return (
    <div>
      <Row>
        <Col span={2}>{data.code}</Col>
        <Col span={2}>{data.name}</Col>
        <Col span={2}>{data.start_time}</Col>
        <Col span={2}>{data.end_time}</Col>
        <Col span={16}>
          <div className="flex">
            {number.map((item) => (
              <RowItem num={item} />
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default ItemList;

const RowItem = ({ num }) => {
  const [color, setColor] = useState("white");
  const content = (
    <div className="listCL d-flex">
      <p onClick={() => setColor("white")} style={{ background: "white" }}></p>
      <p
        onClick={() => setColor("#5FF2DA")}
        style={{ background: "#5FF2DA" }}
      ></p>
      <p
        onClick={() => setColor("#F7BF03")}
        style={{ background: "#F7BF03" }}
      ></p>
      <p
        onClick={() => setColor("#4EBFFF")}
        style={{ background: "#4EBFFF" }}
      ></p>
      <p
        onClick={() => setColor("#F012C0")}
        style={{ background: "#F012C0" }}
      ></p>
      <p
        onClick={() => setColor("#2C8000")}
        style={{ background: "#2C8000" }}
      ></p>
      <p onClick={() => setColor("red")} style={{ background: "red" }}></p>
    </div>
  );
  return (
    < div>
      <Popover content={content}>
        <div className="list-item" style={{ background: color }}> <div style={{opacity:'0'}}>1</div> </div>
      </Popover>
    </div>
  );
};
