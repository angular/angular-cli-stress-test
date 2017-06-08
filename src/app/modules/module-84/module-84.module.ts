/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module84RoutingModule } from './module-84-routing.module';
import { Module84CompComponent } from './components/module-84-comp/module-84-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module84RoutingModule
  ],
  declarations: [Module84CompComponent]
})
export class Module84Module { }
