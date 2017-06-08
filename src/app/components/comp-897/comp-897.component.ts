/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service897Service } from '../../services/service-897.service';

@Component({
  selector: 'app-comp-897',
  templateUrl: './comp-897.component.html',
  styleUrls: ['./comp-897.component.css']
})
export class Comp897Component implements OnInit {

  constructor(private _service: Service897Service) { }

  ngOnInit() {
  }

}
