/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service621Service } from '../../services/service-621.service';

@Component({
  selector: 'app-comp-621',
  templateUrl: './comp-621.component.html',
  styleUrls: ['./comp-621.component.css']
})
export class Comp621Component implements OnInit {

  constructor(private _service: Service621Service) { }

  ngOnInit() {
  }

}
