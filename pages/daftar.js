import Navbar from "./component/navbar";
import Image from "next/image";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/router";

const daftar = () => {
  const router = useRouter();
  const url = "http://localhost:1337/auth/local/register" || process.env.SERVER;
  const cloud_server =
    process.env.CLOUD || "https://kloso-strapi-mongo.herokuapp.com/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios({
        method: "POST",
        url: cloud_server,
        data: data,
      });

      if (response.status == 200) {
        router.push("/");
      }
    } catch (err) {
      console.log("Err", err.response);
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
          <div className="position-relative d-flex justify-content-center d-none d-lg-block h-100 width-left">
            <div className="p-3">
              <Image src="/IMG_9118.JPG" height={500} width={700} alt="" />
            </div>
          </div>
          <div className="d-flex mx-auto align-items-left justify-content-left width-right mx-lg-0">
            <div className="right mx-lg-0 mx-auto">
              <h3 className="title-text text-lg-center mb-5">
                Formulir Pendaftaran UKM K.L.O.S.O
              </h3>
              <form onSubmit={handleSubmit(onSubmit)} action="">
                <div style={{ marginBottom: "1.75rem" }}>
                  <label className="d-block input-label">Email</label>
                  <div className="d-flex w-100 div-input">
                    <input
                      {...register("email", {
                        required: "Required",
                      })}
                      type="email"
                      className="input-field border-0"
                      placeholder="Masukkan Alamat Email"
                    />
                  </div>
                  {errors.email && (
                    <p style={{ color: "red" }}> Email is required.</p>
                  )}
                </div>
                <div style={{ marginBottom: "1.75rem" }}>
                  <label className="d-block input-label">NIM</label>
                  <div className="d-flex w-100 div-input">
                    <input
                      {...register("nim", {
                        required: "Required",
                      })}
                      className="input-field border-0"
                      placeholder="Masukkan Nama Anda"
                    />
                  </div>
                  {errors.nim && (
                    <p style={{ color: "red" }}> NIM is required.</p>
                  )}
                </div>
                <div style={{ marginBottom: "1.75rem" }}>
                  <label className="d-block input-label">username</label>
                  <div className="d-flex w-100 div-input">
                    <input
                      {...register("username", {
                        required: "Required",
                      })}
                      className="input-field border-0"
                      placeholder="Masukkan Nama Anda"
                    />
                  </div>
                  {errors.username && (
                    <p style={{ color: "red" }}> Username is required.</p>
                  )}
                </div>

                <div style={{ marginBottom: "1.75rem" }}>
                  <label className="d-block input-label">Password</label>
                  <div className="d-flex w-100 div-input">
                    <input
                      {...register("password", {
                        required: "Required",
                      })}
                      type="password"
                      className="input-field border-0"
                      placeholder="Masukkan Password"
                    />
                  </div>
                  {errors.password && (
                    <p style={{ color: "red" }}> Password is required.</p>
                  )}
                </div>

                <button
                  className="btn btn-fill text-white d-block w-50"
                  type="submit"
                >
                  Gabung
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default daftar;
