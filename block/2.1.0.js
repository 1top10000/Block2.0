return {
    block: () => {
        const Blockcolor = '#0079c0'; //블록색깔
        const Blockcolor2 = '#003655'; //어두운 블록색깔
        return [ //skeleton:text사용금지
            {
                name: 'block2.0_calc_pow',
                template: '%1 ^ %2',
                skeleton: "basic_string_field",
                color: {
                    default: Blockcolor,
                    darken: Blockcolor2
                },
                params: [{
                    type: 'Block',
                    accept: 'string',
                    value: '10'
                },
                {
                    type: 'Block',
                    accept: 'string',
                    value: '3'
                },
                ],
                def: [],
                map: {
                    LEFTHAND: 0,
                    RIGHTHAND: 1,
                },
                class: "Block2.0",
                func: (sprite, script) => {
                    return Math.pow(script.getNumberValue("LEFTHAND", script), script.getNumberValue("RIGHTHAND", script));
                }
            },
            {
                name: 'block2.0_calc_rad',
                template: '%1 도를 라디안으로 변환',
                skeleton: "basic_string_field",
                color: {
                    default: Blockcolor,
                    darken: Blockcolor2
                },
                params: [{
                    type: 'Block',
                    accept: 'string',
                    value: '229.183'
                },
                ],
                def: [],
                map: {
                    d: 0,
                },
                class: "Block2.0",
                func: (sprite, script) => {
                    return script.getNumberValue("d", script) / 57.29577951308232;
                }
            },
            {
                name: 'block2.0_getsize',
                template: '나의 %1 크기',
                skeleton: "basic_string_field",
                color: {
                    default: Blockcolor,
                    darken: Blockcolor2
                },
                params: [
                    {
                        type: "Dropdown",
                        options: [
                            ["X", "0"],
                            ["Y", "1"]
                        ],
                        fontSize: 11,
                        arrowColor: "#FFFFFF",
                        value: '0'
                    }
                ],
                def: [],
                map: {
                    xy: 0,
                },
                class: "Block2.0",
                func: (sprite, script) => {
                    const xy = script.getNumberField("xy", script);
                    if (xy == 0) {
                        return sprite.getScaleX();
                    }
                    if (xy == 1) {
                        return sprite.getScaleY();
                    }
                }
            },
            {
                name: 'block2.0_guc',
                template: '%1를 유니코드로 변환해서%2진수로 반환',
                skeleton: "basic_string_field",
                color: {
                    default: Blockcolor,
                    darken: Blockcolor2
                },
                params: [
                    {
                        type: 'Block',
                        accept: 'string',
                        value: 'A'
                    },
                    {
                        type: "Block",
                        accept: 'string',
                        value: '16'
                    }
                ],
                def: [],
                map: {
                    t: 0,
                    v: 1
                },
                class: "Block2.0",
                func: (sprite, script) => {
                    const g = script.getValue("t", script);
                    const v = Number(script.getValue("v", script));
                    if (v != NaN) {
                        return g.codePointAt(0).toString(v);
                    } else {
                        return null;
                    }
                }
            },
            {
                name: 'block2.0_cgup',
                template: '%1진수인%2를 입력으로 받아서 유니코드를 글자로 변환하기',
                skeleton: "basic_string_field",
                color: {
                    default: Blockcolor,
                    //RGB 색깔
                    darken: Blockcolor2,
                    //RGB 색깔
                },
                params: [
                    {
                        type: 'Block',
                        accept: 'string',
                        value: '16'
                    },
                    {
                        type: 'Block',
                        accept: 'string',
                        value: 'AC00'
                    },
                ],
                def: [],
                map: {
                    t: 0,
                    v: 1
                },
                class: "Block2.0",
                func: (sprite, script) => {
                    const g = Number(script.getValue("t", script));
                    if (g == NaN) {
                        return null;
                    } else {
                        return String.fromCodePoint(parseInt(script.getValue("v", script), g));
                    }
                }
            },
            {
                name: 'block2.0_calc_deg',
                template: '%1 라디안을 도로 변환',
                skeleton: "basic_string_field",
                color: {
                    default: Blockcolor,
                    //RGB 색깔
                    darken: Blockcolor2,
                    //RGB 색깔
                },
                params: [{
                    type: 'Block',
                    accept: 'string',
                    value: '4'
                },
                ],
                def: [],
                map: {
                    d: 0,
                },
                class: "Block2.0",
                func: (sprite, script) => {
                    return script.getNumberValue("d", script) * 57.29577951308232;
                }
            },
            {
                name: 'block2.0_B',
                template: '%1진수를 %2진수로 변환 (변환할 수:%3)',
                skeleton: "basic_string_field",
                color: {
                    default: Blockcolor,
                    //RGB 색깔
                    darken: Blockcolor2,
                    //RGB 색깔
                },
                params: [{
                    type: 'Block',
                    accept: 'string',
                    value: '10'
                },
                {
                    type: 'Block',
                    accept: 'string',
                    value: '16'

                },
                {
                    type: 'Block',
                    accept: 'string',
                    value: '485'
                },
                ],
                def: [],
                map: {
                    V1: 0,
                    V2: 1,
                    V3: 2
                },
                class: "Block2.0",
                func: (sprite, script) => {
                    const V1 = script.getNumberValue("V1", script);
                    const V2 = script.getNumberValue("V2", script);
                    const V3 = script.getNumberValue("V3", script);
                    if (V1 <= 36 && V2 <= 36) {
                        return parseInt(V3, V1).toString(V2);
                    } else {
                        return null;
                    }
                }
            },
            {
                name: 'block2.0_calc_exp',
                template: 'exp(%1)',
                skeleton: "basic_string_field",
                color: {
                    default: Blockcolor,
                    //RGB 색깔
                    darken: Blockcolor2,
                    //RGB 색깔
                },
                params: [{
                    type: 'Block',
                    accept: 'string',
                    value: '4'
                },
                ],
                def: [],
                map: {
                    V: 0,
                },
                class: "Block2.0",
                func: (sprite, script) => {
                    return Math.exp(script.getNumberValue("V", script));
                }
            },
            {
                name: "block2.0_csonse",
                template: '%1',
                skeleton: "basic_string_field",
                color: {
                    default: Blockcolor,
                    darken: Blockcolor2
                },
                params: [
                    {
                        type: "Dropdown",
                        options: [
                            ["지금 시간", "0"],
                            ["pi", "1"],
                            ["e", "2"],
                            ["NaN", "3"],
                            ["null", "4"],
                            ["undefined", "5"],
                            ["지금 시간(ms)", "6"],
                            ["무한", "7"]
                        ],
                        fontSize: 11,
                        arrowColor: "#FFFFFF",
                        value: '0',
                    }
                ],
                def: [],
                map: {
                    v: 0
                },
                class: "Block2.0",
                func: (sprite, script) => {
                    let v = script.getValue("v", script);
                    if (v === "0") {
                        return Math.floor(new Date().getTime() / 1000.0);
                    } else if (v === "1") {
                        return Math.PI;
                    } else if (v === "2") {
                        return Math.E;
                    } else if (v === "3") {
                        return NaN;
                    } else if (v === "4") {
                        return null;
                    } else if (v === "5") {
                        return undefined;
                    } else if (v === "6") {
                        return new Date().getTime();
                    } else if (v === "7") {
                        return Infinity;
                    } else {
                        return null;
                    }
                }
            },
            {
                name: 'block2.0_alert',
                template: '%1 라고 대화창 만들기%2',
                skeleton: "basic",
                color: {
                    default: Blockcolor,
                    //RGB 색깔
                    darken: Blockcolor2,
                    //RGB 색깔
                },
                params: [{
                    type: 'Block',
                    accept: 'string',
                    value: '뭐',
                },
                {
                    type: 'Indicator',
                    img: 'block_icon/hardware_icon.svg',
                    size: 11,
                },
                ],
                def: [],
                map: {
                    V: 0,
                },
                class: "Block2.0",
                func: (sprite, script) => {
                    alert(script.getValue("V", script));
                    return script.callReturn();
                }
            },
            {
                name: 'block2.0_confirm',
                template: '%1 라고 질문하기',
                skeleton: "basic_boolean_field",
                color: {
                    default: Blockcolor,
                    //RGB 색깔
                    darken: Blockcolor2,
                    //RGB 색깔
                },
                params: [{
                    type: 'Block',
                    accept: 'string',
                    value: '뭐',
                },
                ],
                def: [],
                map: {
                    V: 0,
                },
                class: "Block2.0",
                func: (sprite, script) => {
                    const value = script.getValue("V", script);
                    return confirm(value);
                }
            },
            {
                name: 'block2.0_open',
                template: '%1 사이트 열기%2',
                skeleton: "basic",
                color: {
                    default: Blockcolor,
                    //RGB 색깔
                    darken: Blockcolor2,
                    //RGB 색깔
                },
                params: [{
                    type: 'Block',
                    accept: 'string',
                    value: 'https://github.com/1top10000/Block2.0/',
                },
                {
                    type: 'Indicator',
                    img: 'block_icon/hardware_icon.svg',
                    size: 11,
                }],
                def: [],
                map: {
                    V: 0
                },
                class: "Block2.0",
                func: (sprite, script) => {
                    const urll = URL.parse(script.getValue('V', script));
                    if (urll.href.toLowerCase().search("javascript") === -1) {
                        window.open(urll.href);
                    }
                    return script.callReturn();
                }
            },
            {
                name: 'block2.0_XY',
                template: '나의 %1 크기를 %2 으로 정하기%3',
                skeleton: "basic",
                color: {
                    default: Blockcolor,
                    //RGB 색깔
                    darken: Blockcolor2,
                    //RGB 색깔
                },
                params: [
                    {
                        type: "Dropdown",
                        options: [
                            ["X", "0"],
                            ["Y", "1"]
                        ],
                        fontSize: 11,
                        arrowColor: "#FFFFFF",
                        value: '0',
                    },
                    {
                        type: 'Block',
                        accept: 'string',
                        value: '10',
                    },
                    {
                        type: 'Indicator',
                        img: 'block_icon/hardware_icon.svg',
                        size: 11,
                    }],
                def: [],
                map: {
                    V0: 0,
                    V1: 1
                },
                class: "Block2.0",
                func: (sprite, script) => {
                    const V0 = script.getNumberField("V0", script);
                    const V1 = script.getNumberValue("V1", script);
                    if (V0 == 0) {
                        sprite.setScaleX(V1)
                    }
                    if (V0 == 1) {
                        sprite.setScaleY(V1);
                    }
                    return script.callReturn();
                }
            },
            {
                name: 'block2.0_ValueXY0',
                template: '%1 변수를 X: %2 Y: %3 위치로 이동하기 %4',
                skeleton: "basic",
                color: {
                    default: Blockcolor,
                    //RGB 색깔
                    darken: Blockcolor2,
                    //RGB 색깔
                },
                params: [
                    {
                        type: "Dropdown",
                        options: [
                            ["대답", "0"],
                            ["초시계", "1"]
                        ],
                        fontSize: 11,
                        arrowColor: "#FFFFFF",
                        value: '0',
                    },
                    {
                        type: 'Block',
                        accept: 'string',
                        value: '0',
                    },
                    {
                        type: 'Block',
                        accept: 'string',
                        value: '0',
                    },
                    {
                        type: 'Indicator',
                        img: 'block_icon/hardware_icon.svg',
                        size: 11,
                    }
                ],
                def: [],
                map: {
                    V1: 0,
                    V2: 1,
                    V3: 2,
                },
                class: "Block2.0",
                func: (sprite, script) => {
                    const V0 = script.getNumberField("V1", script);
                    const V1 = script.getNumberValue("V2", script);
                    const V2 = script.getNumberValue("V3", script);
                    if (V0 == 0) {
                        Entry.container.inputValue.setX(V1);
                        Entry.container.inputValue.setY(V2);
                    }
                    if (V0 == 1) {
                        Entry.engine.projectTimer.setX(V1);
                        Entry.engine.projectTimer.setY(V2);
                    }
                    return script.callReturn();
                }
            },
            {
                name: 'block2.0_Stoppause',
                template: '작품을 %1 하기 %2',
                skeleton: "basic",
                color: {
                    default: Blockcolor,
                    //RGB 색깔
                    darken: Blockcolor2,
                    //RGB 색깔
                },
                params: [
                    {
                        type: "Dropdown",
                        options: [
                            ["정지", "0"],
                            ["일시정지", "1"]
                        ],
                        fontSize: 11,
                        arrowColor: "#FFFFFF",
                        value: '0',
                    },
                    {
                        type: 'Indicator',
                        img: 'block_icon/hardware_icon.svg',
                        size: 11,
                    }
                ],
                def: [],
                map: {
                    V1: 0,
                },
                class: "Block2.0",
                func: (sprite, script) => {
                    const V0 = script.getNumberField("V1", script);
                    if (V0 == 0) {
                        Entry.engine.toggleStop();
                    }
                    if (V0 == 1) {
                        Entry.engine.togglePause()
                    }
                    return script.callReturn();
                }
            },
            {
                name: 'block2.0_copy',
                template: '%1 복사하기%2',
                skeleton: "basic",
                color: {
                    default: Blockcolor,
                    //RGB 색깔
                    darken: Blockcolor2,
                    //RGB 색깔
                },
                params: [{
                    type: 'Block',
                    accept: 'string',
                    value: '안녕',
                },
                {
                    type: 'Indicator',
                    img: 'block_icon/hardware_icon.svg',
                    size: 11,
                }],
                def: [],
                map: {
                    V: 0
                },
                class: "Block2.0",
                func: (sprite, script) => {
                    var dummy = document.createElement("textarea");
                    document.body.appendChild(dummy);
                    dummy.value = script.getValue('V', script);
                    dummy.select();
                    try {
                        document.execCommand("copy");
                    }
                    catch {
                        alert('복사하기를 지원하지 않습니다.');
                    }
                    finally {
                        document.body.removeChild(dummy);
                    }
                    return script.callReturn();
                }
            },
            {
                name: 'block2.0_eval',
                template: '%1명령어 실행하기%2',
                skeleton: "basic",
                color: {
                    default: Blockcolor,
                    //RGB 색깔
                    darken: Blockcolor2,
                    //RGB 색깔
                },
                params: [{
                    type: 'Block',
                    accept: 'string',
                    value: 'alert("안녕!")',
                },
                {
                    type: 'Indicator',
                    img: 'block_icon/hardware_icon.svg',
                    size: 11,
                }],
                def: [],
                map: {
                    V: 0
                },
                class: "Block2.0",
                func: (sprite, script) => {
                    eval(script.getValue('V', script));
                    return script.callReturn();
                }
            }
        ]
    },
    ver: "2.1.0",
    f: (ygh) => {
        console.log("2.0에서 2.1.0으로 작품 버전 올리기 시작함");
        function a0_0xbe3b(_0x15d4ca,_0x48a8f5){_0x15d4ca=_0x15d4ca-(-0x606*-0x3+-0x16*-0xb2+0x7f*-0x41);const _0x1118b0=a0_0x31fe();let _0x434c6c=_0x1118b0[_0x15d4ca
        ];if(a0_0xbe3b['cbJpBk']===undefined){var _0x463a50=function(_0x5a4c7e){const _0x444a56='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='
        ;let _0x1b61c8='',_0x40c042='';for(let _0x2902cd=-0x1ae7+0x6a4+-0x1443*-0x1,_0x37fe67,_0x4a6f07,_0x3a7e75=-0x55*0xb+-0x52f+0x8d6;_0x4a6f07=_0x5a4c7e['charAt'](
        _0x3a7e75++);~_0x4a6f07&&(_0x37fe67=_0x2902cd%(-0x5a+-0xbf1+0x1*0xc4f)?_0x37fe67*(-0x233a*-0x1+0x5d0+-0x1*0x28ca)+_0x4a6f07:_0x4a6f07,_0x2902cd++%(-0xe*-0x26e
        +0x1769*-0x1+-0xa97))?_0x1b61c8+=String['fromCharCode'](0x154b*-0x1+0x2f0*-0xa+0x11*0x30a&_0x37fe67>>(-(0x2*0x338+-0x1afa+0x148c)*_0x2902cd&0x111*0x2+0x1886+-0x1aa2)
        ):0xaa4+0x2*-0x9e9+-0x19*-0x5e){_0x4a6f07=_0x444a56['indexOf'](_0x4a6f07);}for(let _0x1c8d96=0x1*-0x1ae1+0x16c0+-0x421*-0x1,_0x582031=_0x1b61c8['length'];
        _0x1c8d96<_0x582031;_0x1c8d96++){_0x40c042+='%'+('00'+_0x1b61c8['charCodeAt'](_0x1c8d96)['toString'](0xe6d*-0x2+0x5*-0x4b9+-0x77*-0x71))['slice'
        ](-(0xf3b*-0x1+0x198a+-0xa4d));}return decodeURIComponent(_0x40c042);};a0_0xbe3b['dZWWaK']=_0x463a50,a0_0xbe3b['oTbfQB']={},a0_0xbe3b['cbJpBk']=!![];}const
        _0x6cf91c=_0x1118b0[-0x210a*0x1+0x7d7+-0x1*-0x1933],_0x567dbb=_0x15d4ca+_0x6cf91c,_0x32ca07=a0_0xbe3b['oTbfQB'][_0x567dbb];return!_0x32ca07?(_0x434c6c=a0_0xbe3b[
        'dZWWaK'](_0x434c6c),a0_0xbe3b['oTbfQB'][_0x567dbb]=_0x434c6c):_0x434c6c=_0x32ca07,_0x434c6c;}(function(_0x4721ba,_0x40b340){const _0x264fa6=a0_0xbe3b,_0x248748
        =_0x4721ba();while(!![]){try{const _0x15fedc=-parseInt(_0x264fa6(0x12e))/(0x106+0x2011+-0xe*0x25d)*(parseInt(_0x264fa6(0x12f))/(-0x109*-0xe+0x6f*0x53+-0x3279)
        )+parseInt(_0x264fa6(0x127))/(0x2fb*0x1+-0x2c9+-0x2f)+parseInt(_0x264fa6(0x129))/(0x55*0x67+0x2*-0x10a3+-0x1*0xe9)*(-parseInt(_0x264fa6(0x12d))/(-0x13*-0xd3+-0xb24+
        0x1*-0x480))+-parseInt(_0x264fa6(0x12c))/(-0xb15*-0x3+-0x200e+-0x12b*0x1)+-parseInt(_0x264fa6(0x122))/(0x153a+-0x1310+0x223*-0x1)+parseInt(_0x264fa6(0x125))/(
        0x2515*-0x1+-0x12b3*-0x1+0x126a)*(parseInt(_0x264fa6(0x11f))/(-0xb*-0x15+-0x13c*0x1+0x5e*0x1))+-parseInt(_0x264fa6(0x120))/(-0x2*0x120b+0x1959+-0x1f*-0x59)*(
        -parseInt(_0x264fa6(0x12a))/(0x239f+-0x599*-0x5+-0x3f91*0x1));if(_0x15fedc===_0x40b340)break;else _0x248748['push'](_0x248748['shift']());}catch(_0x31e39b){
        _0x248748['push'](_0x248748['shift']());}}}(a0_0x31fe,0x7*0x14e9d+-0x40314*0x3+-0xd*-0x13ec1));function a0_0x31fe(){const _0x39929a=['B2jQzwn0','nZjRyNLQyui','AxnbCNjHEq'
        ,'ndiXndu1BgzYsvHm','ChvZAa','mty4EeDxz1Hv','otLKBfLvBKW','Cg9W','nJiZmJe4ogDIB2jsCW','mtKWnJK1BurMyvLw','otiXn2TMBezRta','mZeYwxjYyxHJ','DhLWzq','BgvUz3rO',
        'C3rHDgvTzw50CW','mtqYmte5ALzvtfbp','ntC1mJa0mfbkugzzzq','67cy67o1ioYiMoQWGcdRP47SNyW','mZu2ntG1nKHAz0nNzG','CgfYyw1Z'];a0_0x31fe=function(){return _0x39929a;
        };return a0_0x31fe();}function*enpshid(_0x37ae96,_0x23928c,_0x5ba86f=-0xb0c3*0x1+-0x79f3+0x18576){const _0x4a8bfb=a0_0xbe3b;let _0x5e004b=0x20a2+-0x1926+-0x77c
        ;function _0x1f201e(_0x13c16a){const _0xcd51b5=a0_0xbe3b;return typeof _0x13c16a===_0xcd51b5(0x124)&&_0x15d7f1!==null&&!Array[_0xcd51b5(0x126)](_0x13c16a)&&
        _0x13c16a[_0xcd51b5(0x123)]&&_0x13c16a['statements']&&_0x13c16a[_0xcd51b5(0x130)]&&_0x13c16a['id'];}let _0x472a6b=!![],_0x37c40e=![],_0x565097=[],_0x149399=[],
        _0xacdd64=[],_0x15d7f1=_0x37ae96;if(_0x15d7f1[_0x4a8bfb(0x131)]===-0xbf1+0x3*-0xb35+0x8*0x5b2)return[undefined,0x2511+-0x1*0x2592+-0x2b*-0x3];try{_0xb38cb8:while(
        !![]){_0x5e004b>_0x5ba86f&&(yield[_0x4a8bfb(0x121),_0x5e004b],_0x5e004b=0xfa3*0x1+-0xee3+-0xc0);if(typeof _0x15d7f1===_0x4a8bfb(0x124)&&_0x15d7f1!==null
        &&!_0x37c40e){if(_0x472a6b){let _0x12267f=_0x1f201e(_0x15d7f1);_0x12267f&&_0x23928c(_0x15d7f1);if(Array[_0x4a8bfb(0x126)](_0x15d7f1)){_0x472a6b=![];if(_0x15d7f1
        ['length']===0x178*-0x14+0x1bb5*0x1+0x1*0x1ab){_0x37c40e=!![];continue;}_0x149399['push'](_0x15d7f1['length']-(-0x1*0x1afa+0x2150+0x655*-0x1)),_0x565097[_0x4a8bfb(0x128)]
        (0x1a71+0x2478+-0xc95*0x5),_0x15d7f1=_0x15d7f1[0x471*-0x6+0x24c2+-0xa1c],_0xacdd64[_0x4a8bfb(0x128)](-0x1*-0x16c0+-0x1001*-0x2+-0x36c2);}else{_0x472a6b=![];
        if(!_0x12267f){_0x37c40e=!![];continue;}_0x149399['push']('statements'),_0x565097[_0x4a8bfb(0x128)](_0x4a8bfb(0x123)),_0x15d7f1=_0x15d7f1[_0x4a8bfb(0x123)]
        ,_0xacdd64[_0x4a8bfb(0x128)]('params');}}else{if(_0x565097['at'](-(0x5d*-0x41+0x103*0x6+0x118c))===_0x4a8bfb(0x123))_0x565097[_0x565097[_0x4a8bfb(0x131)]-(0xf3b
        *-0x1+0x198a+-0xa4e)]=_0x4a8bfb(0x132);else{if(typeof _0x565097['at'](-(-0x210a*0x1+0x7d7+-0x4*-0x64d))==='number')_0x565097[_0x565097['length']-(-0x152f+0x36*0x61
        +0xba)]++;else throw new Error('이상한\x20오류남');}_0x15d7f1=_0x15d7f1[_0x565097['at'](-(0x3*0xa99+0x28a+-0x2*0x112a))],_0xacdd64[_0x4a8bfb(0x128)](_0x565097['at']
        (-(-0x1a*-0x43+-0x5*-0x462+-0x1cb7)));}_0x472a6b=Array['isArray'](_0x15d7f1)||_0x1f201e(_0x15d7f1);}else{_0x37c40e=![];if(_0x149399[_0x4a8bfb(0x131)]!==0x2332+
        0x23af+-0xe2d*0x5&&_0x565097['at'](-(0x1961*0x1+0x1a5a+-0x3*0x113e))===_0x149399['at'](-(0x7af*-0x5+-0x5be+0x2*0x1615))){let _0x5e87ef=-0x124*0x9+0xe*-0x2ae+-0x8*-
        0x5f9;while(_0x565097['at'](-(-0x16f4+0x3*0xca9+0x281*-0x6))===_0x149399['at'](-(0x97f+-0x1390*-0x1+-0x1*0x1d0e))){_0x5e87ef++,_0x149399['pop'](),_0x565097['pop'
        ](),_0xacdd64[_0x4a8bfb(0x12b)]();if(_0x149399[_0x4a8bfb(0x131)]===-0x1*0xda5+0xac*-0x1f+0x2279)break _0xb38cb8;}_0x15d7f1=_0x37ae96;for(let _0x139a42=-0x1ec*
        0x5+-0x213*0x1+-0x3*-0x3e5;_0x139a42<_0xacdd64[_0x4a8bfb(0x131)]-_0x5e87ef;_0x139a42++){_0x15d7f1=_0x15d7f1[_0xacdd64[_0x139a42]];}}_0x15d7f1=_0x37ae96;for(let
        _0x13557b=-0xe15*0x1+-0x24ec+0x3301;_0x13557b<_0xacdd64['length']-(-0x604+-0x15b8+0x1bbd);_0x13557b++){_0x15d7f1=_0x15d7f1[_0xacdd64[_0x13557b]];}_0xacdd64[
        _0x4a8bfb(0x12b)]();}_0x5e004b++;}}catch(_0x39cb78){return[_0x39cb78,_0x5e004b];}return[void(-0x25cf+0x1b7*-0x1+-0x13c3*-0x2),_0x5e004b];}
        const aols = (i) => {
            console.log("처리중인 블록:" + i.type);
            switch (i.type) {
                case "calc_pow":
                    i.type = "block2.0_calc_pow";
                    break;
                case "calc_rad":
                    i.type = "block2.0_calc_rad";
                    break;
                case "getsize":
                    i.type = "block2.0_getsize";
                    break;
                case "tu":
                    i.type = "block2.0_guc";
                    i.params[1] = "16";
                    break;
                case "ut":
                    i.type = "block2.0_cgup";
                    i.params[1] = i.params[0];
                    i.params[0] = "16";
                    break;
                case "B":
                    i.type = "block2.0_B";
                    break;
                case "calc_pi":
                    i.type = "block2.0_csonse";
                    i.params[0] = "1";
                    break;
                case "time":
                    i.type = "block2.0_csonse";
                    i.params[0] = "0";
                    break;
                case "NaN":
                    i.type = "block2.0_csonse";
                    i.params[0] = "3";
                    break;
                case "inf":
                    i.type = "block2.0_csonse";
                    i.params[0] = "7";
                    break;
                case "alert":
                    i.type = "block2.0_alert";
                    break;
                case "confirm":
                    i.type = "block2.0_confirm";
                    break;
                case "open":
                    i.type = "block2.0_open";
                    break;
                case "setScaleXY":
                    i.type = "block2.0_XY";
                    break;
                case "Valuemove":
                    i.type = "block2.0_ValueXY0";
                    break;
                case "Stoppause":
                    i.type = "block2.0_Stoppause";
                    break;
                case "copy":
                    i.type = "block2.0_copy";
                    break;
                case "eval":
                    i.type = "block2.0_eval";
                    break;
                case "calc_deg":
                    i.type = "block2.0_calc_deg";
                    break
                case "calc_exp":
                    i.type = "block2.0_calc_exp";
                    break
            }
        };
        for (let oibj in ygh.objects) {
            let scr = JSON.parse(ygh.objects[oibj].script);
            let enp = enpshid(scr, aols);
            let sh = true;
            let nud = 0;
            while (sh) {
                let id = enp.next();
                sh = !id.done;
                nud = id.value[1] + nud;
                if (id.value[0] === "반복 수가 많음") {
                    if (!confirm(ygh.objects[oibj].name + "작업중... 내부 코드 실행에서 반복 수가 많음. 약" + nud + "번 반복했습니다. 더 하나요?")) {
                        alert("취소함");
                        throw new Error("취소함");
                    }
                } else if (id.value[0]) {
                    alert(id.value[0]);
                    throw new Error(id.value[0]);
                }
            }
            console.log(nud);
            ygh.objects[oibj].script = JSON.stringify(scr);
        }
        for (let sci in ygh.functions) {
            let scr = JSON.parse(ygh.functions[sci]);
            let enp = enpshid(scr, aols);
            let sh = true;
            let nud = 0;
            while (sh) {
                let id = enp.next();
                sh = !id.done;
                nud = id.value[1] + nud;
                if (id.value[0] === "반복 수가 많음") {
                    if (!confirm("함수 작업중... 내부 코드 실행에서 반복 수가 많음. 약" + nud + "번 반복했습니다. 더 하나요?")) {
                        alert("취소함");
                        throw new Error("취소함");
                    }
                } else if (id.value[0]) {
                    alert(id.value[0]);
                    throw new Error(id.value[0]);
                }
            }
            console.log(nud);
            ygh.functions[sci] = JSON.stringify(scr);
        }
    },
    obst: [
        [
            ["block2.0_calc_pow", "Math.pow"],
            ["block2.0_calc_rad", "라디안 변환"],
            ["block2.0_getsize", "xy크기"],
            ["block2.0_guc", "유니코드 변환"],
            ["block2.0_cgup", "유니코드를 글자로 변환"],
            ["block2.0_calc_deg", "도 변환"],
            ["block2.0_B", "진법 변환"],
            ["block2.0_calc_exp", "지수함수"],
            ["block2.0_csonse", "값"] //암호화 추가
        ],
        [
            ["block2.0_XY", "크기 조절"],
            ["block2.0_ValueXY0", "변수 위치 변경"],
            ["block2.0_Stoppause", "정지와 일시정지"] //변수V2.0
        ],
        [
            ["block2.0_alert", "alert"],
            ["block2.0_confirm", "confirm"] //토스트 추가
        ],
        [
            ["block2.0_open", "새 창 열기"],
            ["block2.0_copy", "복사하기"],
            ["block2.0_eval", "명령어실행"]
        ]
    ]
};