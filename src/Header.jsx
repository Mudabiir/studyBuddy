import { useAuth } from '@clerk/clerk-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { UserButton   } from '@clerk/clerk-react'

function Header() {
    
    const {userId}=useAuth();
    {console.log(userId)}
    if(!userId) return;
  return (
    // <>
    
    //  <Navbar pages={pages} />
    // <UserButton />
    // </>

    <header className="shadow sticky z-50 top-0">
    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/" className="flex items-center">
                <img
                    src='../../public/logo.png'
                    className="mr-3 h-12"
                    alt="Logo"
                />
                <div className='text-orange-500 '>StuddyBuddy</div>
            </Link>
            <div className="flex items-center lg:order-2">
            {/* <Link
                    to="/profile"
                    className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                >
                    Profile
                </Link> */}
                <Link
                    to="#"
                    className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-2 py-2 lg:py-2.5 mr-2 focus:outline-none"
                >
                     <UserButton />
                </Link>
                
            </div>
            <div
                className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                id="mobile-menu-2"
            >
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    
                    <li>
                        <NavLink
                             to="/home"
                            className={({isActive}) =>
                            // jabhi u write css classesin a callback function it is written like this:
                                `block py-2 pr-4 pl-3 duration-200 border-b ${isActive? "text-orange-500": "text-gray-500"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }
                        >
                            Home 
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/discussion"
                            className={({isActive}) =>
                            // jabhi u write css classesin a callback function it is written like this:
                                `block py-2 pr-4 pl-3 duration-200 border-b ${isActive? "text-orange-500": "text-gray-500"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }
                        >
                            Discussion
                        </NavLink>

                    </li>
                    <li>
                        <NavLink
                             to="/collab"
                            className={({isActive}) =>
                            // jabhi u write css classesin a callback function it is written like this:
                                `block py-2 pr-4 pl-3 duration-200 border-b ${isActive? "text-orange-500": "text-gray-500"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }
                        >
                            Collab
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                             to="/resources"
                            className={({isActive}) =>
                            // jabhi u write css classesin a callback function it is written like this:
                                `block py-2 pr-4 pl-3 duration-200 border-b ${isActive? "text-orange-500": "text-gray-500"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }
                        >
                            Resources 
                        </NavLink>
                    </li>

                   
                    
                    
                </ul>
            </div>
        </div>
    </nav>
</header>
  )
}

export default Header