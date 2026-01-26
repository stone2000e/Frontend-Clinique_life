import { Outlet } from "react-router-dom";

export default function StructureAdmin() {
  return (
    <div className="min-h-screen w-full bg-[#F3FAFF]">
      <Outlet />
    </div>
  );
}
