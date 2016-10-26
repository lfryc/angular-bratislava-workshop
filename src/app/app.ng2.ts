import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {TodoTextInputModule} from "./components/todoTextInput/todoTextInput.ng2";

@NgModule({
    imports: [
        BrowserModule,
        TodoTextInputModule
    ],
})
export class AppModule {}
