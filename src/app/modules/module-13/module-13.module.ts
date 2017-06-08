/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module13RoutingModule } from './module-13-routing.module';
import { Module13CompComponent } from './components/module-13-comp/module-13-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module13RoutingModule
  ],
  declarations: [Module13CompComponent]
})
export class Module13Module { }
