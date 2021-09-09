import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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
}
