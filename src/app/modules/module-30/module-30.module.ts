/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module30RoutingModule } from './module-30-routing.module';
import { Module30CompComponent } from './components/module-30-comp/module-30-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module30RoutingModule
  ],
  declarations: [Module30CompComponent]
})
export class Module30Module { }
