/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service803Service } from '../../services/service-803.service';

@Component({
  selector: 'app-comp-803',
  templateUrl: './comp-803.component.html',
  styleUrls: ['./comp-803.component.css']
})
export class Comp803Component implements OnInit {

  constructor(private _service: Service803Service) { }

  ngOnInit() {
  }

}
