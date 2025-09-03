import {createBrowserRouter} from "react-router";
import Layout from "../components/layout/Layout";
import HomePage from "../pages/HomePage";
import PostDetailPage from "../pages/PostDetailPage";
import SearchResultsPage from "../pages/SearchResultsPage";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "posts/:slug",
                element: <PostDetailPage />
            },
            {
                path: "search",
                element: <SearchResultsPage />
            },

        ]
    }
])