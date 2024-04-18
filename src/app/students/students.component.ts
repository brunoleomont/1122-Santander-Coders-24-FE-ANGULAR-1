import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {

  arrayOfStudents: Array<String> = [];
  @Input()
  student: string = '';

  onAddStudent(input: HTMLInputElement): void {
    this.arrayOfStudents.push(input.value);
    input.value = '';
  }

  ngOnInit(): void {
    console.log('chamou o onInit');
    console.log(this.arrayOfStudents);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('passou pelo onChanges');
    console.log(changes);
  }

  ngOnDestroy(): void {
    console.log('chamou o ngOnDestroy');
  }

}
