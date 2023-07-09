import { Component,OnInit} from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators,NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-addfood',
  templateUrl: './addfood.component.html',
  styleUrls: ['./addfood.component.css']
})
export class AddfoodComponent implements OnInit{
  angForm: FormGroup;
  constructor(private fb: FormBuilder,
    private dataService: ApiService,
    private router: Router
    ) {
      this.angForm = this.fb.group({
        foodname:['',Validators.required],
        description:['',Validators.required],
        foodprice: ['',Validators.required]
      });
     }

  ngOnInit(): void {
    
  }
  postdata(angForm:any)
  {
    if(this.angForm.valid)
    {
    this.dataService.foodadd(
      angForm.value.foodname,
      angForm.value.description,
      angForm.value.foodprice
    )
    .pipe(first())
    .subscribe(data => {
      this.router.navigate(['/admin']);
      alert("added successfully")

    },
    error => {

    });
  }
  else {
    alert('Please fill all required fields');
  }
}

}
