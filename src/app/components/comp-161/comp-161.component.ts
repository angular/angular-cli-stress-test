/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service161Service } from '../../services/service-161.service';

@Component({
  selector: 'app-comp-161',
  templateUrl: './comp-161.component.html',
  styleUrls: ['./comp-161.component.css']
})
export class Comp161Component implements OnInit {

  constructor(private _service: Service161Service) { }

  ngOnInit() {
  }

}
