import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {TodoTextInput} from "./todoTextInput.component";
import {EscapeDirective} from "./escape.directive";
import {FormsModule} from "@angular/forms";
import {AutofocusDirective} from "./autofocus.directive";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        TodoTextInput,
        EscapeDirective,
        AutofocusDirective
    ]
})
export class TodoTextInputModule {}
