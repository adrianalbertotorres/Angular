import{Component} from '@angular/core';

@Component({

    selector:'app-right',
    template:`
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-8">
    <p class="right-parrafo">
    {{title}}
    </p>
    </div>`,
    styles: [`
    .right-parrafo{
        border:1px solid yellow;
        height:300px;}
    }


`]
})

export class RightComponent{
    title:string="Fotos";
}