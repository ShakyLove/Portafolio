import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectComponent } from '../project/project.component';

export interface Projects {
  title: string,
  description: string,
  position: string,
  img: string[],
  images: any[],
  skills: string[],
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  projects: Projects[] = [
    {
      title: "Face recognition",
      description: "Este Proyecto tuvo como propósito, el control de acceso por parte de la empresa utilizando el reconocimiento facial. Su flujo consistía en tomar una foto del empleado, dicha foto se validaba con algoritmos especializados programados en lenguaje Python si el sistema no reconocía el rostro se procede a hacer un previo registro tomando fotos del empleado en diferentes ángulos de su rostro, un escaneo de cédula y al finalizar se valida la información.",
      position: "Desarrollo Front-end",
      img: ["../../../assets/img/face/face5.PNG"],
      images: [
        { img: "../../../assets/img/face/face1.PNG", label: "1" },
        { img: "../../../assets/img/face/face2.PNG", label: "2" },
        { img: "../../../assets/img/face/face3.PNG", label: "3" },
        { img: "../../../assets/img/face/face4.PNG", label: "4" },
      ],
      skills: [
        "../../../assets/img/skill_icon/html-5.png",
        "../../../assets/img/skill_icon/css-3.png",
        "../../../assets/img/skill_icon/js.png",
        "../../../assets/img/skill_icon/angular-icon-logo.png",
        "../../../assets/img/skill_icon/typescript.png",
        "../../../assets/img/skill_icon/piton.png",
      ]
    },

    {
      title: "MODULAR DS",
      description: "Este proyecto tuvo como propósito la optimización de la gestión de clientes por medio de consultas especiales por parte de analistas de datos. El proyecto consiste en permitir al usuario especializado, en este caso los científicos de datos, poder codificar y ejecutar código Python desde el módulo del sistema. Con el fin de generar algoritmos que permitan extraer información potencial de los clientes de la compañía, tales como  posibles clientes o clientes potenciales.",
      position: "Desarrollo Front-end",
      img: ["../../../assets/img/modular.PNG"],
      images: [],
      skills: [
        "../../../assets/img/skill_icon/html-5.png",
        "../../../assets/img/skill_icon/css-3.png",
        "../../../assets/img/skill_icon/js.png",
        "../../../assets/img/skill_icon/angular-icon-logo.png",
        "../../../assets/img/skill_icon/typescript.png",
        "../../../assets/img/skill_icon/django-icon-0.jpg",
        "../../../assets/img/skill_icon/piton.png",
        "../../../assets/img/skill_icon/docker.png",
        "../../../assets/img/skill_icon/mysql.png"
      ]
    },

    {
      title: "Happy Feet Technology",
      description: "Este proyecto tuvo como propósito la gestión de inventarios de una empresa de calzado. El proyecto consiste en permitir a los usuarios de la empresa, tener un control sobre su inventario. Con un control sobre los usuarios que acceden al sistema, un control sobre sus proveedores, control sobre sus entradas, sus salidas de mercancía, entre otras. Además de generar reportes en formato PDF sobre su inventario en general.",
      position: "Desarrollo Full-stack",
      img: ["../../../assets/img/happy/Happy.PNG"],
      images: [
        { img: "../../../assets/img/happy/happy2.PNG", label: "1" },
        { img: "../../../assets/img/happy/happy3.PNG", label: "2" },
        { img: "../../../assets/img/happy/happy5.PNG", label: "3" },
        { img: "../../../assets/img/happy/happy4.PNG", label: "4" },
      ],
      skills: [
        "../../../assets/img/skill_icon/html-5.png",
        "../../../assets/img/skill_icon/css-3.png",
        "../../../assets/img/skill_icon/js.png",
        "../../../assets/img/skill_icon/php.png",
        "../../../assets/img/skill_icon/mysql.png"
      ]
    }
  ];

  constructor(public modal: MatDialog) { }

  ngOnInit(): void {
    console.log(this.projects)
  }

  openModel(item) {
    console.log(item)

    const modalRef = this.modal.open(ProjectComponent, {
      width: '90%',
      data: { data: item },
      disableClose: false,
      panelClass: 'custom-dialog-container'
    })
  }

}
