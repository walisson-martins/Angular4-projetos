import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "app";

  ngOnInit(): void {
    var firebaseConfig = {
      apiKey: "AIzaSyC1oIpVh1XuLba8IsceNP6vbiQG_76XDrA",
      authDomain: "instagram-5dd60.firebaseapp.com",
      databaseURL: "https://instagram-5dd60-default-rtdb.firebaseio.com",
      projectId: "instagram-5dd60",
      storageBucket: "instagram-5dd60.appspot.com",
      messagingSenderId: "212582773867",
      appId: "1:212582773867:web:545478ff465c31da252d2e",
    };
    firebase.initializeApp(firebaseConfig);
  }
}
