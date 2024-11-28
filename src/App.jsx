import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar';


function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const generatePassword = () => {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let number = "0123456789!@#$%^&*()";
    str += number;
    let generatedPassword = "";
    for (let index = 0; index < length; index++) {
      const random = Math.floor(Math.random() * str.length);
      generatedPassword += str.charAt(random);
    }
    console.log(generatedPassword);
    setPassword(generatedPassword);
  };

  useEffect(() => {
    generatePassword();
  }, [length]);

  const fetchSuggestions = async (query) => {
    setLoading(true);
    try {
      const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=485292c9caac42a6926e7b40a82ac1ed`);
      const data = await response.json();
      setSuggestions(data.articles.map(article => article.title)); // Assuming API returns articles with titles
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
    setLoading(false);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value.length > 0) {
      fetchSuggestions(value);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setSuggestions([]);
  };

  return (
    <>
     <Navbar></Navbar>
      <div className='flex text-4xl text-blue-700 justify-center'>
        <div>Hy, what's up?</div>
        <div>Nothing special...</div>
      </div>

      <div>
        <div className='flex shadow'>
          <input
            type="text"
            value={password}
            className='w-full py-5 px-3'
            placeholder='Your Secure Password'
            readOnly
          />
        </div>
        <div>
          <input
            type="range"
            min={8}
            max={50}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}
          />
          Length: {length}
        </div>
      </div>

      <div className="relative w-1/2 mx-auto mt-10">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Search..."
        />
        {loading && <div className="absolute top-12 w-full bg-white border border-gray-300 rounded p-2">Loading...</div>}
        {suggestions.length > 0 && (
          <ul className="absolute w-full bg-white border border-gray-300 rounded mt-1 max-h-40 overflow-y-auto z-10">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="p-2 cursor-pointer hover:bg-gray-200"
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default App;





// import { useEffect, useState } from 'react'

// import './App.css'

// function App() {
//   const [length, setlength] = useState(8)
//   const [password, setpassword] = useState("")
 

//   const SearchWithSuggestions = () => {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [suggestions, setSuggestions] = useState([]);
//     const [loading, setLoading] = useState(false);

//     const fetchSuggestions = async (query) => {
//       setLoading(true);
//       try {
//         const response = await fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=485292c9caac42a6926e7b40a82ac1ed/suggestions?query=${query}`);
//         const data = await response.json();
//         setSuggestions(data);
//       } catch (error) {
//         console.error('Error fetching suggestions:', error);
//       }
//       setLoading(false);
//     };

//     const handleChange = (e) => {
//       const value = e.target.value;
//       setSearchTerm(value);
//       if (value.length > 0) {
//         fetchSuggestions(value);
//       } else {
//         setSuggestions([]);
//       }
//     };

//     const handleSuggestionClick = (suggestion) => {
//       setSearchTerm(suggestion);
//       setSuggestions([]);
//     };


//   };





//   const generatePassword = () => {
//     let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     let number = "0123456789!@#$%^&*()"
//     str += number;
//     let generatedpassword = " ";
//     for (let index = 0; index < length; index++) {
//       const random = Math.floor(Math.random() * str.length + 1)
//       generatedpassword += str.charAt(random)

//     }
//     setpassword(generatedpassword)
//   }

//   // console.log(generatedpassword())


//   useEffect(() => {
//     generatePassword()
//   }, [length])

//   return (
//     <>
//       <div className='flex text-4xl text-blue-700 justify-center'>
//         <div>Hy, what's up?</div>
//         <div>Nothing special...</div>
//       </div>

//       <div>
//         <div className='flex shadow'>
//           <input
//             type="text"
//             value={password}
//             className='width-full py-5 px-3'
//             placeholder='Your Secure Password' // Improved placeholder text
//             readOnly
//           />
//         </div>
//         <div>
//           <input type="range"
//             min={8}
//             max={50}
//             value={length}
//             className='cursor-pointer'
//             onChange={(e) => setlength(e.target.value)} />
//           length = {length}
//         </div>
//       </div>

//       <div className="relative w-1/2 mx-auto mt-10">
//         <input
//           type="text"
//           value={searchTerm}
//           onChange={handleChange}
//           className="w-full p-2 border border-gray-300 rounded"
//           placeholder="Search..."
//         />
//         {loading && <div className="absolute top-12 w-full bg-white border border-gray-300 rounded p-2">Loading...</div>}
//         {suggestions.length > 0 && (
//           <ul className="absolute w-full bg-white border border-gray-300 rounded mt-1 max-h-40 overflow-y-auto z-10">
//             {suggestions.map((suggestion, index) => (
//               <li
//                 key={index}
//                 onClick={() => handleSuggestionClick(suggestion)}
//                 className="p-2 cursor-pointer hover:bg-gray-200"
//               >
//                 {suggestion}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </>
//   )
// }

// export default App







// // import { useEffect, useState } from 'react';
// // import './App.css';

// // function App() {
// //   const [passwordLength, setPasswordLength] = useState(8); // Use descriptive variable names
// //   const [generatedPassword, setGeneratedPassword] = useState('');

// //   const generatePassword = () => {
// //     const characterSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()'; // Combine all character sets
// //     let password = '';

// //     for (let i = 0; i < passwordLength; i++) {
// //       const randomIndex = Math.floor(Math.random() * characterSet.length);
// //       password += characterSet.charAt(randomIndex);
// //     }

// //     setGeneratedPassword(password);
// //   };

// //   useEffect(() => {
// //     generatePassword();
// //   }, [passwordLength]); // Update password only when length changes

// //   return (
// //     <>
// //       <div className='flex text-4xl text-blue-700 justify-center'>
// //         <div>Hey, what's up?</div>  {/* Use "Hey" for better greeting */}
// //         <div>Nothing much...</div>
// //       </div>

// //       <div>
// //         <div className='flex shadow'>
// //           <input
// //             type="text"
// //             value={generatedPassword}
// //             className='width-full py-5 px-3'
// //             placeholder='Your Secure Password' // Improved placeholder text
// //             readOnly
// //           />
// //         </div>
// //         <div>
// //           <label htmlFor="passwordLength">Password Length:</label>  {/* Add label for accessibility */}
// //           <input
// //             type="range"
// //             min={8}
// //             max={50}
// //             value={passwordLength}
// //             className='cursor-pointer'
// //             id="passwordLength" // Match label ID
// //             onChange={(e) => setPasswordLength(e.target.value)}
// //           />
// //           <span>Length: {passwordLength}</span>  {/* Display current length */}
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// // export default App;
