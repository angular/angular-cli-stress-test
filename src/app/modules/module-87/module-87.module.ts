/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module87RoutingModule } from './module-87-routing.module';
import { Module87CompComponent } from './components/module-87-comp/module-87-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module87RoutingModule
  ],
  declarations: [Module87CompComponent]
})
export class Module87Module { }
