import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


interface IUser{
  name:string;
  registration:string;
  email:string;
  isPremium: boolean;
}

export const DUMMY_DATA = [
{
  name:'Efrain',
  registration:'Hoy dia',
  email:'Efrain@corre.com',
  isPremium: true
},{
  name:'Maria',
  registration:'Hoy dia',
  email:'Maria@corre.com',
  isPremium: true
},{
  name:'Pedro',
  registration:'Hoy dia',
  email:'Pedro@corre.com',
  isPremium: true
},{
  name:'Karla',
  registration:'Hoy dia',
  email:'Karla@corre.com',
  isPremium: true
},{
  name:'Elena',
  registration:'Lunes',
  email:'Elena@corre.com',
  isPremium: true
},{
  name:'Julio',
  registration:'Hoy dia',
  email:'Julio@corre.com',
  isPremium: false
},{
  name:'Jean',
  registration:'Hoy dia',
  email:'Jean@corre.com',
  isPremium: false
}];

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private usersSubject = new BehaviorSubject([]);
  private users: IUser[];


  getUsers():Observable<IUser[]>{
    return this.usersSubject.asObservable();
  }

  private refresh(){
    this.usersSubject.next(this.users);
  }

  createNewUser(user:IUser){
    this.users = [...this.users,user];
    this.refresh();
  }

  loadDummyData(){
    this.users = DUMMY_DATA;
    this.refresh();
  }

  approveAll(){
    this.users = this.users.map(user => Object.assign({},user,{isPremium:true}));
    this.refresh();
  }
}
