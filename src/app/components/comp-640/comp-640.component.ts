/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service640Service } from '../../services/service-640.service';

@Component({
  selector: 'app-comp-640',
  templateUrl: './comp-640.component.html',
  styleUrls: ['./comp-640.component.css']
})
export class Comp640Component implements OnInit {

  constructor(private _service: Service640Service) { }

  ngOnInit() {
  }

}
