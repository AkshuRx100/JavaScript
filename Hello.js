function Emp(name,age,id)
{
   this.name=name;
   this.age=age;
   this.id=id;

this.getEmpDetails=function()
{
    console.log('Name :'+this.name+'age :'+this.age);
}

}

let emp1 = new Emp('vivek',10,122);
emp1.getEmpDetails();
//  let emp2 = new Emp('Alex',2,34);
//  console.log(emp2.getEmpDetails());

