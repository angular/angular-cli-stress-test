/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service934Service } from '../../services/service-934.service';

@Component({
  selector: 'app-comp-934',
  templateUrl: './comp-934.component.html',
  styleUrls: ['./comp-934.component.css']
})
export class Comp934Component implements OnInit {

  constructor(private _service: Service934Service) { }

  ngOnInit() {
  }

}
