import { Outlet } from "react-router-dom";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import { useEffect, useReducer } from "react";
import { initialState, reducer } from "../store/workoutsReducer";

const STORAGE_KEY = "workouts-state";

const AppLayout = () => {
  const [workouts, dispatch] = useReducer(reducer, initialState, (initial) => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : initial;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(workouts));
  }, [workouts]);

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
