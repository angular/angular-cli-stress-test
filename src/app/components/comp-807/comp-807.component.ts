/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service807Service } from '../../services/service-807.service';

@Component({
  selector: 'app-comp-807',
  templateUrl: './comp-807.component.html',
  styleUrls: ['./comp-807.component.css']
})
export class Comp807Component implements OnInit {

  constructor(private _service: Service807Service) { }

  ngOnInit() {
  }

}
