/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service407Service } from '../../services/service-407.service';

@Component({
  selector: 'app-comp-407',
  templateUrl: './comp-407.component.html',
  styleUrls: ['./comp-407.component.css']
})
export class Comp407Component implements OnInit {

  constructor(private _service: Service407Service) { }

  ngOnInit() {
  }

}
