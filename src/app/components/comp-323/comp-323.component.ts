/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service323Service } from '../../services/service-323.service';

@Component({
  selector: 'app-comp-323',
  templateUrl: './comp-323.component.html',
  styleUrls: ['./comp-323.component.css']
})
export class Comp323Component implements OnInit {

  constructor(private _service: Service323Service) { }

  ngOnInit() {
  }

}
