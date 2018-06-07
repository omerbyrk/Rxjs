import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

const observable = Observable.create((observer: any) => {
    let i = 0;
    setInterval(() => observer.next(++i), 1000);
});

observable.map((data: number) => data * 3).subscribe((response: any) => {
    console.log(response);
});