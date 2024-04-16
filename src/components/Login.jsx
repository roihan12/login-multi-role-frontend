import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../features/authSlice";
import { useForm } from "react-hook-form";

const Login = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );


  useEffect(() => {
    if (user || isSuccess) {
      navigate("/dashboard");
    }

    // dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const submitForm = (user) => {
    dispatch(LoginUser(user));
  };

  return (
    <section className="hero has-background-has-text-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4">
              <form onSubmit={handleSubmit(submitForm)} className="box">
                {isError && <p className="has-text-centered"> {message}</p>}
                <h1 className="title is-2">Sign In</h1>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input
                      type="text"
                      className="input"
                      placeholder="Email"
                      {...register("email")}
                      required
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input
                      type="password"
                      className="input"
                      placeholder="******"
                      {...register("password")}
                      required
                    />
                  </div>
                </div>

                <div className="field mt-5">
                  <button
                    type="submit"
                    className="button is-success is-fullwidth"
                    disabled={isLoading}
                  >
                    {isLoading ? "Loading.." : "Login"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
