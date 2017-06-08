/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service695Service } from '../../services/service-695.service';

@Component({
  selector: 'app-comp-695',
  templateUrl: './comp-695.component.html',
  styleUrls: ['./comp-695.component.css']
})
export class Comp695Component implements OnInit {

  constructor(private _service: Service695Service) { }

  ngOnInit() {
  }

}
