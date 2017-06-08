/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service733Service } from '../../services/service-733.service';

@Component({
  selector: 'app-comp-733',
  templateUrl: './comp-733.component.html',
  styleUrls: ['./comp-733.component.css']
})
export class Comp733Component implements OnInit {

  constructor(private _service: Service733Service) { }

  ngOnInit() {
  }

}
