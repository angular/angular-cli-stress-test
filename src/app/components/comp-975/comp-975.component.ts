/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service975Service } from '../../services/service-975.service';

@Component({
  selector: 'app-comp-975',
  templateUrl: './comp-975.component.html',
  styleUrls: ['./comp-975.component.css']
})
export class Comp975Component implements OnInit {

  constructor(private _service: Service975Service) { }

  ngOnInit() {
  }

}
