
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-home',
  standalone:false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  clima!: ClimaResult;
  
  constructor(private service: ApiService) { }
  
  ngOnInit(): void {
    this.service.getData().subscribe((result: ClimaResult) =>{
      this.clima = result;
    });
  }
}
