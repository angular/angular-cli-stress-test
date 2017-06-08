/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service544Service } from '../../services/service-544.service';

@Component({
  selector: 'app-comp-544',
  templateUrl: './comp-544.component.html',
  styleUrls: ['./comp-544.component.css']
})
export class Comp544Component implements OnInit {

  constructor(private _service: Service544Service) { }

  ngOnInit() {
  }

}
