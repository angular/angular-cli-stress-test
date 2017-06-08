/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module63RoutingModule } from './module-63-routing.module';
import { Module63CompComponent } from './components/module-63-comp/module-63-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module63RoutingModule
  ],
  declarations: [Module63CompComponent]
})
export class Module63Module { }
