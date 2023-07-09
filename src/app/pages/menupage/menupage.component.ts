import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {
  angForm: FormGroup;

  constructor(
    private param: ActivatedRoute,
    private service: OrderDetailsService,
    private fb: FormBuilder,
    private dataService: ApiService,
    private router: Router
  ) {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      phn: ['', Validators.required],
      fname: ['', Validators.required],
      fprice: ['', Validators.required]
    });
  }

  getMenuId: any;
  menuData: any;

  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId, 'getmenu');
    if (this.getMenuId) {
      this.menuData = this.service.foodDetails.filter((value) => {
        return value.id == this.getMenuId;
      });
      console.log(this.menuData, 'menudata>>');
      this.angForm.patchValue({
        fname: this.menuData[0].foodName,
        fprice: this.menuData[0].foodPrice
      });
    }
  }

  postdata(angForm: any) {
    if (this.angForm.valid) {
      this.dataService
        .userorder(
          angForm.value.name,
          angForm.value.phn,
          angForm.value.fname,
          angForm.value.fprice
        )
        .pipe(first())
        .subscribe(
          (data) => {
            this.router.navigate(['payment']);
            alert('Ordered successfully');
          },
          (error) => {}
        );
    } else {
      alert('Please fill all required fields');
    }
  }
}
