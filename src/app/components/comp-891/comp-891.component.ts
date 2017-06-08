/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service891Service } from '../../services/service-891.service';

@Component({
  selector: 'app-comp-891',
  templateUrl: './comp-891.component.html',
  styleUrls: ['./comp-891.component.css']
})
export class Comp891Component implements OnInit {

  constructor(private _service: Service891Service) { }

  ngOnInit() {
  }

}
