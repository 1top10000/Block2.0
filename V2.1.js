//Block2.0은 EntSave,StrongBlock, SpecialBlock, ExpressBlock을 참고해서 만들었습니다.
const Blockcolor = '#0079c0'; //블록색깔
const Blockcolor2 = '#003655'; //어두운 블록색깔

const blocks = [// 블록 만들기
    {
        name: 'text1',
        template: '%1',
        skeleton: 'basic_text',
        color: {
            default: EntryStatic.colorSet.common.TRANSPARENT,
            darken: EntryStatic.colorSet.common.TRANSPARENT
        },
        params: [{
            type: 'Text',
            text: '이 블록은 top10000이 만들었습니다!',
            color: EntryStatic.colorSet.common.TEXT,
            align: 'center'
        }],
        def: [],
        map: {},
        class: 'text'
    }, //text
    {
        name: 'calc_pow',
        template: '%1 ^ %2',
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
            const leftValue = script.getNumberValue("LEFTHAND", script);
            const rightValue = script.getNumberValue("RIGHTHAND", script);
            return Math.pow(leftValue, rightValue);
        }
    },
    {
        name: 'calc_rad',
        template: '%1 도를 라디안으로 변환',
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
            value: '229.183'
        },
        ],
        def: [],
        map: {
            d: 0,
        },
        class: "Block2.0",
        func: async (sprite, script) => {
            const g = script.getNumberValue("d", script);
            return Math.radians(g);
        }
    },
    {
        name: 'getsize',
        template: '나의 %1 크기',
        skeleton: "basic_string_field",
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
        ],
        def: [],
        map: {
            xy: 0,
        },
        class: "Block2.0",
        func: async (sprite, script) => {
            const xy = script.getNumberField("xy", script);
            if (xy == 0) {
                return sprite.getScaleX()
            }
            if (xy == 1) {
                return sprite.getScaleY()
            }
        }
    },
    {
        name: 'tu',
        template: '%1 글자 > 유니코드',
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
            value: '뀨'
        },
        ],
        def: [],
        map: {
            t: 0,
        },
        class: "Block2.0",
        func: async (sprite, script) => {
            const g = script.getValue("t", script);
            return g.charCodeAt(0).toString(16);
        }
    },
    {
        name: 'ut',
        template: '%1 유니코드 > 글자',
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
            value: 'AC00'
        },
        ],
        def: [],
        map: {
            t: 0,
        },
        class: "Block2.0",
        func: async (sprite, script) => {
            const g = script.getValue("t", script);
            return String.fromCharCode(parseInt(g, 16));
        }
    },
    {
        name: 'calc_deg',
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
            const g = script.getNumberValue("d", script);
            return Math.degrees(g);
        }
    },
    {
        name: 'B',
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
            V3: 2,
        },
        class: "Block2.0",
        func: async (sprite, script) => {
            const V1 = script.getNumberValue("V1", script);
            const V2 = script.getNumberValue("V2", script);
            const V3 = script.getNumberValue("V3", script);
            if (V1 <= 36 && V2 <= 36) {
                return parseInt(V3, V1).toString(V2);
            } else {
                return NaN
            }
        }
    },
    {
        name: 'calc_exp',
        template: '%1 exp',
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
            const Value = script.getNumberValue("V", script);
            return Math.exp(Value);
        }
    },
    {
        name: 'calc_pi',
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
        name: 'time',
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
        name: 'NaN',
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
        name: 'inf',
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
        name: 'alert',
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
        name: 'confirm',
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
        name: 'open',
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
            open(script.getValue('V', script));
            return script.callReturn();
        }
    },
    {
        name: 'setScaleXY',
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
                sprite.setScaleY(V1)
            }
            return script.callReturn();
        }
    },
    {
        name: 'Valuemove',
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
        name: 'Stoppause',
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
                Entry.engine.toggleStop()
            }
            if (V0 == 1) {
                Entry.engine.togglePause()
            }
            return script.callReturn();
        }
    },
    {
        name: 'copy',
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
        name: 'eval',
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
    },
    {
        name: 'textend',
        template: '%1',
        skeleton: 'basic_text',
        color: {
            default: EntryStatic.colorSet.common.TRANSPARENT,
            darken: EntryStatic.colorSet.common.TRANSPARENT
        },
        params: [{
            type: 'Text',
            text: 'top10000이 만든 블록 끝.',
            color: EntryStatic.colorSet.common.TEXT,
            align: 'center'
        }],
        def: [],
        map: {},
        class: 'text'
    }, //text
]

class _block_ {
    constructor(e) {
        this.name = e.name
        this.color = e.color || Blockcolor;
        this.fontColor = e.fontColor || "#FFFFFF"
        this.outerLine = e.outerLine || Blockcolor2;
        this.skeleton = e.skeleton
        this.statement = e.statement
        this.params = e.params
        this.events = e.events
        this.def = e.def
        this.paramsKeyMap = e.paramsKeyMap
        this.class = e.class
        this.func = e.func
        this.template = e.template
    }
}

function start (blocksJSON, Name) {
    let blockArray = new Array;
    for (let i in blocksJSON) {
        let block = blocksJSON[i];
        blockArray.push(block.name);
        Entry.block[block.name] = {
            color: block.color.default,
            fontColor: block.color.font, //?
            outerLine: block.color.darken,
            skeleton: block.skeleton,
            statement: [],
            params: block.params,
            events: {},
            def: {
                params: block.def,
                type: block.name
            },
            paramsKeyMap: block.map,
            class: block.class ? block.class : 'default',
            func: block.func,
            template: block.template
        };
    }
    if (typeof useWebGL == "undefined") {
        const fragment = document.createDocumentFragment();
        fragment.appendChild(Entry.playground.mainWorkspace.blockMenu._generateCategoryElement(Name, true)[0]);
        let cdd = Entry.playground.mainWorkspace.blockMenu._categoryCol[0].querySelectorAll(".entryCategoryElementWorkspace");
        Entry.playground.mainWorkspace.blockMenu._categoryCol[0].insertBefore(fragment, cdd[cdd.length - 1]);
        for (let i = 0; i < $('.entryCategoryElementWorkspace').length; i++) {
            if (!($($('.entryCategoryElementWorkspace')[i]).attr('id') == "entryCategorytext")) {
                $($('.entryCategoryElementWorkspace')[i]).attr('class', 'entryCategoryElementWorkspace');
            }
        }
        Entry.playground.blockMenu._categoryData = Entry.playground.blockMenu._categoryData.concat({"category": Name, blocks: blockArray});
        Entry.playground.blockMenu._generateCategoryCode(Name);
        const entryCategory = document.getElementById("entryCategoryBlock2.0");
        $('head').append(`<style>[id='entryCategory${Name}'] {background-image:url(https://raw.githack.com/1top10000/Block2.0/main/img/block2.0-img0.svg);background-repeat:no-repeat;margin-bottom:1px}.entrySelectedCategory[id='entryCategory${CSS.escape(Name)}'] {background-image:url(https://raw.githack.com/1top10000/Block2.0/main/img/block2.0-img1.svg);background-color:#00FF98; color:#000000}</style>`);
        entryCategory.append(Name);
    }
}
let blockPOST
alert('Block2.0을 설치합니다.');
try {
    start(blocks, 'Block2.0');
	} catch (exception) {} finally {}
const TempExportedProject = Entry.exportProject();
Entry.clearProject();
Entry.loadProject(TempExportedProject);
