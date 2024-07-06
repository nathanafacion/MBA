import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
