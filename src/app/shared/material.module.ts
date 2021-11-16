import { NgModule } from '@angular/core';
import { MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatTabsModule} from "@angular/material/tabs";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

const MATERIALS = [MatToolbarModule,MatButtonModule,MatCardModule,MatListModule, MatTabsModule,MatFormFieldModule,MatInputModule]

@NgModule({
  imports: MATERIALS,
  exports: MATERIALS
})
export class MaterialModule { }
