/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service958Service } from '../../services/service-958.service';

@Component({
  selector: 'app-comp-958',
  templateUrl: './comp-958.component.html',
  styleUrls: ['./comp-958.component.css']
})
export class Comp958Component implements OnInit {

  constructor(private _service: Service958Service) { }

  ngOnInit() {
  }

}
