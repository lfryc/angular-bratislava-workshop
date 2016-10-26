///<reference path="../../node_modules/@types/angular/index.d.ts" />

import {UpgradeAdapter} from "@angular/upgrade";
import {AppModule} from "./app.ng2";

export let angular: angular.IAngularStatic = window['angular'];
export let upgradeAdapter = new UpgradeAdapter(AppModule);

window.addEventListener('load', () => {
    upgradeAdapter.bootstrap(document.documentElement, ['app'])
}, false);
