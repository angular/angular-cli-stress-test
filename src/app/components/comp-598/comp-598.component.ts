/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service598Service } from '../../services/service-598.service';

@Component({
  selector: 'app-comp-598',
  templateUrl: './comp-598.component.html',
  styleUrls: ['./comp-598.component.css']
})
export class Comp598Component implements OnInit {

  constructor(private _service: Service598Service) { }

  ngOnInit() {
  }

}
