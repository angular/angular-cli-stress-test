/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service432Service } from '../../services/service-432.service';

@Component({
  selector: 'app-comp-432',
  templateUrl: './comp-432.component.html',
  styleUrls: ['./comp-432.component.css']
})
export class Comp432Component implements OnInit {

  constructor(private _service: Service432Service) { }

  ngOnInit() {
  }

}
