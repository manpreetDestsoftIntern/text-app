import ReactDOM from "react-dom/client";
import './index.css'
import App from "./App";

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom';
// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<HomePage />} />
//           <Route path="sign-up" element={<SignUpPage />} />
//           {/* <Route path="login" element={<login />} /> */}
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);





