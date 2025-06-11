import { Outlet } from 'react-router'


const MainLayout = () => {
  return (
    <div className="h-screen w-screen overflow-hidden bg-primary ">
      <Outlet />
     
    </div>
  )
}

export default MainLayout 