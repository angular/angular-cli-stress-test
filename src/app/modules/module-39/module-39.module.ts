/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module39RoutingModule } from './module-39-routing.module';
import { Module39CompComponent } from './components/module-39-comp/module-39-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module39RoutingModule
  ],
  declarations: [Module39CompComponent]
})
export class Module39Module { }
