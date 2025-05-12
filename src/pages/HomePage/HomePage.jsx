import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <title>Welcome</title>
      <div className={s.container}>
        <h1 className={s.title}>
          Hello, i'am your ContactsBook
          <span role="img" aria-label="Greeting icon">
            🫶
          </span>
        </h1>
      </div>
    </>
  );
};

export default HomePage;
