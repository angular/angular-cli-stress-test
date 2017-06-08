/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service412Service } from '../../services/service-412.service';

@Component({
  selector: 'app-comp-412',
  templateUrl: './comp-412.component.html',
  styleUrls: ['./comp-412.component.css']
})
export class Comp412Component implements OnInit {

  constructor(private _service: Service412Service) { }

  ngOnInit() {
  }

}
