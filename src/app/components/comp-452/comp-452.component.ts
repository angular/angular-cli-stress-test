/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service452Service } from '../../services/service-452.service';

@Component({
  selector: 'app-comp-452',
  templateUrl: './comp-452.component.html',
  styleUrls: ['./comp-452.component.css']
})
export class Comp452Component implements OnInit {

  constructor(private _service: Service452Service) { }

  ngOnInit() {
  }

}
