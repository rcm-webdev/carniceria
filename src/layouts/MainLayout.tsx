import { Outlet } from 'react-router'


const MainLayout = () => {
  return (
    <div className=" w-screen bg-primary ">
      <Outlet />
     
    </div>
  )
}

export default MainLayout 