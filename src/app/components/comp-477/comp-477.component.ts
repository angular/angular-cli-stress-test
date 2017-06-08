/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service477Service } from '../../services/service-477.service';

@Component({
  selector: 'app-comp-477',
  templateUrl: './comp-477.component.html',
  styleUrls: ['./comp-477.component.css']
})
export class Comp477Component implements OnInit {

  constructor(private _service: Service477Service) { }

  ngOnInit() {
  }

}
