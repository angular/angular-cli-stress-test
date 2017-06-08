/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service822Service } from '../../services/service-822.service';

@Component({
  selector: 'app-comp-822',
  templateUrl: './comp-822.component.html',
  styleUrls: ['./comp-822.component.css']
})
export class Comp822Component implements OnInit {

  constructor(private _service: Service822Service) { }

  ngOnInit() {
  }

}
