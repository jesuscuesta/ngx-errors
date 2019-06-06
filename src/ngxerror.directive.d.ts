import { DoCheck, OnDestroy, OnInit } from '@angular/core';
import { ErrorOptions } from './ngxerrors';
import { NgxErrorsDirective } from './ngxerrors.directive';
export declare class NgxErrorDirective implements OnInit, OnDestroy, DoCheck {
    private ngxErrors;
    ngxError: ErrorOptions;
    when: ErrorOptions;
    hidden: boolean;
    private rules;
    private errorNames;
    private subscription;
    private _states$;
    private states$;
    constructor(ngxErrors: NgxErrorsDirective);
    ngOnInit(): void;
    ngDoCheck(): void;
    ngOnDestroy(): void;
}
