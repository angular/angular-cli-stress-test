/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service868Service } from '../../services/service-868.service';

@Component({
  selector: 'app-comp-868',
  templateUrl: './comp-868.component.html',
  styleUrls: ['./comp-868.component.css']
})
export class Comp868Component implements OnInit {

  constructor(private _service: Service868Service) { }

  ngOnInit() {
  }

}
