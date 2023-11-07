import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

export const HomeScreen = ({ isAdmin }) => {
  return (
    <div className='bg-zinc-700'>
      {isAdmin ? (
        <div className='flex justify-center items-center h-[89.6vh] gap-7'>
          <Link to={'/userslist'}>
            <button className='bg-sky-500 text-white px-4 rounded-md py-1'>Users List</button>
          </Link>
          <button className='bg-gray-600 text-white px-4 rounded-md py-1'>Admin Profile</button>
        </div>
      ) : (
        <div className='flex justify-center items-center h-[89.6vh] gap-7'>
          <Link to={'/login'}>
            <button className='bg-sky-500 text-white px-4 rounded-md py-1'>SignIn</button>
          </Link>
          <Link to={'/register'}>
            <button className='bg-gray-600 text-white px-4 rounded-md py-1'>Signup</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
