/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module34RoutingModule } from './module-34-routing.module';
import { Module34CompComponent } from './components/module-34-comp/module-34-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module34RoutingModule
  ],
  declarations: [Module34CompComponent]
})
export class Module34Module { }
