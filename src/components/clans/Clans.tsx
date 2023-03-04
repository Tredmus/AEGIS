import classes from "./Clans.module.scss";
import { Clan } from "../clan/Clan";

const clans = ["bl", "1", "2", "3"];

export const Clans = () => {
  return (
    <div className={classes.clans}>
      {clans.map((clan) => (
        <Clan name={clan} />
      ))}
    </div>
  );
};
