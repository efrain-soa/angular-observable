import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
 
@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements OnInit {
  @Input() users;  //Enlace de propiedad con el componente primario
  @Output() onCreateUser: EventEmitter<any> = new EventEmitter(); //Pasamos datos del elemento secundario al primario
  @Output() onApproveAll: EventEmitter<any> = new EventEmitter();
 
  constructor() { }
 
  ngOnInit() {
  }
 
  createUser() {
    this.onCreateUser.emit({  //Emitimos un evento para el componente principal
      name: 'Prueba',
      email: 'prueba@gmail.com',
      registration: 'May 11, 2016',
      isPremium: false
    });
  }
 
  approveAll() {
    this.onApproveAll.emit();
  }
}
