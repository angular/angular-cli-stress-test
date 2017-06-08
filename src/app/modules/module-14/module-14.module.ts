/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module14RoutingModule } from './module-14-routing.module';
import { Module14CompComponent } from './components/module-14-comp/module-14-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module14RoutingModule
  ],
  declarations: [Module14CompComponent]
})
export class Module14Module { }
