/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module22RoutingModule } from './module-22-routing.module';
import { Module22CompComponent } from './components/module-22-comp/module-22-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module22RoutingModule
  ],
  declarations: [Module22CompComponent]
})
export class Module22Module { }
