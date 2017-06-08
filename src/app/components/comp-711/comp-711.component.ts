/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service711Service } from '../../services/service-711.service';

@Component({
  selector: 'app-comp-711',
  templateUrl: './comp-711.component.html',
  styleUrls: ['./comp-711.component.css']
})
export class Comp711Component implements OnInit {

  constructor(private _service: Service711Service) { }

  ngOnInit() {
  }

}
