import "./styles.css";
import { DateTime } from "luxon";

const wintertime = "2021-03-20 10:00:00+01";
const dtwinter = DateTime.fromISO(wintertime);

const summertime = "2021-06-29 11:00:00+02";
const dtsummer = DateTime.fromISO(summertime);

const loc = dtsummer.setLocale("nl");
console.log(loc.loc);
console.log("winter: ", dtwinter.isInDST);
console.log("summer: ", loc.isInDST);
