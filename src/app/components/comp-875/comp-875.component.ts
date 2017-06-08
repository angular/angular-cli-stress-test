/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service875Service } from '../../services/service-875.service';

@Component({
  selector: 'app-comp-875',
  templateUrl: './comp-875.component.html',
  styleUrls: ['./comp-875.component.css']
})
export class Comp875Component implements OnInit {

  constructor(private _service: Service875Service) { }

  ngOnInit() {
  }

}
