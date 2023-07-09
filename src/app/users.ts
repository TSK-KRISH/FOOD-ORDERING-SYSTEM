export class Users{

    public id: Number;
    public f_name: string;
    public l_name: string;
    public email: string;
    public password: string;
    public mobile: string;
    public foodName:string;
    public foodPrice:Number;
    public name: string;
    public location: string;
    public feedback: string;
    public phn: string;
    public fname: string;
    public fprice: string;
    public foodname:string;
    public description:string;
    public foodprice:string;
    

    constructor(id:number,f_name:string,
        l_name:string,
        email:string,
        password:string,
        mobile:string,
        foodName:string,
        foodPrice:Number,
        name: string,
        location: string,
        feedback: string,
        phn: string,
        fname: string,
        fprice: string,
        foodname:string,
        foodprice:string,
        description:string)
        {
            this.id = id;
            this.f_name = f_name;
            this.l_name = l_name;
            this.email = email;
            this.password = password;
            this.mobile = mobile;
            this.foodName=foodName;
            this.foodPrice=foodPrice;
            this.name=name;
            this.location=location;
            this.feedback=feedback;
            this.phn=phn;
            this.fname=fname;
            this.fprice=fprice;
            this.foodname=foodname;
            this.foodprice=foodprice;
            this.description=description;
        }
}