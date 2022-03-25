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
  username: any;

  //userModel = new User("user", "user@gmail.com", "user");

  // registerForm = this.formBuilder.group({
  //   username: "",
  //   email: "",
  //   password: "",
  // });

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    //console.log(this.userModel);
    // const { username, email, password } = this.form;
    // console.log(username, email, password);
    // this.register(username, email, password).subscribe({
    //   next: (data) => {
    //     console.log(data);
    //     this.isSuccessful = true;
    //     this.isSignUpFailed = false;
    //   },
    //   error: (err) => {
    //     this.errorMessage = err.error.message;
    //     this.isSignUpFailed = true;
    //   },
    // });
  }
  setname() {
    console.log(this.username);
  }
}
