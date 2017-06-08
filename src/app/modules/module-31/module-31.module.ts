/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module31RoutingModule } from './module-31-routing.module';
import { Module31CompComponent } from './components/module-31-comp/module-31-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module31RoutingModule
  ],
  declarations: [Module31CompComponent]
})
export class Module31Module { }
