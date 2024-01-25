import { postInfos } from "./modules/dataBaseFunction.js";
import {addEvent, validateform} from "./modules/form.js";
import { displayEvent } from "./modules/displayEvent.js";
import { addMoreEvent } from "./modules/addEvent.js";
import { addDateToArray } from "./modules/datesArray.js";


addEvent();
addDateToArray();
addMoreEvent(postInfos);
validateform();
displayEvent();