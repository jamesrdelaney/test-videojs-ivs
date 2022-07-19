import { Component, OnInit, OnDestroy  } from '@angular/core';
import { VjsPlayerComponent } from '../vjs-player/vjs-player.component'
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  Employee: any = [];

  options: any;

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

  constructor(public restApi: RestApiService) { }

  ngOnInit(): void {
    // this.loadEmployees();

    this.options = {techOrder: ['AmazonIVS'], 
                    fluid: true, 
                    aspectRatio: '16:9', 
                    autoplay: true, 
                    controls: true, 
                    sources: [
                      { src: 'https://0053cc9aa9da.eu-west-1.playback.live-video.net/api/video/v1/eu-west-1.994576794344.channel.hNayysY7tTSf.m3u8', 
                        type: 'application/x-mpegURL' }]
                    }

  }
  // // Get employees list
  // loadEmployees() {
  //   return this.restApi.getEmployees().subscribe((data: {}) => {
  //     this.Employee = data;
  //   });
  // }


}
