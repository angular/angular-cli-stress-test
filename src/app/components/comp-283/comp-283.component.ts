/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service283Service } from '../../services/service-283.service';

@Component({
  selector: 'app-comp-283',
  templateUrl: './comp-283.component.html',
  styleUrls: ['./comp-283.component.css']
})
export class Comp283Component implements OnInit {

  constructor(private _service: Service283Service) { }

  ngOnInit() {
  }

}
