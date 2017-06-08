/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service378Service } from '../../services/service-378.service';

@Component({
  selector: 'app-comp-378',
  templateUrl: './comp-378.component.html',
  styleUrls: ['./comp-378.component.css']
})
export class Comp378Component implements OnInit {

  constructor(private _service: Service378Service) { }

  ngOnInit() {
  }

}
