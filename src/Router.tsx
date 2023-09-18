import BoardList from "routes/BoardList";
import { createBrowserRouter } from "react-router-dom";
import App from "App";
import ErrorComponent from "Components/error/ErrorComponent";
import Write from "routes/Write";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <BoardList />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "write",
        element: <Write />,
      },
    ],
  },
]);
export default router;
