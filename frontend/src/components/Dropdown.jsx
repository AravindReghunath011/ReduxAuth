import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {useSelector} from 'react-redux'
import { Link,useNavigate } from 'react-router-dom'
import { useLogoutMutation } from '../slices/usersApiSlice.js'
import {logout} from '../slices/authSlice'
import { useDispatch } from 'react-redux'
import { logout as logoutApiCall } from '../../../backend/api/api.js'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {userInfo} = useSelector((state)=>state.auth)
  const {adminInfo} = useSelector((state)=>state.auth)
  // const [logoutApiCall] = useLogoutMutation();
  
  
  const logoutHandler = async ()=>{
    try {
      await logoutApiCall()
      dispatch(logout())
      navigate('/')
    } catch (error) {
      console.log('error');
      console.log('err',err);
    }
  }
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Profile
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link 
                to={'/profile'}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  {userInfo ? userInfo.name : adminInfo.name  }
                  </Link>
              )}
            </Menu.Item>
           
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={logoutHandler}
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2 text-left text-sm'
                    )}
                  >
                    Logout
                  </button>
                )}
              </Menu.Item>
           
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}