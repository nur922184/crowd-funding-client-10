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
import PrivatRoute from "../Providers/PrivatRoute";
import ErrorPage from "../Component/ErrorPage";

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
        element: <PrivatRoute><AddNewCampaign></AddNewCampaign></PrivatRoute>,
      },
      {
        path: "/campaigns",
        element: <AllCampaigns></AllCampaigns>,
      },
      {
        path: "/campaigns/:id",
        element: <PrivatRoute><CampaignDetalisCard></CampaignDetalisCard></PrivatRoute>, 
        loader: ({params}) => fetch(`http://localhost:5000/campaigns/${params.id}`)
      },
      {
        path: "/donations/:Id",
        element: <PrivatRoute><CampaingnUpdate></CampaingnUpdate></PrivatRoute>, 
        loader: ({params}) => fetch(`http://localhost:5000/campaigns/${params.Id}`)
      },
      {
        path: "/my-campaigns",
        element: <PrivatRoute><MyCampaigns></MyCampaigns></PrivatRoute>,
      },
      {
        path: "/myDonations",
        element:<PrivatRoute> <MyDonations></MyDonations></PrivatRoute>
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
  },
  {
    path:"*", 
    element:<ErrorPage></ErrorPage>
  }
]);

export default router