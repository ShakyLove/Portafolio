import { Component, OnInit } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public modal: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openInfo(){
    const modalRef = this.modal.open(AboutComponent, {
      width: '80%',
      height: '93%',
      disableClose: false,
      panelClass: 'custom-dialog-container'
    })
  }

  openPort(){
    console.log("aqui va el protafolio")
  }

  openContact(){
    console.log("aqui va el contacto")
  }

}
