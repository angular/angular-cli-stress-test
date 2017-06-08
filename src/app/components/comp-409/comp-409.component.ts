/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service409Service } from '../../services/service-409.service';

@Component({
  selector: 'app-comp-409',
  templateUrl: './comp-409.component.html',
  styleUrls: ['./comp-409.component.css']
})
export class Comp409Component implements OnInit {

  constructor(private _service: Service409Service) { }

  ngOnInit() {
  }

}
