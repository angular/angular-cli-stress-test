/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module60RoutingModule } from './module-60-routing.module';
import { Module60CompComponent } from './components/module-60-comp/module-60-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module60RoutingModule
  ],
  declarations: [Module60CompComponent]
})
export class Module60Module { }
