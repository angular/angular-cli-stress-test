/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module75RoutingModule } from './module-75-routing.module';
import { Module75CompComponent } from './components/module-75-comp/module-75-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module75RoutingModule
  ],
  declarations: [Module75CompComponent]
})
export class Module75Module { }
