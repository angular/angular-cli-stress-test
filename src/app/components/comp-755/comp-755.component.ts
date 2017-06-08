/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service755Service } from '../../services/service-755.service';

@Component({
  selector: 'app-comp-755',
  templateUrl: './comp-755.component.html',
  styleUrls: ['./comp-755.component.css']
})
export class Comp755Component implements OnInit {

  constructor(private _service: Service755Service) { }

  ngOnInit() {
  }

}
