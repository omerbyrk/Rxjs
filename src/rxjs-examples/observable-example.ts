import { Observable } from "rxjs/observable";
import Operations from './../ui-operations';

let _observe: any;

// Create an observable object
const observable = Observable.create((observe: any) => {
    observe.next("Observable: The stream is starting! It will stop at 10.");
    let count = 0;
    setInterval(() => {
        observe.next(`Observable: This is the ${++count}. data from the stream`);
    }, 1000);
    _observe = observe;
});


// Create a subscriber to recieve the datas of the stream
const subscriber = observable.subscribe((data: any) => Operations.addItemToOutput(data));
setTimeout(() => _observe.complete(), 10000);  // The stream is completed after 10 second!

