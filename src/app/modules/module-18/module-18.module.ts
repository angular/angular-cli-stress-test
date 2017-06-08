/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module18RoutingModule } from './module-18-routing.module';
import { Module18CompComponent } from './components/module-18-comp/module-18-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module18RoutingModule
  ],
  declarations: [Module18CompComponent]
})
export class Module18Module { }
