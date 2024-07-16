// import { Route, Routes, Link } from "react-router-dom"
// import CreatePage from "./pages/CreatePage"
// import HomePage from "./pages/HomePage"
// import TasksPage  from "./pages/TasksPage"
// // import './App.css'

// const app = () => {
//     return(
//         <div>
//             <nav className="bg-gray-800">
//                 <div className="container mx-auto p-5">
//                     <Link to="/"><h2 className="text-white text-5x1 font-bold">Exor Medical Systems</h2></Link>

//                 </div>
//             </nav>


//             <div className="container mx-auto p-2 h-full">
//             <Routes>
            
//                 <Route index element={<HomePage/>}></Route>
//                 <Route path="/create" element={<CreatePage/>}></Route>
//                 {/* <Route path="/tasks/" element={<TasksPage/>} ></Route> */}
                
//                 </Routes>
                
//             </div>

//         </div>
//     )
// }

// export default app;





// import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
// import CreatePage from "./pages/CreatePage";
// import HomePage from "./pages/HomePage";
// import TasksPage from "./pages/TasksPage";

// const App = () => {
//     return (
//         <BrowserRouter>
//             <div>
//                 <nav className="bg-gray-800">
//                     <div className="container mx-auto p-5">
//                         <Link to="/"><h2 className="text-white text-5x1 font-bold">Exor Medical Systems</h2></Link>
//                     </div>
//                 </nav>

//                 <div className="container mx-auto p-2 h-full">
//                     <Routes>
//                         <Route path="/" element={<HomePage />} />
//                         <Route path="/create" element={<CreatePage />} />
//                         {/* <Route path="/tasks" element={<TasksPage />} /> */}
//                     </Routes>
//                 </div>
//             </div>
//         </BrowserRouter>
//     );
// }

// export default App;



import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import TasksPage from "./pages/TasksPage";
import ProductsTable from "./pages/ProductsTable";
import './App.css';


const App = () => {
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="container mx-auto p-5">
          <Link to="/">
            <h2 className="text-white text-5x1 font-bold">Exor Medical Systems</h2>
            <Link to="/products" className="text-white ml-4">Products</Link>
          </Link>
        </div>
      </nav>

      <div className="container mx-auto p-2 h-full">
        <Routes>
          <Route path="/" element={<ProductsTable />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/tasks/:date" element={<TasksPage />} />
          <Route path="/products" element={<ProductsTable />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;



// import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
// import CreatePage from "./pages/CreatePage";
// import HomePage from "./pages/HomePage";
// import TasksPage from "./pages/TasksPage";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <div>
//         <nav className="bg-gray-800">
//           <div className="container mx-auto p-5">
//             <Link to="/">
//               <h2 className="text-white text-5x1 font-bold">Exor Medical Systems</h2>
//             </Link>
//           </div>
//         </nav>

//         <div className="container mx-auto p-2 h-full">
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/create" element={<CreatePage />} />
//             <Route path="/tasks/:date" element={<TasksPage />} />
//           </Routes>
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;


