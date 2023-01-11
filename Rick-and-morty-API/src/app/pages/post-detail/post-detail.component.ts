import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/services/characters.service';


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  public id: any;
  public response: any;

  constructor(private route: ActivatedRoute,
    private characterService: CharactersService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: any) => {
    const { params } = paramMap;
    console.log(params.id);
     this.loadData(params.id);
    });
  }

  loadData(id:string){
    this.characterService.get(`https://rickandmortyapi.com/api/character/${id}`)
    .subscribe(response =>{
      this.response = response;
    })
  }
}
