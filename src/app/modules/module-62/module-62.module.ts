/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module62RoutingModule } from './module-62-routing.module';
import { Module62CompComponent } from './components/module-62-comp/module-62-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module62RoutingModule
  ],
  declarations: [Module62CompComponent]
})
export class Module62Module { }
