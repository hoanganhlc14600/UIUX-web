import React, { useState } from "react";
import Table from "./Table";
import { Box, Button, Modal, Typography } from "@mui/material";

import "./style/manageManufacturingPlan.css";
import Search from "./Search";

const dataa = {
  header: [
    "Mã kế hoạch",
    "Người tạo",
    "Người phê duyệt",
    "Người phụ trách nguyên vật liệu",
    "Ngày tạo",
    "Ngày bắt đầu",
    "Ngày dự kiến hoàn thành",
    "Trạng thái",
    "Hành động",
  ],
  row: [
    {
      makehoach: "KHSX20211116.475629",
      nguoitao: "Nguyễn Hoàng Anh",
      nguoipheduyet: "Nguyễn Hoàng Anh",
      nguoiphutrach: "Nguyễn Hoàng Anh",
      ngaytao: "16-11-2021",
      ngaybatdau: "16-11-2021",
      ngaynhan: "04-12-2021",
      trangthai: "Đã hoàn thành",
    },
    {
      makehoach: "KHSX20211116.475123",
      nguoitao: "Nguyễn Hoàng Anh",
      nguoipheduyet: "Nguyễn Hoàng Anh",
      nguoiphutrach: "Nguyễn Hoàng Anh",
      ngaytao: "17-11-2021",
      ngaybatdau: "17-11-2021",
      ngaynhan: "05-12-2021",
      trangthai: "Đang chờ duyệt",
    },
    {
      makehoach: "KHSX20211116.475456",
      nguoitao: "Nguyễn Hoàng Anh",
      nguoipheduyet: "Nguyễn Hoàng Anh",
      nguoiphutrach: "Nguyễn Hoàng Anh",
      ngaytao: "18-11-2021",
      ngaybatdau: "18-11-2021",
      ngaynhan: "06-12-2021",
      trangthai: "Đã phê duyệt",
    },
    {
      makehoach: "KHSX20211116.475567",
      nguoitao: "Nguyễn Hoàng Anh",
      nguoipheduyet: "Nguyễn Hoàng Anh",
      nguoiphutrach: "Nguyễn Hoàng Anh",
      ngaytao: "19-11-2021",
      ngaybatdau: "19-11-2021",
      ngaynhan: "07-12-2021",
      trangthai: "Đang thực hiện",
    },
    {
      makehoach: "KHSX20211116.475146",
      nguoitao: "Nguyễn Hoàng Anh",
      nguoipheduyet: "Nguyễn Hoàng Anh",
      nguoiphutrach: "Nguyễn Hoàng Anh",
      ngaytao: "20-11-2021",
      ngaybatdau: "20-11-2021",
      ngaynhan: "08-12-2021",
      trangthai: "Đã hủy",
    },
  ],
};

const ManageManufacturingPlan = () => {
  const [data, setData] = useState(dataa);

  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleAdd = (i) => setData({ ...data, row: [i, ...data.row] });

  return (
    <div className="purchase-content-wrapper">
      <section className="purchase-content-header">
        <h1>Quản lý kế hoạch sản xuất</h1>
        <ol className="breadcrumb">
          <li>
            <a href="/">
              <i className="fa fa-home"></i>Trang chủ
            </a>
          </li>
          <li>
            <a href="/manage-purchasing-request">
              <i className="fa fa-file"></i>Quản lý kế hoạch sản xuất
            </a>
          </li>
        </ol>
      </section>
      <section className="purchase-content">
        <Search />
        <Button
          variant="contained"
          color="success"
          className="btnAdd"
        >
          Tạo kế hoạch
        </Button>
        <Table data={data} />
      </section>
      <footer></footer>

    </div>
  );
};

export default ManageManufacturingPlan;
