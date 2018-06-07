import { Subject } from 'rxjs/Subject';
import Operation from "./../ui-operations";

const subject = new Subject(); // Wee create a subject for the stream
subject.subscribe((val: any) => Operation.addItemToOutput(val)); // we create a listener for the stream

subject.next("Subject: The stream is starting! It will stop at 10."); // We send a message to the listener

let count = 0;
setInterval(() => {
    subject.next(`Subject: This is the ${++count}. data from the stream`);
}, 1000);

// addItemOutput is add a li element to the ul element in index.html with the value

setTimeout(() => subject.complete(), 10000);  // The stream is completed after 10 second!