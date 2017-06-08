/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service352Service } from '../../services/service-352.service';

@Component({
  selector: 'app-comp-352',
  templateUrl: './comp-352.component.html',
  styleUrls: ['./comp-352.component.css']
})
export class Comp352Component implements OnInit {

  constructor(private _service: Service352Service) { }

  ngOnInit() {
  }

}
