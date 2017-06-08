/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service569Service } from '../../services/service-569.service';

@Component({
  selector: 'app-comp-569',
  templateUrl: './comp-569.component.html',
  styleUrls: ['./comp-569.component.css']
})
export class Comp569Component implements OnInit {

  constructor(private _service: Service569Service) { }

  ngOnInit() {
  }

}
