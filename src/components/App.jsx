import React from "react";
import Form from "./Form";
//import Input from "./Input";

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      <Form isRegistered={userIsRegistered} />
    </div>
  );
}

//My very long way of doing it
// var userIsRegistered = false;

// function App() {
//   return (
//     <div className="container">
//       {userIsRegistered ? (
//         <form className="form">
//           <Input type="text" placeholder="Username" />
//           <Input type="password" placeholder="Password" />
//           <button id="button" type="submit">
//             Login
//           </button>
//         </form>
//       ) : (
//         <Form />
//       )}
//     </div>
//   );
// }

export default App;
