/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module47RoutingModule } from './module-47-routing.module';
import { Module47CompComponent } from './components/module-47-comp/module-47-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module47RoutingModule
  ],
  declarations: [Module47CompComponent]
})
export class Module47Module { }
