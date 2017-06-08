/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module77RoutingModule } from './module-77-routing.module';
import { Module77CompComponent } from './components/module-77-comp/module-77-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module77RoutingModule
  ],
  declarations: [Module77CompComponent]
})
export class Module77Module { }
