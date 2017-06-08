/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service624Service } from '../../services/service-624.service';

@Component({
  selector: 'app-comp-624',
  templateUrl: './comp-624.component.html',
  styleUrls: ['./comp-624.component.css']
})
export class Comp624Component implements OnInit {

  constructor(private _service: Service624Service) { }

  ngOnInit() {
  }

}
