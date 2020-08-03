import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit,OnDestroy {

  value = new FormControl('');

  private destroy$: Subject<any> = new Subject();

  @Input() label;
  @Input() debounceTime;
  @Output() valueChanges = new EventEmitter();
  constructor() { }


  ngOnInit(): void {
    this.listenFormControl();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  listenFormControl(){
    this.value.valueChanges.pipe(debounceTime(this.debounceTime),takeUntil(this.destroy$)).subscribe(
      val =>{
        this.valueChanges.emit(val);
      }
    )
  }
  resetForm(){
    this.value.reset();
  }

}
