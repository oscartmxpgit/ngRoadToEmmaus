import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // fooddetails

  foodDetails = [
    {
      id:1,
      foodName:"Multiplicación de los panes",
      foodDetails:"Uno de los milagros más conocidos.",
      foodPrice:200,
      foodImg:"03_FB_JVH_Miracles_1024"
    },
    {
      id:2,
      foodName:"Yo te digo: Levántate",
      foodDetails:"Estudio sobre el milagro",
      foodPrice:369,
      foodImg:"02_FB_JVH_Miracles_1024"
    },
    {
      id:3,
      foodName:"¿Quién es este?",
      foodDetails:"¿Realmente ocurrió?",
      foodPrice:149,
      foodImg:"01_FB_JVH_Miracles_1024"
    },
    {
      id:4,
      foodName:"Recopilación ",
      foodDetails:"Recolección de los estudios sobre los milagros.",
      foodPrice:140,
      foodImg:"00_FB_JVH_Miracles_1024"
    },

  ]




}
