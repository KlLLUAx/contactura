import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss']
})
export class SingUpComponent {
hide = true;


constructor(private router:Router){


}

public onSingUp():void{
const click = true;
if(click){
  this.router.navigate(['/login']);
}

}



}
