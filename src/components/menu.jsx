import "../css/menu.scss";
import { Link } from "react-router-dom";
import Dropdown from "./subcomponents/dropdown";
const Menu = (props) => {
  const data=[
    {
        "id": 0,
        "name": "Trang chủ",
        "child": []
    },
    {
        "id": 1,
        "name": "Bảng tin cá nhân",
        "child": []
    },
    {
        "id": 2,
        "name": "Công việc đơn vị",
        "child": [
            {
                "url": "/",
                "name": "Danh sách công việc đơn vị"
            }
        ]
    },
    {
        "id": 3,
        "name": "Công việc cá nhân",
        "child": [
            {
                "url": "/",
                "name": " Dashboard công việc cá nhân"
            },
            {
                "url": "/",
                "name": "Danh sách công việc cá nhân"
            },
            {
                "url": "/",
                "name": " Mẫu Công Việc"
            },
            {
                "url": "/",
                "name": "Mẫu quy trình"
            }
        ]
    },
    {
        "id": 4,
        "name": "Danh sách quy trình",
        "child": []
    },
    {
        "id": 5,
        "name": "KPI đơn vị",
        "child": [
            {
                "url": "/",
                "name": " DashBoard KPI nhân viên"
            }
        ]
    },
    {
        "id": 6,
        "name": "KPI cá nhân",
        "child": [
            {
                "url": "/",
                "name": " Dashboard KPI cá nhân"
            },
            {
                "url": "/",
                "name": "Khởi tạo KPI cá nhân"
            },
            {
                "url": "/",
                "name": "Quản lí KPI cá nhân"
            }
        ]
    },
    {
        "id": 7,
        "name": "Nhân sự đơn vị",
        "child": [
            {
                "url": "/",
                "name": " Thông tin nhân viên"
            }
        ]
    },
    {
        "id": 8,
        "name": "Quản lý nhân sự",
        "child": [
            {
                "url": "/",
                "name": " Thống kê bấm giờ nhân sự"
            },
            {
                "url": "/",
                "name": " Quản lý kế hoạch làm việc"
            }
        ]
    },
    {
        "id": 9,
        "name": "Quản lý tài sản",
        "child": [
            {
                "url": "/",
                "name": " Tài sản sử dụng"
            },
            {
                "url": "/",
                "name": " Tài sản quản lý"
            },
            {
                "url": "/",
                "name": " Đăng ký sử dụng thiết bị"
            },
            {
                "url": "/",
                "name": " Đăng ký mua sắm thiết bị"
            }
        ]
    },
    {
        "id": 10,
        "name": "Tài liệu văn bản",
        "child": []
    },
    {
        "id": 11,
        "name": "Quản lý đơn hàng",
        "child": [
            {
                "url": "/",
                "name": "Thống kê bán hàng  Báo giá"
            },
            {
                "url": "/",
                "name": "Đơn bán hàng"
            },
            {
                "url": "/",
                "name": "Đơn mua nguyên vật liệu"
            },
            {
                "url": "/",
                "name": " Giảm giá"
            },
            {
                "url": "/",
                "name": " Thuế"
            },
            {
                "url": "/",
                "name": " Cam kết chất lượng"
            }
        ]
    },
    {
        "id": 12,
        "name": "Quản lý kho",
        "child": [
            {
                "url": "/",
                "name": " Bảng tin quản lý hàng tồn"
            },
            {
                "url": "/",
                "name": " Bảng tin quản lý các phiếu"
            },
            {
                "url": "/",
                "name": " Quản lý thông tin kho"
            },
            {
                "url": "/",
                "name": " Quản lý thông tin lưu kho"
            },
            {
                "url": "/",
                "name": " Quản lý danh mục hàng hóa"
            },
            {
                "url": "/",
                "name": "Quản lý hàng hóa"
            },
            {
                "url": "/",
                "name": "Quản lý thông tin phiếu"
            },
            {
                "url": "/",
                "name": " Quản lý lô hàng tồn kho"
            }
        ]
    },
    {
        "id": 13,
        "name": "Quản lý sản xuất",
        "child": [
            {
                "url": "/dashboard",
                "name": " Dashboard Quản lý sản xuất"
            },
            {
                "url": "/manage-manufacturing-plan",
                "name": " Quản lý kế hoạch sản xuất"
            },
            {
                "url": "/",
                "name": "Quản lý lệnh sản xuất"
            },
            {
                "url": "/manage-work-schedule",
                "name": "Quản lý lịch sản xuất"
            },
            {
                "url": "/",
                "name": "Quản lý lô sản xuất"
            },
            {
                "url": "/manage-purchasing-request",
                "name": " Quản lý phiếu đề nghị mua hàng"
            },
            {
                "url": "/",
                "name": "Quản lý nhà máy sản xuất"
            },
            {
                "url": "/",
                "name": "Quản lý xưởng sản xuất"
            }
        ]
    },
    {
        "id": 14,
        "name": "Hướng dẫn sử dụng",
        "child": []
    },
    {
        "id": 15,
        "name": "Tài khoản",
        "child": [
            {
                "url": "/",
                "name": "Thông tin cá nhân"
            },
            {
                "url": "/",
                "name": "Xin nghỉ phép"
            }
        ]
    }
];
  return (
    <div className="menu">
      <div className="app_name">DX workplace</div>
      <img src="http://localhost:3000/avt.png" alt="" srcset="" />
      {
            data.map((menu) => (
              <Dropdown menu={menu}></Dropdown>    
            ))
          }
    </div>
  );
};
export default Menu;
