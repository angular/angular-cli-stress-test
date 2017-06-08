/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service275Service } from '../../services/service-275.service';

@Component({
  selector: 'app-comp-275',
  templateUrl: './comp-275.component.html',
  styleUrls: ['./comp-275.component.css']
})
export class Comp275Component implements OnInit {

  constructor(private _service: Service275Service) { }

  ngOnInit() {
  }

}
