import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../features/home/homePage";
import Catalog from "../../catalog/Catalog";
import ProductDetails from "../../catalog/productDetails";
import AboutPage from "../../features/about/aboutPage";
import { ContactPage } from "@mui/icons-material";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<App />,
        children :[
            {path : '' , element: <HomePage />},
            {path : 'catalog', element : <Catalog/>},
            {path : 'catalog/:id', element : <ProductDetails/>},
            {path : 'about', element : <AboutPage/>},
            {path : 'contact', element : <ContactPage/>},
        ]
    }
])