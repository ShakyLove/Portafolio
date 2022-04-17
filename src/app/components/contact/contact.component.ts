import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }


  createForm() {
    this.contactForm = this.fb.group({
      name  : ['', [Validators.required]],
      email : ['', [Validators.required, Validators.email]],
      text  : [''],
    })
  }

  get error(): any { return this.contactForm.controls; }
}
