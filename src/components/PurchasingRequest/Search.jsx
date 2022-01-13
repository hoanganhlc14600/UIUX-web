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
  const [ngaytao, setNgaytao] = React.useState(null);
  const [ngaynhan, setNgaynhan] = React.useState(null);

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

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
        id="maphieu"
        label="Mã phiếu đề  nghị"
        placeholder="PDN202013021223"
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
      <TextField
        id="makehoach"
        label="Mã kế hoạch"
        placeholder="KH2020120023333"
        variant="outlined"
      />
      <DatePicker
        id="ngaynhan"
        label="Ngày dự kiến nhận"
        value={ngaynhan}
        onChange={(newValue) => {
          setNgaynhan(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
      <Box sx={{ position: "relative" }}>
        <InputLabel id="demo-simple-select-label">Trạng thái</InputLabel>
        <Select
          sx={{ width: "100%" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Trạng thái"
          onChange={handleChange}
        >
          <MenuItem value={1}>Chưa xử lý</MenuItem>
          <MenuItem value={2}>Đã xử lý</MenuItem>
          <MenuItem value={3}>Đã hủy</MenuItem>
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
