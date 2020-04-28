import { Component, OnInit } from "@angular/core";
import { Observable, Subscription } from "rxjs";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  private obSubscription: Subscription;
  constructor() {}

  ngOnInit(): void {
    const customobservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        count++;
      }, 1000);
    });
    this.obSubscription = customobservable.subscribe(data => {
      console.log(data);
    });
  }
}
