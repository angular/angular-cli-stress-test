/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module99RoutingModule } from './module-99-routing.module';
import { Module99CompComponent } from './components/module-99-comp/module-99-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module99RoutingModule
  ],
  declarations: [Module99CompComponent]
})
export class Module99Module { }
