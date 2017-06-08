/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service304Service } from '../../services/service-304.service';

@Component({
  selector: 'app-comp-304',
  templateUrl: './comp-304.component.html',
  styleUrls: ['./comp-304.component.css']
})
export class Comp304Component implements OnInit {

  constructor(private _service: Service304Service) { }

  ngOnInit() {
  }

}
