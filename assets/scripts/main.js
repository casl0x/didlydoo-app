import { postInfos } from "./modules/dataBaseFunction.js";
import {addEvent, validateform} from "./modules/form.js";
import { displayEvent } from "./modules/displayEvent.js";
import { addMoreEvent } from "./modules/addEvent.js";


addEvent();
addMoreEvent(postInfos);
validateform();
displayEvent();
