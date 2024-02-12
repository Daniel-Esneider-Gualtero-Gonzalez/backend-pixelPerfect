import Nedb from "nedb";


export const apikeysBd = new  Nedb({filename:"./apikeys.bd",autoload:true});
export const adminBd = new  Nedb({filename:"./admin.bd",autoload:true});
export const errorBd = new Nedb({filename:"./error.bd",autoload:true})