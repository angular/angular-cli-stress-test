/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module66RoutingModule } from './module-66-routing.module';
import { Module66CompComponent } from './components/module-66-comp/module-66-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module66RoutingModule
  ],
  declarations: [Module66CompComponent]
})
export class Module66Module { }
