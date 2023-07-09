import { Injectable,Output,EventEmitter } from "@angular/core";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Users } from "./users";

@Injectable({
    providedIn: 'root'
})

export class ApiService{

    baseUrl:string = "http://localhost/angularCRUD/";
    constructor(private httpClient : HttpClient) { }


    public userregistration(f_name:any,l_name:any,email:any,password:any,mobile:any){
        return this.httpClient.post<any>(this.baseUrl + '/register.php',
        {
            f_name,l_name,email,password,mobile}
        )
        .pipe(map(Users => {
            return Users;
        }));
    }
    public feedback(name:any,location:any,feedback:any){
        return this.httpClient.post<any>(this.baseUrl + '/feedback.php',
        {
            name,location,feedback}
        )
        .pipe(map(Users => {
            return Users;
        }));
    }




    public foodadd(foodname:any,description:any,foodprice:any){
        return this.httpClient.post<any>(this.baseUrl + '/foodadd.php',
        {
            foodname,description,foodprice}
        )
        .pipe(map(Users => {
            return Users;
        }));
    }


    public userorder(name:any,phn:any,fname:any,fprice:any){
        return this.httpClient.post<any>(this.baseUrl + '/orders.php',
        {
            name,phn,fname,fprice}
        )
        .pipe(map(Users => {
            return Users;
        }));
    }


    public cart(foodName:any,foodPrice:any){
       
        return this.httpClient.post<any>(this.baseUrl + '/cart.php',
        {
           foodName,foodPrice }
        )
        .pipe(map(Users => {
            return Users;
        }));
    }

    public userlogin(email:any,password:any){
        return this.httpClient.post<any>(this.baseUrl + '/login.php',
        {
          email,password}
        )
        .pipe(map(Users => {
           // console.log(Users.email)
            this.setToken(Users.email);
            //this.getLoggedInName.emit(true);
            return Users;
        }));
    }

    setToken(token: string){
        localStorage.setItem('token',token);
    }

} 
