import { Component, OnInit } from '@angular/core';
import { VjsPlayerComponent } from '../vjs-player/vjs-player.component'
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  // options : any =
  // {
  //   fluid: true,
  //   aspectRatio: "16:9",
  //   autoplay: true,
  //   sources: [{
  //       src: 'some source',
  //       type: 'mpeg',
  //   }],
  // };

  constructor() { }

  ngOnInit(): void {
  }

}
