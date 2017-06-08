/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module41RoutingModule } from './module-41-routing.module';
import { Module41CompComponent } from './components/module-41-comp/module-41-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module41RoutingModule
  ],
  declarations: [Module41CompComponent]
})
export class Module41Module { }
