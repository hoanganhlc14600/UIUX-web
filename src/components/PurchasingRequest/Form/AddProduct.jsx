import React, { useState } from "react";
import "./AddProduct.css";

const AddProduct = ({
  mahang,
  setMahang,
  hang: tenhang,
  setHang: setTenhang,
  soluong,
  setSoluong,
  isValidSoluong,
  setIsValidSoluong,
  donvicungcap,
  setDonvicungcap,
  isValidDonvicungcap,
  setIsValidDonvicungcap,
  baogia,
  setBaogia,
  isValidBaogia,
  setIsValidBaogia,
  donvi,
  setDonvi,
}) => {
  const data = [
    {
      id: 0,
      mahang: "HH20211123.106408",
      tenhang: "Cao su",
      donvi: "Thùng",
    },
    { id: 1, mahang: "HH20211123.692089", tenhang: "Sắt", donvi: "Kilogam" },
    { id: 2, mahang: "HH20211112.106933", tenhang: "Cacbon", donvi: "Gam" },
  ];

  const [hang, setHang] = useState(0);

  return (
    <div className="addProduct">
      <div className="addProduct-title">Thông tin hàng</div>

      <label style={{ display: "block", marginBottom: "5px" }}>
        Mã mặt hàng<span style={{ color: "#f00" }}> *</span>
      </label>
      <select
        className="hienInput"
        style={{ backgroundColor: "#fff" }}
        value={hang}
        onChange={(e) => {
          setHang(e.target.value);
          setTenhang(data[e.target.value].tenhang);
          setMahang(data[e.target.value].mahang);
          setDonvi(data[e.target.value].donvi);
        }}
      >
        {data.map((v, i) => (
          <option value={v.id}>{v.mahang + " - " + v.tenhang}</option>
        ))}
      </select>

      <label
        style={{ display: "block", marginBottom: "5px", marginTop: "16px" }}
      >
        Đơn vị tính<span style={{ color: "#f00" }}> *</span>
      </label>
      <input className="hienInput" disabled value={data[hang].donvi} />

      <label
        style={{ display: "block", marginBottom: "5px", marginTop: "16px" }}
      >
        Số lượng<span style={{ color: "#f00" }}> *</span>
      </label>
      <input
        className="hienInput"
        type="number"
        value={soluong}
        placeholder="100"
        onChange={(e) => {
          setSoluong(e.target.value);
          setIsValidSoluong(true);
        }}
      />
      {!isValidSoluong && (
        <p style={{ color: "#f00", marginTop: "5px" }}>
          Số lượng phải là một số
        </p>
      )}

      <label
        style={{ display: "block", marginBottom: "5px", marginTop: "16px" }}
      >
        Đơn vị cung cấp<span style={{ color: "#f00" }}> *</span>
      </label>
      <input
        className="hienInput"
        value={donvicungcap}
        placeholder="Công ty X"
        onChange={(e) => {
          setDonvicungcap(e.target.value);
          setIsValidDonvicungcap(true);
        }}
      />
      {!isValidDonvicungcap && (
        <p style={{ color: "#f00", marginTop: "5px" }}>
          Đơn vị cung cấp không được để trống
        </p>
      )}

      <label
        style={{ display: "block", marginBottom: "5px", marginTop: "16px" }}
      >
        Báo giá (vnđ)<span style={{ color: "#f00" }}> *</span>
      </label>
      <input
        className="hienInput"
        type="number"
        value={baogia}
        placeholder="1500000"
        onChange={(e) => {
          setBaogia(e.target.value);
          setIsValidBaogia(true);
        }}
      />
      {!isValidBaogia && (
        <p style={{ color: "#f00", marginTop: "5px" }}>
          Báo giá phải là một số
        </p>
      )}
    </div>
  );
};

export default AddProduct;
