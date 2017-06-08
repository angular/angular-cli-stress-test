/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service751Service } from '../../services/service-751.service';

@Component({
  selector: 'app-comp-751',
  templateUrl: './comp-751.component.html',
  styleUrls: ['./comp-751.component.css']
})
export class Comp751Component implements OnInit {

  constructor(private _service: Service751Service) { }

  ngOnInit() {
  }

}
