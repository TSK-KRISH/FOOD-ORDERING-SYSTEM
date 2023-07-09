import { Component,OnInit} from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators,NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  angForm: FormGroup;
  constructor(private fb: FormBuilder,
    private dataService: ApiService,
    private router: Router
    ) {
      this.angForm = this.fb.group({
        name:['',Validators.required],
        location:['',Validators.required],
        feedback: ['',Validators.required]
      });
     }

  ngOnInit(): void {
    
  }
  postdata(angForm:any)
  {
    if(this.angForm.valid)
    {
    this.dataService.feedback(
      angForm.value.name,
      angForm.value.location,
      angForm.value.feedback
    )
    .pipe(first())
    .subscribe(data => {
      alert("registered successfully")
    },
    error => {

    });
  }
  else {
    alert('Please fill all required fields');
  }
}

}
