/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service945Service } from '../../services/service-945.service';

@Component({
  selector: 'app-comp-945',
  templateUrl: './comp-945.component.html',
  styleUrls: ['./comp-945.component.css']
})
export class Comp945Component implements OnInit {

  constructor(private _service: Service945Service) { }

  ngOnInit() {
  }

}
