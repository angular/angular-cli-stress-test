/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module53RoutingModule } from './module-53-routing.module';
import { Module53CompComponent } from './components/module-53-comp/module-53-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module53RoutingModule
  ],
  declarations: [Module53CompComponent]
})
export class Module53Module { }
