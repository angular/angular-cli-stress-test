/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module29RoutingModule } from './module-29-routing.module';
import { Module29CompComponent } from './components/module-29-comp/module-29-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module29RoutingModule
  ],
  declarations: [Module29CompComponent]
})
export class Module29Module { }
