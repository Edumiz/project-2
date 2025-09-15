import { PATH } from '@/constants/path';
import Dashboard from '@/pages/Dashboard';
import ViewUser from '@/pages/ViewUser';
import EditUser from '@/pages/EditUser';
import AddUser from '@/pages/AddUser';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

interface IRouter {
  path: string;
  element: React.ReactNode;
}

const router: Array<IRouter> = [
  {
    path: PATH.DEFAULT.pathname,
    element: <Dashboard />,
  },
  {
    path: "/view/:userId",
    element: <ViewUser />,
  },
  {
    path: "/edit/:userId",
    element: <EditUser />,
  },
  {
    path: "/add",
    element: <AddUser />,
  },
];
function RenderRouter() {
  return (
    <Routes>
      {router.map((item: IRouter) => (
        <Route key={item.path} path={item.path} element={item.element} />
      ))}
      <Route path="*" element={<Navigate to={PATH.DEFAULT} replace />} />
    </Routes>
  );
}
export default RenderRouter;
