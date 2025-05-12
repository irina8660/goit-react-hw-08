import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p
        style={{
          fontSize: 36,
          textAlign: "center",
          fontWeight: 200,
        }}
      >
        Page is not found
        <span role="img" aria-label="Greeting icon">
          😳
        </span>
      </p>
    </div>
  );
};

export default NotFoundPage;
