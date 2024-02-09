import NavbarSetting from "../components/NavbarSetting/NavbarSetting";

export default function AdminLayout({ children }) {
  return (
    <div className="d-flex flex-row dashboard text-white  container-fluid  p-0  ">
      <div
        style={{ minHeight: "100vh" }}
        className="col-lg-2 col-md-1 col-1  p-2 rounded   h-100 "
      >
        <NavbarSetting />
      </div>
      <div className="w-100    p-3 mt-1">{children}</div>
    </div>
  );
}
