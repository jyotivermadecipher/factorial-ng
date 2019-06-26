import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {FactorialService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor( private fb: FormBuilder, private factorialService: FactorialService){}
  factorialForm;
  factorial;
  showFactorial: boolean;
  ngOnInit(): void {
    this.factorialForm = this.fb.group({
      number: ['' , Validators.required ],
    });
    this.showFactorial = false;
  }

  calculateFactorial()
  {
    console.log(this.factorialForm);
    if(this.factorialForm.valid)
    {
      let data = this.factorialForm.controls.number.value;
      this.factorialService.calculatefactorial(data).subscribe( res =>{
        this.factorial = res.factorial;
        this.showFactorial = true;
      });
    }
    else {
      this.factorialForm.controls.number.markAsTouched();
    }
      // this.factorialForm.calculateFactorial()
  }
}
