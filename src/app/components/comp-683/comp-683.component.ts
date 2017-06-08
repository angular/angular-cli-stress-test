/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service683Service } from '../../services/service-683.service';

@Component({
  selector: 'app-comp-683',
  templateUrl: './comp-683.component.html',
  styleUrls: ['./comp-683.component.css']
})
export class Comp683Component implements OnInit {

  constructor(private _service: Service683Service) { }

  ngOnInit() {
  }

}
