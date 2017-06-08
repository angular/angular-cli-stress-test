/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module70RoutingModule } from './module-70-routing.module';
import { Module70CompComponent } from './components/module-70-comp/module-70-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module70RoutingModule
  ],
  declarations: [Module70CompComponent]
})
export class Module70Module { }
