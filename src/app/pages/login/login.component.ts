import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import {first} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
    angForm: FormGroup
    constructor(
        private fb: FormBuilder, private dataservice: ApiService, private router:Router

    ) { 
         this.angForm = this.fb.group({
         email: ['', [Validators.required, Validators.minLength(1), Validators.email]],
         password: ['', Validators.required]
        });
    }

    postdata(angForm:any)
    {
        if(this.angForm.valid){
        this.dataservice.userlogin(angForm.value.email, angForm.value.password)
        .pipe(first())
        .subscribe(
            data => {
              console.log(data);
              if(data.message=='success')
                //const redirect = this.dataservice.redirectUrl ? this.dataservice.redirectUrl : '/dashboard'
                this.router.navigate(['/home']);
            else if(data.message=='admin')
                this.router.navigate(['/admin']);
             else
             alert("USER NAMER OR PASSWORD IS INCORRECT")
        
            },
            error => {
                alert("USER NAMER OR PASSWORD IS INCORRECT")
            });
    
}else {
    alert('Please fill all required fields');
  }
    }
    ngOnInit(): void{

    }
}