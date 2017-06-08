/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service57Service } from '../../services/service-57.service';

@Component({
  selector: 'app-comp-57',
  templateUrl: './comp-57.component.html',
  styleUrls: ['./comp-57.component.css']
})
export class Comp57Component implements OnInit {

  constructor(private _service: Service57Service) { }

  ngOnInit() {
  }

}
