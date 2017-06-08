/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service841Service } from '../../services/service-841.service';

@Component({
  selector: 'app-comp-841',
  templateUrl: './comp-841.component.html',
  styleUrls: ['./comp-841.component.css']
})
export class Comp841Component implements OnInit {

  constructor(private _service: Service841Service) { }

  ngOnInit() {
  }

}
