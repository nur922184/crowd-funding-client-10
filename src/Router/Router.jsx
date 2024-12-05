import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Layout/Home";
import Login from "../Layout/Pages/Login";
import Register from "../Layout/Pages/Register";
import AddNewCampaign from "../Layout/AddNewCampaign";
import MyCampaigns from "../Layout/MyCampaigns";
import AllCampaigns from "../Layout/AllCampaigns";
import MyDonations from "../Layout/MyDonations";
import CampaignDetalisCard from "../Component/CampaignDetalisCard";
import CampaingnUpdate from "../Layout/CampaingnUpdate";

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
        path: "/campaigns/:id",
        element: <CampaignDetalisCard></CampaignDetalisCard>, 
        loader: ({params}) => fetch(`http://localhost:5000/campaigns/${params.id}`)
      },
      {
        path: "/campaigns/:Id",
        element: <CampaingnUpdate></CampaingnUpdate>, 
        loader: ({params}) => fetch(`http://localhost:5000/campaigns/${params.Id}`)
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