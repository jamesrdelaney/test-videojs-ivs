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
    this.loadEmployees();
  }
  // Get employees list
  loadEmployees() {
    return this.restApi.getEmployees().subscribe((data: {}) => {
      this.Employee = data;
    });
  }


}
