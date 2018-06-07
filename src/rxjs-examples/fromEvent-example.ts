import { fromEvent } from "rxjs/observable/fromEvent";
import Operations from "./../ui-operations";

const observable = fromEvent(document, "mousemove"); // We create an event for document and observe it!

// setBoxPosition is a function which changes the position of the box that is a div in the index.html
observable.subscribe((e: any) => Operations.setBoxPosition(e.clientX, e.clientY)); // We create a subscription to the event!

