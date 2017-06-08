/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module58RoutingModule } from './module-58-routing.module';
import { Module58CompComponent } from './components/module-58-comp/module-58-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module58RoutingModule
  ],
  declarations: [Module58CompComponent]
})
export class Module58Module { }
