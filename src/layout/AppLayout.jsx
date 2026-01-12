import { Outlet } from "react-router-dom";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import { useReducer } from "react";
import { initialState, reducer } from "../store/workoutsReducer";

const AppLayout = () => {
  const [workouts, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <Header />
      <div className="container">
        <Outlet context={{ workouts, dispatch }} />
      </div>
      <Footer />
    </>
  );
};

export default AppLayout;
