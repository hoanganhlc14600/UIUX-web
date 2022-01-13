import { Box, IconButton, Typography } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import React from "react";
import "./DetailRequest.css";
import "../Form/AddProduct.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1200,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
  padding: "15px 20px",
};

const DetailRequest = ({ onClose, data }) => {
  return (
    <Box sx={style}>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderBottom: "1px solid #eee",
          padding: "5px",
          marginBottom: "20px",
        }}
      >
        <Typography sx={{ fontSize: "24px", fontWeight: 500 }}>
          Chi tiết phiếu đề nghị
        </Typography>
        <IconButton
          aria-label="cancel"
          sx={{ position: "absolute", top: 5, right: 0 }}
          onClick={onClose}
        >
          <CancelIcon />
        </IconButton>
      </Box>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "24px",
        }}
      >
        <div>
          <span style={{ fontWeight: 700 }}>Mã phiếu đề nghị:</span>{" "}
          {data.maphieu}
        </div>
        <div>
          <span style={{ fontWeight: 700 }}>Ngày dự kiến nhận:</span>{" "}
          {data.ngaynhan}
        </div>
        <div>
          <span style={{ fontWeight: 700 }}>Mã lệnh sản xuất:</span>{" "}
          {data.malenh}
        </div>
        <div>
          <span style={{ fontWeight: 700 }}>Mô tả:</span> {data.mota}
        </div>
        <div>
          <span style={{ fontWeight: 700 }}>Người tạo:</span> {data.nguoitao}
        </div>
        <div>
          <span style={{ fontWeight: 700 }}>Trạng thái:</span> {data.trangthai}
        </div>
        <div>
          <span style={{ fontWeight: 700 }}>Ngày tạo:</span> {data.ngaytao}
        </div>
      </div>

      <div className="addProduct">
        <div className="addProduct-title">Chi tiết mặt hàng</div>
        <table className="purchase-table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Mã mặt hàng</th>
              <th>Tên mặt hàng</th>
              <th>Đơn vị cung cấp</th>
              <th>Báo giá</th>
              <th>Số lượng</th>
              <th>Đơn vị tính</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>{data.mahang}</td>
              <td>{data.hang}</td>
              <td>{data.donvicungcap}</td>
              <td>{data.baogia}</td>
              <td>{data.soluong}</td>
              <td>{data.donvi}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Box>
  );
};

export default DetailRequest;
