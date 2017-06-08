/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module7RoutingModule } from './module-7-routing.module';
import { Module7CompComponent } from './components/module-7-comp/module-7-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module7RoutingModule
  ],
  declarations: [Module7CompComponent]
})
export class Module7Module { }
