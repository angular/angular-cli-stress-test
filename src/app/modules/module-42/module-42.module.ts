/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module42RoutingModule } from './module-42-routing.module';
import { Module42CompComponent } from './components/module-42-comp/module-42-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module42RoutingModule
  ],
  declarations: [Module42CompComponent]
})
export class Module42Module { }
