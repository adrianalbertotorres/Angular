import{Component} from '@angular/core';

@Component({

    selector:'app-left',
    template:`
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
     <p class="left-parrafo">
     {{title}}
     </p>
    </div>`,
    styles: [`
        .left-parrafo{
            border:1px solid red;
            height:300px;}
        }
    
    
    `]
})

export class LeftComponent{
title:string="News";
}