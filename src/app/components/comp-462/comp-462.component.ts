/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service462Service } from '../../services/service-462.service';

@Component({
  selector: 'app-comp-462',
  templateUrl: './comp-462.component.html',
  styleUrls: ['./comp-462.component.css']
})
export class Comp462Component implements OnInit {

  constructor(private _service: Service462Service) { }

  ngOnInit() {
  }

}
