/**
 * Created by user on 2017-06-29.
 */

export const SpriteDefs = {
    "character":[
        {x:0,y:0,w:40,h:40,origin:{x:20,y:20}},
        {x:40,y:0,w:40,h:40,origin:{x:20,y:20}},
        {x:0,y:40,w:40,h:39,origin:{x:30,y:20}},
        {x:40,y:40,w:40,h:39,origin:{x:30,y:20}},
        {x:80,y:40,w:40,h:39,origin:{x:30,y:20}},
        {x:0,y:80,w:40,h:41,origin:{x:30,y:20}},
        {x:40,y:80,w:40,h:41,origin:{x:30,y:20}},
        {x:80,y:80,w:40,h:41,origin:{x:30,y:20}},
        {x:0,y:122,w:40,h:41,origin:{x:30,y:20}},
        {x:40,y:122,w:40,h:40,origin:{x:30,y:20}},
        {x:80,y:122,w:40,h:40,origin:{x:30,y:20}},
        {x:0, y:186,w:40,h:59,origin:{x:20,y:39}},
        {x:40, y:186,w:40,h:59,origin:{x:20,y:39}},
        {x:80, y:186,w:40,h:59,origin:{x:20,y:39}},
        {x:340, y:0, w:18,h:12,origin:{x:9,y:6}},
        {x:200,y:260,w:50,h:50,origin:{x:25,y:25}},
        {x:250,y:260,w:50,h:50,origin:{x:25,y:25}},
        {x:300,y:260,w:50,h:50,origin:{x:25,y:25}},
        {x:350,y:260,w:50,h:50,origin:{x:25,y:25}}
    ]
};

export const AnimationDefs:{
    [key:string]: {
        [key:string]: {
            frame:number,
            duration:number
        }[]
    }
} = {
    "character":{
        "spin":[{frame:0,duration:0.05}, {frame:1,duration:0.05}],
        "forward":[{frame:2,duration:0.08}, {frame:3,duration:0.08},{frame:4,duration:0.08},{frame:3,duration:0.08}],
        "nutral":[{frame:5,duration:0.05},{frame:6,duration:0.05},{frame:7,duration:0.05},{frame:6,duration:0.05}],
        "backward":[{frame:8,duration:0.05},{frame:9,duration:0.05},{frame:10,duration:0.05},{frame:9,duration:0.05}],
        "fall":[{frame:11,duration:0.05},{frame:12,duration:0.05},{frame:13,duration:0.05},{frame:12,duration:0.05}],
        "sword":[{frame:14,duration:1}],
        "magnet_field":[{frame:15,duration:0.05},{frame:16,duration:0.05},{frame:17,duration:0.05},{frame:18,duration:0.05}]
    }
};