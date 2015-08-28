declare module 'ts-npm-module/js/deep/deeper/bar' {
	export class Bar {
	}

}
declare module 'ts-npm-module/js/deep/foo' {
	export var foo: number;

}
declare module 'ts-npm-module/js/index' {
	export * from 'ts-npm-module/js/deep/foo';
	export * from 'ts-npm-module/js/deep/deeper/bar';
	export var bas: string;

}
declare module 'ts-npm-module' {
	import main = require('ts-npm-module/js/index');
	export = main;
}
