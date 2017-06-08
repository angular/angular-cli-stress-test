/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module50RoutingModule } from './module-50-routing.module';
import { Module50CompComponent } from './components/module-50-comp/module-50-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module50RoutingModule
  ],
  declarations: [Module50CompComponent]
})
export class Module50Module { }
