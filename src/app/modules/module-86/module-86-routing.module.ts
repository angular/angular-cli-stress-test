/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module86CompComponent } from './components/module-86-comp/module-86-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module86CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module86RoutingModule { }
