import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/appStore";
import TopRestaurant from "./components/TopRestaurant";
import RestaurantMenu from "./components/RestaurantMenu";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./components/Cart";
import Error from "./components/Error";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    errorElement: <Error />,
    children: [

      {
        path: "/",
        element: <TopRestaurant />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      },
      {
        path: "/cart",
        element: <Cart/>
      }

    ]
  },

])

function App() {
  return (
    <Provider store={appStore} className="bg-slate-100">
      <RouterProvider router={appRouter} />
      <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
        />
    </Provider>
  );
}

export default App;
