import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  addressList:Array<FormsModel>;
   countryList=['USA',"India",'China',"Brazil","Kabul","Pakistan","Span","Argentina","Australia","Russia"];
  constructor(){}
  ngOnInit()
  {
    this.addressList=new Array<FormsModel>();
    this.createForm();
  
  }
  createForm()
  {
    let inititalForm=new FormsModel();
    this.addressList.push(inititalForm);
  }
  rremoveForm(index)
  {
   this.addressList.splice(index,1);
  }
  saveForm()
{
  console.log("form data",this.addressList);
}
}



export class FormsModel
{
  address:string;
  street:string;
  city:string;
  country:string;
}