/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service284Service } from '../../services/service-284.service';

@Component({
  selector: 'app-comp-284',
  templateUrl: './comp-284.component.html',
  styleUrls: ['./comp-284.component.css']
})
export class Comp284Component implements OnInit {

  constructor(private _service: Service284Service) { }

  ngOnInit() {
  }

}
