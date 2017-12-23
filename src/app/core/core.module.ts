import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../pokemon.service';
import { UtilService } from '../util.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [PokemonService, UtilService]
})
export class CoreModule { }
