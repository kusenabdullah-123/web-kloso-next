import Navbar from "./component/navbar";
import Image from "next/image";
import { useForm } from "react-hook-form";
import Link from "next/link";
import axios from "axios";
import Cookie from "js-cookie";
import { useRouter } from "next/router";

const login = () => {
  const url = process.env.SERVER || "http://localhost:1337/";
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // function to output form data
  // we need to pass it to onSubmit of form element
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${url}auth/local/`, {
        identifier: data.identifier,
        password: data.password,
      });
      if (response.status == 200) {
        Cookie.set("token", response.data.jwt);
        router.replace("/");
      }
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <section
      className="h-100 w-100 bg-white"
      style={{ boxSizing: "border-box" }}
    >
      <div
        className="container-xxl mx-auto p-0 position-relative header-2-2"
        style={{ fontFamily: '"Poppins", sans-serif' }}
      >
        {/* navbar */}
        <Navbar />
        {/* header */}
        <div
          className="content-3-5 d-flex flex-column align-items-center h-100 flex-lg-row"
          style={{ fontFamily: '"Poppins", sans-serif' }}
        >
          <div className="position-relative d-none d-lg-block h-100 width-left">
            <Image
              height={500}
              width={700}
              className="img-fluid"
              src="/login.png"
              alt=""
            />
          </div>
          <div className="d-flex mx-auto align-items-left justify-content-left width-right mx-lg-0">
            <div className="right mx-lg-0 mx-auto">
              <div className="align-items-center justify-content-center d-lg-none d-flex">
                <Image
                  height={500}
                  width={700}
                  className="img-fluid"
                  src="/login.png"
                  alt=""
                />
              </div>
              <h1 className="title-text">Log In</h1>
              <h1 className="title-text">
                UKM K.L.O.S.O
                <br />
              </h1>
              <form
                style={{ marginTop: "1.5rem" }}
                onSubmit={handleSubmit(onSubmit)}
                action=""
                method="post"
              >
                <div style={{ marginBottom: "1.75rem" }}>
                  <label htmlFor="email" className="d-block input-label">
                    Email
                  </label>
                  <div className="d-flex w-100 div-input">
                    <svg
                      className="icon"
                      style={{ marginRight: "1rem" }}
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5 5C3.34315 5 2 6.34315 2 8V16C2 17.6569 3.34315 19 5 19H19C20.6569 19 22 17.6569 22 16V8C22 6.34315 20.6569 5 19 5H5ZM5.49607 7.13174C5.01655 6.85773 4.40569 7.02433 4.13168 7.50385C3.85767 7.98337 4.02427 8.59422 4.50379 8.86823L11.5038 12.8682C11.8112 13.0439 12.1886 13.0439 12.4961 12.8682L19.4961 8.86823C19.9756 8.59422 20.1422 7.98337 19.8682 7.50385C19.5942 7.02433 18.9833 6.85773 18.5038 7.13174L11.9999 10.8482L5.49607 7.13174Z"
                        fill="#CACBCE"
                      />
                    </svg>
                    <input
                      {...register("identifier", {
                        required: "Required",
                      })}
                      className="input-field border-0"
                      type="email"
                      id="email"
                      placeholder="Your Email Address"
                      autoComplete="on"
                    />
                  </div>
                </div>
                <div style={{ marginTop: "1rem" }}>
                  <label
                    htmlFor="password-content-3-5"
                    className="d-block input-label"
                  >
                    Password
                  </label>
                  <div className="d-flex w-100 div-input">
                    <svg
                      className="icon"
                      style={{ marginRight: "1rem" }}
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.81592 4.25974C7.12462 5.48872 7 6.95088 7 8H6C4.34315 8 3 9.34315 3 11V19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V11C21 9.34315 19.6569 8 18 8L17 7.99998C17 6.95087 16.8754 5.48871 16.1841 4.25973C15.829 3.62845 15.3194 3.05012 14.6031 2.63486C13.8875 2.22005 13.021 2 12 2C10.979 2 10.1125 2.22005 9.39691 2.63486C8.68058 3.05012 8.17102 3.62845 7.81592 4.25974ZM9.55908 5.24026C9.12538 6.01128 9 7.04912 9 8H15C15 7.04911 14.8746 6.01129 14.4409 5.24027C14.2335 4.87155 13.9618 4.57488 13.6 4.36514C13.2375 4.15495 12.729 4 12 4C11.271 4 10.7625 4.15495 10.4 4.36514C10.0382 4.57488 9.76648 4.87155 9.55908 5.24026ZM14 14C14 14.7403 13.5978 15.3866 13 15.7324V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V15.7324C10.4022 15.3866 10 14.7403 10 14C10 12.8954 10.8954 12 12 12C13.1046 12 14 12.8954 14 14Z"
                        fill="#CACBCE"
                      />
                    </svg>
                    <input
                      {...register("password", {
                        required: "Required",
                      })}
                      className="input-field border-0"
                      type="password"
                      id="password-content-3-5"
                      placeholder="Your Password"
                      minLength={6}
                    />
                  </div>
                </div>
                {/* <div
                  className="d-flex justify-content-end"
                  style={{ marginTop: "0.75rem" }}
                >
                  <a href="#" className="forgot-password fst-italic">
                    Forgot Password?
                  </a>
                </div> */}
                <button
                  className="btn btn-fill text-white d-block w-100"
                  type="submit"
                >
                  Log In
                </button>
              </form>
              <p className="text-center bottom-caption">
                Belum Punya Akun?
                <Link href="/daftar">
                  <a className="green-bottom-caption">Daftar Dulu</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default login;
