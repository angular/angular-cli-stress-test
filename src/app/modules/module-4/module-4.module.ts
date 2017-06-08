/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module4RoutingModule } from './module-4-routing.module';
import { Module4CompComponent } from './components/module-4-comp/module-4-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module4RoutingModule
  ],
  declarations: [Module4CompComponent]
})
export class Module4Module { }
