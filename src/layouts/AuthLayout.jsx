import React from 'react';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
       <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <div className='flex-1'>
        <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      className="max-w-sm rounded-lg shadow-2xl"
    />
    </div>
    <div className='flex-1'>
     <Outlet></Outlet>
     {/* // New auth layout */}
    </div>
  </div>
</div>
    );
};

export default AuthLayout;