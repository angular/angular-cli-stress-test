/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module52RoutingModule } from './module-52-routing.module';
import { Module52CompComponent } from './components/module-52-comp/module-52-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module52RoutingModule
  ],
  declarations: [Module52CompComponent]
})
export class Module52Module { }
