/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service633Service } from '../../services/service-633.service';

@Component({
  selector: 'app-comp-633',
  templateUrl: './comp-633.component.html',
  styleUrls: ['./comp-633.component.css']
})
export class Comp633Component implements OnInit {

  constructor(private _service: Service633Service) { }

  ngOnInit() {
  }

}
