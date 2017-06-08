/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service528Service } from '../../services/service-528.service';

@Component({
  selector: 'app-comp-528',
  templateUrl: './comp-528.component.html',
  styleUrls: ['./comp-528.component.css']
})
export class Comp528Component implements OnInit {

  constructor(private _service: Service528Service) { }

  ngOnInit() {
  }

}
