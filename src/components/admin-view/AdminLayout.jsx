import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";


function AdminLayout() {

  return (
    <div className="flex min-h-screen w-full">
                    {/* admin sidebar */}
        <AdminHeader />
      <div className="flex flex-1 flex-col">
                    {/* admin header */}
        <AdminSidebar />
        <main className="flex-1 flex-col flex bg-muted/40 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;