/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service347Service } from '../../services/service-347.service';

@Component({
  selector: 'app-comp-347',
  templateUrl: './comp-347.component.html',
  styleUrls: ['./comp-347.component.css']
})
export class Comp347Component implements OnInit {

  constructor(private _service: Service347Service) { }

  ngOnInit() {
  }

}
