/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module46RoutingModule } from './module-46-routing.module';
import { Module46CompComponent } from './components/module-46-comp/module-46-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module46RoutingModule
  ],
  declarations: [Module46CompComponent]
})
export class Module46Module { }
