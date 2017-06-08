/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module82RoutingModule } from './module-82-routing.module';
import { Module82CompComponent } from './components/module-82-comp/module-82-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module82RoutingModule
  ],
  declarations: [Module82CompComponent]
})
export class Module82Module { }
