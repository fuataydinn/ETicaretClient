import { Injectable } from '@angular/core';
declare var alertify : any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  // message(message : string, messageType : MessageType,position: Position,delay : number=3,dismissOthers : boolean=false)
  
  message(message : string,options : Partial<AlertiftyOptions>){
   alertify.set('notifier','delay', options.delay);
   alertify.set('notifier','position', options.position);
   const msj = alertify[options.messageType](message);
   if(options.dismissOthers=true) 
   msj.dismissOthers();
  }

  dismiss(){
    alertify.dismissAll();
  }
}

export class AlertiftyOptions{
messageType : MessageType= MessageType.Message;
position : Position = Position.BottomLeft;
delay : number = 3;
dismissOthers : boolean =false;
}

export enum MessageType{
  Error   ="error",
  Message ="message",
  Warning ="warning",
  Notify  ="notify",
  Success ="success"
}

export enum Position{
  TopCenter   ="top-center",
  TopRight    ="top-right",
  TopLeft     ="top-left",
  BottomRight ="bottom-right",
  BottomLeft  ="bottom-left",
  BottomCenter="bottom-center"
}

