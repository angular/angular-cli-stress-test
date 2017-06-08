/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module81RoutingModule } from './module-81-routing.module';
import { Module81CompComponent } from './components/module-81-comp/module-81-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module81RoutingModule
  ],
  declarations: [Module81CompComponent]
})
export class Module81Module { }
