/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service487Service } from '../../services/service-487.service';

@Component({
  selector: 'app-comp-487',
  templateUrl: './comp-487.component.html',
  styleUrls: ['./comp-487.component.css']
})
export class Comp487Component implements OnInit {

  constructor(private _service: Service487Service) { }

  ngOnInit() {
  }

}
