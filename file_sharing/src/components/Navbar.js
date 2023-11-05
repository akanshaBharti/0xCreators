// import React from 'react';
// import Heading from './Heading'; // Import any other components or libraries you need


// function Navbar({ account }) {
//   return (
//     <div className="navbar flex flex-row items-center">
//       <div className="navbar-logo">
//         <Heading />
//       </div>
//       <div className="navbar-links">
//         <button className="button text-xs font-semibold text-white cursor-pointer">
//           💳{' '}
//           {account
//               ? account.slice(0, 4) + '...' + account.slice(account.length - 4, account.length)
//               : 'Address Not Found'}
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Navbar;
import React from 'react';
import Heading from './Heading';

function Navbar({ account }) {
  return (
    <div className="navbar flex flex-row items-center justify-between">
      <div className="navbar-logo">
        <Heading />
      </div>
      <div className="navbar-links">
        <button className="button text-xs font-semibold text-white cursor-pointer">
          💳{' '}
          {account
              ? account.slice(0, 4) + '...' + account.slice(account.length - 4, account.length)
              : 'Address Not Found'}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
