/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module72RoutingModule } from './module-72-routing.module';
import { Module72CompComponent } from './components/module-72-comp/module-72-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module72RoutingModule
  ],
  declarations: [Module72CompComponent]
})
export class Module72Module { }
