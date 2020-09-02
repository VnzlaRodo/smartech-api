import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { HomeComponent } from './components/home/home.component';

import { AppComponent } from './app.component';

//rutas

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'inicio', component: HomeComponent},
	
	//{path: '**', component: SobremiComponent}, //debo hacer enlace error 404
	
];

//esportando configuracion de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes); //cargar la configuracion de rutas en la app
