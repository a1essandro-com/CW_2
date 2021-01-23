import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  people: Array<any> = []
  constructor() {
      setTimeout(() => {
          for (let i = 0; i < 1; i++) {
            let jsonUser = localStorage.getItem("user")
            if (jsonUser) {
                let user = JSON.parse(jsonUser)
                let login_for_user = user["login"]
                let password_for_user = user["password"]
                this.people.push({
                  "name": login_for_user,
                  "age": localStorage.getItem("info1"),
                  "petname": localStorage.getItem("info2")
              })
            }
          }
      }, 1000);
  }

  ngOnInit(): void {
  }

}