/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service405Service } from '../../services/service-405.service';

@Component({
  selector: 'app-comp-405',
  templateUrl: './comp-405.component.html',
  styleUrls: ['./comp-405.component.css']
})
export class Comp405Component implements OnInit {

  constructor(private _service: Service405Service) { }

  ngOnInit() {
  }

}
