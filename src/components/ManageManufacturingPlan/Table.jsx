import React from "react";
import ViewListIcon from "@mui/icons-material/ViewList";
import EditIcon from "@mui/icons-material/Edit";
import CancelIcon from "@mui/icons-material/Cancel";

import "./style/table.css";
import { Box, Modal, Pagination, Stack } from "@mui/material";
import DetailRequest from "../PurchasingRequest/DetailRequest/DetailRequest";

const Table = (props) => {
  const data = props.data;

  const [open, setOpen] = React.useState(false);
  const [detail, setDetail] = React.useState({});
  const handleOpen = (v) => {
    setDetail(v);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      <table className="purchase-table">
        <thead>
          <tr>
            <th>STT</th>
            {data.header.map((v, i) => (
              <th key={i}>{v}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.row
            .filter((v, i) => i >= 5 * (page - 1) && i < 5 * page)
            .map((v, i) => (
              <tr key={i}>
                <td>{i + 1 + (page - 1) * 5}</td>
                <td>{v.makehoach}</td>
                <td>{v.nguoitao}</td>
                <td>{v.nguoipheduyet}</td>
                <td>{v.nguoiphutrach}</td>
                <td>{v.ngaytao}</td>
                <td>{v.ngaybatdau}</td>
                <td>{v.ngaynhan}</td>
                <td
                  style={
                    v.trangthai === "Đã hoàn thành"
                      ? { color: "var(--color-green)" }
                      : v.trangthai === "Đang thực hiện" ? { color: "var(--color-pink)" }
                      : v.trangthai === "Đã hủy" ? { color: "var(--color-red)" }
                      : v.trangthai === "Đang chờ duyệt" ? { color: "var(--color-yellow)" }
                      : { color: "var(--color-blue)" }
                  }
                >
                  {v.trangthai}
                </td>
                <td style={{ textAlign: "center" }}>
                  <ViewListIcon
                    style={{
                      color: "#385898",
                      cursor: "pointer",
                      margin: "0 2px",
                    }}
                  />
                  <EditIcon
                    style={{
                      color: "#f39c10",
                      cursor: "pointer",
                      margin: "0 2px",
                    }}
                  />
                  <CancelIcon
                    style={{
                      color: "#dd4b39",
                      cursor: "pointer",
                      margin: "0 2px",
                    }}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <Box sx={{ display: "flex", justifyContent: "end", marginTop: "10px" }}>
        <Stack spacing={2}>
          <Pagination
            count={2}
            page={page}
            onChange={handleChange}
            showFirstButton
            showLastButton
          />
        </Stack>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <DetailRequest onClose={handleClose} open={open} data={detail} />
      </Modal>
    </>
  );
};

export default Table;
