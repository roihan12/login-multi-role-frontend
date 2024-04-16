import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { user } = useSelector((state) => state.auth);

  // show unauthorized screen if no user is found in redux store
  if (user === null) {
    return (
      <section className="hero is-danger has-text-centered">
        <div className="hero-body">
          <p className="title">Unauthorized :(</p>
          <p className="subtitle">
            <NavLink to="/" className=" button is-text">
              Login
            </NavLink>{" "}
            to gain access
          </p>
        </div>
      </section>
    );
  }

  return <Outlet />;
};

export default ProtectedRoute;
