import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pagenotfound',
  standalone: true,
  imports: [],
  templateUrl: './pagenotfound.component.html',
  styleUrl: './pagenotfound.component.css'
})
export class PagenotfoundComponent implements OnInit{
  constructor(private router:Router){

  }
  ngOnInit(): void {
      alert("Error-404 Page Not found");
      this.router.navigateByUrl("");
  }
}
