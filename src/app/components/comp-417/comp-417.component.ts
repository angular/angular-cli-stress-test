/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service417Service } from '../../services/service-417.service';

@Component({
  selector: 'app-comp-417',
  templateUrl: './comp-417.component.html',
  styleUrls: ['./comp-417.component.css']
})
export class Comp417Component implements OnInit {

  constructor(private _service: Service417Service) { }

  ngOnInit() {
  }

}
