/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module21CompComponent } from './components/module-21-comp/module-21-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module21CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module21RoutingModule { }
