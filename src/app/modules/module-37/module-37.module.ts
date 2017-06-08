/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module37RoutingModule } from './module-37-routing.module';
import { Module37CompComponent } from './components/module-37-comp/module-37-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module37RoutingModule
  ],
  declarations: [Module37CompComponent]
})
export class Module37Module { }
