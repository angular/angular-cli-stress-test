/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module93RoutingModule } from './module-93-routing.module';
import { Module93CompComponent } from './components/module-93-comp/module-93-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module93RoutingModule
  ],
  declarations: [Module93CompComponent]
})
export class Module93Module { }
