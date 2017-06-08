/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module67RoutingModule } from './module-67-routing.module';
import { Module67CompComponent } from './components/module-67-comp/module-67-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module67RoutingModule
  ],
  declarations: [Module67CompComponent]
})
export class Module67Module { }
