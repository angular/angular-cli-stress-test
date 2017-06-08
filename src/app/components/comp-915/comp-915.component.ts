/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service915Service } from '../../services/service-915.service';

@Component({
  selector: 'app-comp-915',
  templateUrl: './comp-915.component.html',
  styleUrls: ['./comp-915.component.css']
})
export class Comp915Component implements OnInit {

  constructor(private _service: Service915Service) { }

  ngOnInit() {
  }

}
