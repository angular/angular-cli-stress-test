/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module40RoutingModule } from './module-40-routing.module';
import { Module40CompComponent } from './components/module-40-comp/module-40-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module40RoutingModule
  ],
  declarations: [Module40CompComponent]
})
export class Module40Module { }
