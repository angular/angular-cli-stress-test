/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module65RoutingModule } from './module-65-routing.module';
import { Module65CompComponent } from './components/module-65-comp/module-65-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module65RoutingModule
  ],
  declarations: [Module65CompComponent]
})
export class Module65Module { }
