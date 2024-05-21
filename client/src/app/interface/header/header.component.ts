import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component( {
    selector: 'app-header' ,
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class Header implements OnInit {

    
    isAuth = false   //отображение на странице
    


    //Необходимо настроить отображение Header и sidebar при логине и выходу
    constructor(public AuthService: AuthService){}

    
    // свойство для отображения
    ngOnInit(): void {
        
    }
}