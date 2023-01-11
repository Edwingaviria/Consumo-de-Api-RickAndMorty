import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {
  constructor(private characterService: CharactersService, private route: ActivatedRoute) { }

  public characters: any = [];

  ngOnInit(): void {
    this.getCharacters();
  }
  public getCharacters(){
    this.characterService.get(`https://rickandmortyapi.com/api/character/`)
    .subscribe((response:any) =>{
      console.log(response);
      this.characters = response.results;
    })
  }
}


