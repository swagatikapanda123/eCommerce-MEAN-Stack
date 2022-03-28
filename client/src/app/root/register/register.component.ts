import { HttpService } from "./../../shared/service/http.service";
import { Component, OnInit } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class MyRegisterComponent implements OnInit {
  // form: any = {
  //   username: null,
  //   email: null,
  //   password: null,
  // };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = "";

  userDetails: any = {};

  constructor(private http: HttpService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.userDetails);
    this.http.post("user/register", this.userDetails).subscribe((res) => {
      console.log(res);
    });
  }
}
