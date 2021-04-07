// This file is copied from: https://github.com/angular/components/blob/master/src/cdk/text-field/autosize.ts
// It is made by the Angular Material Team and his contributors. Thanks to them all for this awesome work!

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {Directive, Input} from '@angular/core';

/**
 * Directive to automatically resize a textarea to fit its content.
 */
@Directive({
    selector: 'textarea[mark6-textarea-autosize]',
    exportAs: 'mark6TextareaAutosize',
    inputs: ['mark6AutosizeMinRows', 'mark6AutosizeMaxRows'],
    host: {
        'class': 'mark6-textarea-autosize',
        // Textarea elements that have the directive applied should have a single row by default.
        // Browsers normally show two rows by default and therefore this limits the minRows binding.
        'rows': '1',
    },
})
export class Mark6TextareaAutosizeDirective extends CdkTextareaAutosize {
    @Input('mark6AutosizeMinRows')
    get matAutosizeMinRows(): number { return this.minRows; }
    set matAutosizeMinRows(value: number) { this.minRows = value; }

    @Input('mark6AutosizeMaxRows')
    get matAutosizeMaxRows(): number { return this.maxRows; }
    set matAutosizeMaxRows(value: number) { this.maxRows = value; }

    @Input('mark6-textarea-autosize')
    get matAutosize(): boolean { return this.enabled; }
    set matAutosize(value: boolean) { this.enabled = value; }

    @Input()
    get matTextareaAutosize(): boolean { return this.enabled; }
    set matTextareaAutosize(value: boolean) { this.enabled = value; }
}
