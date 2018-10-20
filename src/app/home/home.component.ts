import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.newUser('alim@gmail.com', '123456')
      .then(() => console.log('Registration success.'))
      .catch(() => console.error('Registration failed!!!'));
  }

}
