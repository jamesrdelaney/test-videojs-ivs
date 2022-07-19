This works but I had to edit 

/node_modules/amazon-ivs-player/index.d.ts

with

export declare interface CaptureEventMap {
    [CaptureEventType.CAPTURE_ENABLED]: "CaptureEnabled";
    [CaptureEventType.CAPTURE_BUNDLE]: "CaptureBundle";
    [CaptureEventType.CAPTURE_ANALYTICS]: "CaptureAnalytics";
    [CaptureEventType.FMP4_SEGMENT]: "FMP4Segment";
}


OR

Add this to the compiler options for tsconfig.json"
    "skipLibCheck": true,
