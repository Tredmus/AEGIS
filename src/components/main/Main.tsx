import classes from "./Main.module.scss";

export const Main = () => {
  return (
    <main className={classes.main}>
      <div className={classes.half}>
        <img src="images/logo.png" alt="" />
      </div>

      <div className={`${classes.half} ${classes.right}`}>
        <h1 className={classes.title}>AEGIS</h1>
      </div>
    </main>
  );
};
