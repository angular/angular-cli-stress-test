/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module36RoutingModule } from './module-36-routing.module';
import { Module36CompComponent } from './components/module-36-comp/module-36-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module36RoutingModule
  ],
  declarations: [Module36CompComponent]
})
export class Module36Module { }
