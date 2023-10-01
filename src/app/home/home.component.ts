import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor(
    private _auth: AuthService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  home() {
    this._router.navigate(['home'], { relativeTo: this._route })
  }



  logout() {
    this._auth.clearStorage();
    this._router.navigate(['login']), { relativeTo: this._route };
  }


}
