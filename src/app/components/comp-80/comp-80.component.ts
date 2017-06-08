/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service80Service } from '../../services/service-80.service';

@Component({
  selector: 'app-comp-80',
  templateUrl: './comp-80.component.html',
  styleUrls: ['./comp-80.component.css']
})
export class Comp80Component implements OnInit {

  constructor(private _service: Service80Service) { }

  ngOnInit() {
  }

}
