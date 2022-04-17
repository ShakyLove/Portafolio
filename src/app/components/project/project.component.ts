import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public datos: any,) { }

  ngOnInit(): void {
    console.log(this.datos)
  }

}
