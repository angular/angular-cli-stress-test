/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service876Service } from '../../services/service-876.service';

@Component({
  selector: 'app-comp-876',
  templateUrl: './comp-876.component.html',
  styleUrls: ['./comp-876.component.css']
})
export class Comp876Component implements OnInit {

  constructor(private _service: Service876Service) { }

  ngOnInit() {
  }

}
