/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service166Service } from '../../services/service-166.service';

@Component({
  selector: 'app-comp-166',
  templateUrl: './comp-166.component.html',
  styleUrls: ['./comp-166.component.css']
})
export class Comp166Component implements OnInit {

  constructor(private _service: Service166Service) { }

  ngOnInit() {
  }

}
