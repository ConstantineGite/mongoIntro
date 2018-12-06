import DB from ".//utils/db";
import * as Server from "./routing/index";

DB.connect().then(Server.start).catch(console.log);
