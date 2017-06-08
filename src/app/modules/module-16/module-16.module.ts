/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module16RoutingModule } from './module-16-routing.module';
import { Module16CompComponent } from './components/module-16-comp/module-16-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module16RoutingModule
  ],
  declarations: [Module16CompComponent]
})
export class Module16Module { }
