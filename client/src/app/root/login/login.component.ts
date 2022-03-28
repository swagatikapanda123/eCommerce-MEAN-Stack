import { Component, OnInit } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpService } from "./../../shared/service/http.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class MyLoginComponent implements OnInit {
  userDetails: any = {};
  constructor(private http: HttpService) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.userDetails);

    this.http.post("user/login", this.userDetails).subscribe((res) => {
      console.log(res);
    });
  }
}
