import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import videojs from 'video.js';
import { VideoJSEvents, VideoJSIVSTech, registerIVSTech } from 'amazon-ivs-player';
// import {
//   VideoJSQualityPlugin,
//   VideoJSIVSTech,
//   registerIVSQualityPlugin,
//   registerIVSTech,
//   VideoJSEvents,
// } from 'amazon-ivs-player';

// Used this: https://videojs.com/guides/angular/

// We use the TypeScript compiler (TSC) to check types; it doesn't know what this WASM module is, so let's ignore the error it throws (TS2307).
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import wasmBinaryPath from 'node_modules/amazon-ivs-player/dist/assets/amazon-ivs-wasmworker.min.wasm';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import wasmWorkerPath from 'node_modules/amazon-ivs-player/dist/assets/amazon-ivs-wasmworker.min.js';

@Component({
  selector: 'app-vjs-player',
  template: `
    <video #target id="amazon-ivs-videojs" class="video-js" controls muted playsinline preload="none"></video>
  `,
  styleUrls: [
    './vjs-player.component.css'
  ],
  encapsulation: ViewEncapsulation.None,
})

export class VjsPlayerComponent implements OnInit, OnDestroy {
  @ViewChild('target', { static: true }) target!: ElementRef;

  private _options: any;

  // See options: https://videojs.com/guides/options
  // @Input() options!: {
  //     techOrder: string[],
  //     fluid: boolean,
  //     aspectRatio: string,
  //     autoplay: boolean,
  //     controls: boolean,
  //     sources: {
  //         src: string,
  //         type: string,
  //     }[],
  // };

  @Input() set options(options: any) {
    console.log("change in the child component to")
    console.log(options)
    this._options = options

    // if (this.player) {
    //   console.log("change the source")
    //   this.player.src(this._options.src)
    // }
  }

  get options(): any {
    return this._options;
    }

    player!: videojs.Player;

  constructor(
    private elementRef: ElementRef,
  ) { }

  // Instantiate a Video.js player OnInit
  ngOnInit() {
    // this.player = videojs(this.target.nativeElement, this.options, function onPlayerReady() {
    //   console.log('onPlayerReady', this);
    // });

    // registerIVSTech(videojs);
  }

  // Dispose the player OnDestroy
  ngOnDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }



  ngAfterViewInit() {
    const createAbsolutePath = (assetPath: string) => new URL(assetPath, document.URL).toString();

    console.log("after ngAfterViewInit")

    // this is a basic installation of video.js
    // instantiate Video.js
    //   this.player = videojs(this.target.nativeElement, this.options, function onPlayerReady() {
    //     console.log('onPlayerReady', this);
    //   });

    // Set up IVS playback tech and quality plugin
    registerIVSTech(videojs, {
      wasmWorker: createAbsolutePath(wasmWorkerPath),
      wasmBinary: createAbsolutePath(wasmBinaryPath),
    });
    // registerIVSQualityPlugin(videojs);

    this.player = videojs('amazon-ivs-videojs', {
      techOrder: ["AmazonIVS"]
    }, () => {
      console.log('Player is ready to use!');

      //player.enableIVSQualityPlugin(); 

      // Play stream
//      this.player.src(this._options.src);

      this.player.src('https://0053cc9aa9da.eu-west-1.playback.live-video.net/api/video/v1/eu-west-1.994576794344.channel.hNayysY7tTSf.m3u8');
      //player.getIVSPlayer().addEventListener(event, this.handlePlayerIVSError);
      //player.on("error", handlePlayerError);
    });

    //player.src(this.options.src);

    // this.player = videojs(document.getElementById('video-player'), this.options, function onPlayerReady() {

    // // Here where the magic happens :D 

    // this.on('loadedmetadata', () => {

    //         });
    // this.on('timeupdate', () => {

    //         });
    // this.on('loadeddata', () => {

    //         });
    // })

  }
}
