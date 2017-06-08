/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service191Service } from '../../services/service-191.service';

@Component({
  selector: 'app-comp-191',
  templateUrl: './comp-191.component.html',
  styleUrls: ['./comp-191.component.css']
})
export class Comp191Component implements OnInit {

  constructor(private _service: Service191Service) { }

  ngOnInit() {
  }

}
