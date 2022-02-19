import Styles from "../styles/logout.module.css";
import { useState, useEffect } from "react";
import Cookie from "js-cookie";
import { useRouter } from "next/router";

const logout = () => {
  const router = useRouter();
  const [isloading, setIsloading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      Cookie.remove("token");
      setIsloading(false);
      router.push("/");
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [isloading]);

  return <div className={Styles.spinner} />;
};
export default logout;
