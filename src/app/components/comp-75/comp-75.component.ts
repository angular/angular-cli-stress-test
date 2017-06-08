/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service75Service } from '../../services/service-75.service';

@Component({
  selector: 'app-comp-75',
  templateUrl: './comp-75.component.html',
  styleUrls: ['./comp-75.component.css']
})
export class Comp75Component implements OnInit {

  constructor(private _service: Service75Service) { }

  ngOnInit() {
  }

}
