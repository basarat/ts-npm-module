
declare module "ts-npm-module/js/deep/deeper/bar"{
    import tmp = require('js/deep/deeper/bar');
    export = tmp;
}

declare module "ts-npm-module/js/deep/foo"{
    import tmp = require('js/deep/foo');
    export = tmp;
}

declare module "ts-npm-module/js/index"{
    import tmp = require('js/index');
    export = tmp;
}

declare module "ts-npm-module"{
    import tmp = require('js/index');
    export = tmp;
}