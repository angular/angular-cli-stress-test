/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service536Service } from '../../services/service-536.service';

@Component({
  selector: 'app-comp-536',
  templateUrl: './comp-536.component.html',
  styleUrls: ['./comp-536.component.css']
})
export class Comp536Component implements OnInit {

  constructor(private _service: Service536Service) { }

  ngOnInit() {
  }

}
