/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service646Service } from '../../services/service-646.service';

@Component({
  selector: 'app-comp-646',
  templateUrl: './comp-646.component.html',
  styleUrls: ['./comp-646.component.css']
})
export class Comp646Component implements OnInit {

  constructor(private _service: Service646Service) { }

  ngOnInit() {
  }

}
