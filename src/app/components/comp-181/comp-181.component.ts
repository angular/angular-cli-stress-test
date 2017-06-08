/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service181Service } from '../../services/service-181.service';

@Component({
  selector: 'app-comp-181',
  templateUrl: './comp-181.component.html',
  styleUrls: ['./comp-181.component.css']
})
export class Comp181Component implements OnInit {

  constructor(private _service: Service181Service) { }

  ngOnInit() {
  }

}
