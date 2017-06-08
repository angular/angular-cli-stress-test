/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service838Service } from '../../services/service-838.service';

@Component({
  selector: 'app-comp-838',
  templateUrl: './comp-838.component.html',
  styleUrls: ['./comp-838.component.css']
})
export class Comp838Component implements OnInit {

  constructor(private _service: Service838Service) { }

  ngOnInit() {
  }

}
