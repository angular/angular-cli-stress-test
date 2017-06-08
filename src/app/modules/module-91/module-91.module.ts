/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module91RoutingModule } from './module-91-routing.module';
import { Module91CompComponent } from './components/module-91-comp/module-91-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module91RoutingModule
  ],
  declarations: [Module91CompComponent]
})
export class Module91Module { }
