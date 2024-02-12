import Nedb from "nedb";


export const apikeysBd = new  Nedb({filename:"./apikeys.bd",});
export const adminBd = new  Nedb({filename:"./admin.bd"});
export const errorBd = new Nedb({filename:"./error.bd"})