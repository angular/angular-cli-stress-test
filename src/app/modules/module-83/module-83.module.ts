/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module83RoutingModule } from './module-83-routing.module';
import { Module83CompComponent } from './components/module-83-comp/module-83-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module83RoutingModule
  ],
  declarations: [Module83CompComponent]
})
export class Module83Module { }
