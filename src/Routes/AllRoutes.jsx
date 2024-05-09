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
                path: "/recommendationsForMe",
                element: <RecommendationsForMePage />,
            },
            {
                path: "/myQueries",
                element: <MyQueriesPage />,
            },
            {
                path: "/myRecommendations",
                element: <MyRecommendationsPage />,
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