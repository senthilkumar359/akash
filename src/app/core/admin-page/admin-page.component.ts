import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DropdownService } from 'src/app/service/DropdownService';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  form!: FormGroup;
  role = ['maker', 'checker'];
  constructor(private dropdown:DropdownService,private fb: FormBuilder) { }
  
  items: string[] = [];
  addNewResponse:string='';
  ngOnInit(): void {
    this.dropdown.getDropdownItems().subscribe(data => {
      this.items = data;
    });
    this.form = this.fb.group({
      tableName: ['', Validators.required],
      role: ['', Validators.required],
      userId: ['', Validators.required],
    });
  }
  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      //debugger
      this.dropdown.saveFormValues(this.form.value).subscribe(data=>{
        this.addNewResponse=data;
      });
    }
   
  }
  
}
