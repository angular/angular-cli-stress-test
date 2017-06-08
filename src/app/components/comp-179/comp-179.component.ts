/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service179Service } from '../../services/service-179.service';

@Component({
  selector: 'app-comp-179',
  templateUrl: './comp-179.component.html',
  styleUrls: ['./comp-179.component.css']
})
export class Comp179Component implements OnInit {

  constructor(private _service: Service179Service) { }

  ngOnInit() {
  }

}
