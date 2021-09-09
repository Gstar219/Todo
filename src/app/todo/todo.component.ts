import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }
  public task:any=[]

  create(title:any){
  
    if (title!==''){
    this.task.push({title})
      console.log(this.task)
localStorage.setItem('id',JSON.stringify(this.task))

 }
}
get(){
  return localStorage.getItem(JSON.parse(this.task))
}
delete(i:any){
this.task.splice(i,1)
}
  ngOnInit(): void {
  }

}
