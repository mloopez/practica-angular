import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
MATERIAL_COMPATIBILITY_MODE,
MatButtonModule,
MatIconModule,
MatLineModule,
MatListModule,
MatToolbarModule
} from '@angular/material';

@NgModule({

imports:[
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatLineModule,
    MatListModule,
    MatToolbarModule
],
exports:[
    
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatLineModule,
    MatListModule,
    MatToolbarModule
],
providers:[ 
    {provide: MATERIAL_COMPATIBILITY_MODE, useValue:true}
],
declarations:[]

})
export class MaterialModule {}