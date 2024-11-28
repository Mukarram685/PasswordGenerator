import React,{useState} from 'react'

export default function Navbar() {

    const [show, setshow] = useState(false)
    // const [ham,setham] = useState(false)
 
    const handle = () => {
        setshow(!show)
        // setham(!ham)
        
    }
    return (
        <div>
            <div className='flex bg-blue-500 p-4 justify-between sm:gap-5 '>
                <div>hlasjf</div>
                <div className='end-0 pr-14 sm:pr-8 sm:pl-4'>
                    <ul className='flex gap-4 h-7 cursor-pointer lg:gap-10'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact us</li>
                        <form action="text">
                            {show?
                              <input  className=  "rounded" type="text" placeholder='Search' />:
                              <img className='w-5 h-5 cursor-pointer sm:w-8 sm:h-8 ' onClick={handle} src="https://cdn-icons-png.flaticon.com/512/149/149852.png" alt=""/>
                              
                            }
                        </ form>
                    </ul>
                </div>
            </div>
        </div>
    )
}






// import React, { useState } from 'react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-gray-800 p-4">
//       <div className="flex justify-between items-center">
//         <div className="text-white text-lg">Logo</div>
//         <div className="block sm:hidden">
//           <button onClick={toggleMenu} className="text-white focus:outline-none">
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//             </svg>
//           </button>
//         </div>
//         <ul className={`flex-col sm:flex-row sm:flex sm:space-x-4 ${isOpen ? 'flex' : 'hidden'} sm:block`}>
//           <li className="text-white py-2 sm:py-0">
//             Home
//           </li>
//           <li className="text-white py-2 sm:py-0">
//             About
//           </li>
//           <li className="text-white py-2 sm:py-0">
//             Contact us
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
