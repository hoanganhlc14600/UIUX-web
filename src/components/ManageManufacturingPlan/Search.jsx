import React from "react";

import {
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Box,
  InputLabel,
} from "@mui/material";
import DatePicker from "@mui/lab/DatePicker";

import "./style/search.css";

const Search = () => {
  const [ngaybatdau, setNgaybatdau] = React.useState(null);
  const [ngaytao, setNgaytao] = React.useState(null);
  const [ngaynhan, setNgaynhan] = React.useState(null);

  const [facturing, setFacturing] = React.useState("");

  const handleChange = (event) => {
    setFacturing(event.target.value);
  };

  const [status, setStatus] = React.useState("");

  const handleChangeStatus = (event) => {
      setStatus(event.target.value);
  }

  const [plan, setPlan] = React.useState("");

  const handleChangePlan = (event) => {
      setPlan(event.target.value);
  }

  return (
    <FormControl
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        maxWidth: "600px",
        gap: "15px 20px",
        marginBottom: "20px",
      }}
    >
      <TextField
        id="makehoach"
        label="Mã kế hoạch"
        placeholder="KH202012212"
        variant="outlined"
      />
      <DatePicker
        id="ngaybatdau"
        label="Ngày bắt đầu"
        value={ngaybatdau}
        onChange={(newValue) => {
          setNgaybatdau(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
      <TextField
        id="madonkinhdoanh"
        label="Mã đơn kinh doanh"
        placeholder="DKD202012223"
        variant="outlined"
      />
      <DatePicker
        id="ngaynhan"
        label="Ngày dự kiến hoàn thành"
        value={ngaynhan}
        onChange={(newValue) => {
          setNgaynhan(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />

      <TextField
        id="malenh"
        label="Mã lệnh"
        placeholder="LSX202012224"
        variant="outlined"
      />

      <DatePicker
        id="ngaytao"
        label="Ngày tạo"
        value={ngaytao}
        onChange={(newValue) => {
          setNgaytao(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />

      <Box sx={{ position: "relative" }}>
        <InputLabel id="demo-simple-select-label">Nhà máy</InputLabel>
        <Select
          sx={{ width: "100%" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={facturing}
          label="Nhà máy"
          onChange={handleChange}
        >
          <MenuItem value={1}>Nhà máy 1</MenuItem>
          <MenuItem value={2}>Nhà máy 2</MenuItem>
          <MenuItem value={3}>Nhà máy 3</MenuItem>
        </Select>
      </Box>

      <Box sx={{ position: "relative" }}>
        <InputLabel id="demo-simple-select-label">Trạng thái</InputLabel>
        <Select
          sx={{ width: "100%" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={status}
          label="Trạng thái"
          onChange={handleChangeStatus}
        >
          <MenuItem value={1}>Đang chờ duyệt</MenuItem>
          <MenuItem value={2}>Đã phê duyệt</MenuItem>
          <MenuItem value={3}>Đang thực hiện</MenuItem>
          <MenuItem value={4}>Đã hoàn thành</MenuItem>
          <MenuItem value={5}>Đã hủy</MenuItem>
        </Select>
      </Box>

      <Box sx={{ position: "relative" }}>
        <InputLabel id="demo-simple-select-label">Tiến độ</InputLabel>
        <Select
          sx={{ width: "100%" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={plan}
          label="Chọn tiến độ"
          onChange={handleChangePlan}
        >
          <MenuItem value={1}>Đúng tiến độ</MenuItem>
          <MenuItem value={2}>Chậm tiến độ</MenuItem>
          <MenuItem value={3}>Quá hạn</MenuItem>
        </Select>
      </Box>

      <Box style={{ textAlign: "left", display: "flex", alignItems: "center" }}>
        <Button variant="contained" color="success">
          Tìm kiếm
        </Button>
      </Box>
    </FormControl>
  );
};

export default Search;
