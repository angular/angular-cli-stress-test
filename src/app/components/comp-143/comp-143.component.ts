/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service143Service } from '../../services/service-143.service';

@Component({
  selector: 'app-comp-143',
  templateUrl: './comp-143.component.html',
  styleUrls: ['./comp-143.component.css']
})
export class Comp143Component implements OnInit {

  constructor(private _service: Service143Service) { }

  ngOnInit() {
  }

}
