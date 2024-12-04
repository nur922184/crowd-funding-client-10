import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Layout/Home";
import Login from "../Layout/Pages/Login";
import Register from "../Layout/Pages/Register";
import AddNewCampaign from "../Layout/AddNewCampaign";
import MyCampaigns from "../Layout/MyCampaigns";
import AllCampaigns from "../Layout/AllCampaigns";
import MyDonations from "../Layout/MyDonations";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/addnewcampaign",
        element: <AddNewCampaign></AddNewCampaign>,
      },
      {
        path: "/campaigns",
        element: <AllCampaigns></AllCampaigns>, 
        loader: () => fetch('http://localhost:5000/campaigns')
      },
      {
        path: "/my-campaigns",
        element: <MyCampaigns></MyCampaigns>,
      },
      {
        path: "//myDonations",
        element: <MyDonations></MyDonations>
      },
    ], 
  },
  {
    path:"/login", 
    element:<Login></Login>
  },
  {
    path:"/register", 
    element:<Register></Register>
  }
]);

export default router