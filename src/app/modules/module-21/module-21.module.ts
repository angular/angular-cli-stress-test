/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module21RoutingModule } from './module-21-routing.module';
import { Module21CompComponent } from './components/module-21-comp/module-21-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module21RoutingModule
  ],
  declarations: [Module21CompComponent]
})
export class Module21Module { }
