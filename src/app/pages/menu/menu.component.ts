import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators,NgForm } from '@angular/forms';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  angForm: FormGroup;

  constructor(private service:OrderDetailsService,
    private fb: FormBuilder,
    private dataService: ApiService,
    private router: Router) {
      
      this.angForm = this.fb.group({
        foodName:['',Validators.required],
        foodPrice:['',Validators.required],
      });
     }
  foodData:any;
  ngOnInit(): void {
    this.foodData=this.service.foodDetails
  }

  postdata(angForm:any)
  {
    this.dataService.cart(
      angForm.value.foodName,
      angForm.value.foodPrice
    )
    .pipe(first())
    .subscribe(data => {
      alert("added successfully")
    },
    error => {

    });
  }

}

