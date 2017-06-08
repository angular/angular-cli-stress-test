/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module69RoutingModule } from './module-69-routing.module';
import { Module69CompComponent } from './components/module-69-comp/module-69-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module69RoutingModule
  ],
  declarations: [Module69CompComponent]
})
export class Module69Module { }
