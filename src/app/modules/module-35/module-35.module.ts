/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module35RoutingModule } from './module-35-routing.module';
import { Module35CompComponent } from './components/module-35-comp/module-35-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module35RoutingModule
  ],
  declarations: [Module35CompComponent]
})
export class Module35Module { }
