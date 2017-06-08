/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service120Service } from '../../services/service-120.service';

@Component({
  selector: 'app-comp-120',
  templateUrl: './comp-120.component.html',
  styleUrls: ['./comp-120.component.css']
})
export class Comp120Component implements OnInit {

  constructor(private _service: Service120Service) { }

  ngOnInit() {
  }

}
