export class User{

private name : string = "";
private lastName : string = "";
private age:number = 0;
private photo:string = "";
private description: string = "";
private mail:string = "";
private password : string ="";

  constructor(name:string,lastname:string,age:number,photo:string,
    description:string,mail:string,password:string){

    this.name = name;
    this.lastName = lastname;
    this.age = age;
    this.photo = photo;
    this.description = description;
    this.mail = mail;
    this.password = password;

  }

  //Setter and getter of Name
  public getName():string {
    return this.name;
  }
  public setName(name:string):void{
    this.name = name;
  }

  //Setter and getter of lastName
  public getLastName():string{
    return this.lastName;
  }
  public setLastName(lastName:string):void{
    this.lastName = lastName;
  }

  //Setter and getter of age
  public getAge():number{
    return this.age;
  }
  public setAge(age:number):void{
    this.age = age;
  }

  //Setter and getter of photo
  public getPhoto():string{
    return this.photo;
  }
  public setPhoto(photo:string):void{
    this.photo = photo;
  }

  //Setter and getter of description
  public getDescription():string{
    return this.description;
  }
  public setDescription(description:string):void{
    this.description = description;
  }

  //Setter and getter of mail
  public getMail():string{
    return this.mail;
  }
  public setMail(mail:string):void{
    this.mail = mail;
  }

  //Setter and getter of password
  public getPassword():string{
    return this.password;
  }
  public setPassword(password:string):void{
    this.password = password;
  }

}

export interface registerUser{

  name : string,
  lastName : string,
  age:number,
  photo:string,
  description: string,
  mail:string,
  password : string,
  confirmPassword:string;

}
