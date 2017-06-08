/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service380Service } from '../../services/service-380.service';

@Component({
  selector: 'app-comp-380',
  templateUrl: './comp-380.component.html',
  styleUrls: ['./comp-380.component.css']
})
export class Comp380Component implements OnInit {

  constructor(private _service: Service380Service) { }

  ngOnInit() {
  }

}
