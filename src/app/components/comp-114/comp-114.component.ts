/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service114Service } from '../../services/service-114.service';

@Component({
  selector: 'app-comp-114',
  templateUrl: './comp-114.component.html',
  styleUrls: ['./comp-114.component.css']
})
export class Comp114Component implements OnInit {

  constructor(private _service: Service114Service) { }

  ngOnInit() {
  }

}
