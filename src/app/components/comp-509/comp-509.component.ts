/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service509Service } from '../../services/service-509.service';

@Component({
  selector: 'app-comp-509',
  templateUrl: './comp-509.component.html',
  styleUrls: ['./comp-509.component.css']
})
export class Comp509Component implements OnInit {

  constructor(private _service: Service509Service) { }

  ngOnInit() {
  }

}
