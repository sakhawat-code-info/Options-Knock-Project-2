import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage";
import App from "../App";
import QueriesPage from "../Pages/QueriesPage";
import RecommendationsForMePage from "../Pages/RecommendationsForMePage";
import MyQueriesPage from "../Pages/MyQueriesPage";
import MyRecommendationsPage from "../Pages/MyRecommendationsPage";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import PrivateRoute from "./PrivateRoute";
import AddQueriesPage from "../Pages/AddQueriesPage";
import QueryDetailsPage from "../Pages/QueryDetailsPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <App />,
            },
            {
                path: "/queries",
                element: <QueriesPage />,
            },
            {
                path: "/queryDetails",
                element: <PrivateRoute><QueryDetailsPage /></PrivateRoute>,
            },
            {
                path: "/recommendationsForMe",
                element: <RecommendationsForMePage />,
            },
            {
                path: "/myQueries",
                element: <PrivateRoute><MyQueriesPage /></PrivateRoute>,
            },
            {
                path: "/addQueries",
                element: <PrivateRoute><AddQueriesPage /></PrivateRoute>,
            },
            {
                path: "/myRecommendations",
                element: <PrivateRoute><MyRecommendationsPage /></PrivateRoute>,
            },
            {
                path: "/login",
                element: <LoginPage />,
            },
            {
                path: "/register",
                element: <RegisterPage />,
            },
        ],
    },
]);