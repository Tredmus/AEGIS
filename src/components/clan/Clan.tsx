import classes from "./Clan.module.scss";

type ClanType = {
  name: string;
};

export const Clan = ({ name }: ClanType) => {
  return <div className={classes.clan}>{name}</div>;
};
