// import { createContext, useEffect, useState } from "react";
// import axios from "axios";
// const URL = process.env.REACT_APP_URL;

// /* Creamos el context, se le puede pasar un valor inicial */
// const AuthContext = createContext();

// export const AuthProvider = async ({ children }) => {

//   /* Creamos un estado para el usuario */
//     const [currentUser, setCurrentUser] = useState("");
//     console.log("cu1", currentUser);

  
//     const user = JSON.parse(localStorage.getItem("currentUser"));
//     const currentUserId = user._id;
//     await axios.get(`${URL}/api/login/${currentUserId}`).then(({ data }) => {
//     const dataInfo = data.loggedUser.role;
//     console.log("cu2", dataInfo)
//     setCurrentUser(dataInfo);
//     console.log("cu3", currentUser);
//   });
  

  

//   console.log("cu4", currentUser);




//   return (
//     /* Envolvemos el children con el provider y le pasamos un objeto con las propiedades
//      que necesitamos por value */
//     <AuthContext.Provider value={{ currentUser}}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;
