return {
    block: () => {
        return [
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
                func: async (sprite, script) => {
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
                func: async (sprite, script) => {
                    return Math.radians(script.getNumberValue("d", script));
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
                func: async (sprite, script) => {
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
                func: async (sprite, script) => {
                    const g = script.getValue("t", script);
                    const v = Number(script.getValue("v", script));
                    if (v != NaN) {
                        return g.codePointat(0).toString(v);
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
                func: async (sprite, script) => {
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
                func: async (sprite, script) => {
                    return Math.degrees(script.getNumberValue("d", script));
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
                func: async (sprite, script) => {
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
                func: async (sprite, script) => {
                    return Math.exp(script.getNumberValue("V", script));
                }
            },
            {
                name: 'block2.0_pi',
                template: '파이값',
                skeleton: "basic_string_field",
                color: {
                    default: Blockcolor,
                    //RGB 색깔
                    darken: Blockcolor2,
                    //RGB 색깔
                },
                params: [],
                def: [],
                map: {},
                class: "Block2.0",
                func: async (sprite, script) => {
                    return Math.PI;
                }
            },
            {
                name: 'block2.0_time',
                template: '지금 시간',
                skeleton: "basic_string_field",
                color: {
                    default: Blockcolor,
                    //RGB 색깔
                    darken: Blockcolor2,
                    //RGB 색깔
                },
                params: [],
                def: [],
                map: {},
                class: "Block2.0",
                func: async (sprite, script) => {
                    return Math.floor(new Date().getTime() / 1000.0);
                }
            },
            {
                name: 'block2.0_NaN',
                template: 'NaN',
                skeleton: "basic_string_field",
                color: {
                    default: Blockcolor,
                    //RGB 색깔
                    darken: Blockcolor2,
                    //RGB 색깔
                },
                params: [],
                def: [],
                map: {},
                class: "Block2.0",
                func: async (sprite, script) => {
                    return NaN;
                }
            },
            {
                name: 'block2.0_inf',
                template: '무한',
                skeleton: "basic_string_field",
                color: {
                    default: Blockcolor,
                    //RGB 색깔
                    darken: Blockcolor2,
                    //RGB 색깔
                },
                params: [],
                def: [],
                map: {},
                class: "Block2.0",
                func: async (sprite, script) => {
                    return Infinity;
                }
            },
            {
                name:"block2.0_csonse",
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
                func: async (sprite, script) => {
                    let v = script.getValue("v", script);
                    if (v==="0") {
                        return Math.floor(new Date().getTime() / 1000.0);
                    } else if (v==="1") {
                        return Math.PI;
                    } else if (v==="2") {
                        return Math.E;
                    } else if (v==="3") {
                        return NaN;
                    } else if (v==="4") {
                        return null;
                    } else if (v==="5") {
                        return undefined;
                    } else if (v==="6") {
                        return new Date().getTime();
                    } else if (v==="7") {
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
                func: async (sprite, script) => {
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
                func: async (sprite, script) => {
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
                func: async (sprite, script) => {
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
                func: async (sprite, script) => {
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
                func: async (sprite, script) => {
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
                func: async (sprite, script) => {
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
                func: async (sprite, script) => {
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
                func: async (sprite, script) => {
                    eval(script.getValue('V', script));
                    return script.callReturn();
                }
            }
        ]
    },
    ver: "2.1.0",
    f: (ygh) => {
        //calc_pow > block2.0_calc_pow
        //calc_rad > block2.0_calc_rad
        //tu > block2.0_guc
        //ut > block2.0_cgup
        //B > block2.0_B
        //calc_pi > block2.0_pi
        //pi, NaN, inf, time > block2.0_csonse
        //setScaleXY > block2.0_XY
        //Valuemove > block2.0_ValueXY0
        //block2.0_guc (%1) > (%1, %2=16)
        //block2.0_cgup (%1) > (%2=16, %1)
        //
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