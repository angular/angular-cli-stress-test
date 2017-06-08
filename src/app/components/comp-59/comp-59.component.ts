/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service59Service } from '../../services/service-59.service';

@Component({
  selector: 'app-comp-59',
  templateUrl: './comp-59.component.html',
  styleUrls: ['./comp-59.component.css']
})
export class Comp59Component implements OnInit {

  constructor(private _service: Service59Service) { }

  ngOnInit() {
  }

}
