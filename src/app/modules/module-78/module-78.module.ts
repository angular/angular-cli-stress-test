/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module78RoutingModule } from './module-78-routing.module';
import { Module78CompComponent } from './components/module-78-comp/module-78-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module78RoutingModule
  ],
  declarations: [Module78CompComponent]
})
export class Module78Module { }
