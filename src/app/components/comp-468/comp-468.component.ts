/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service468Service } from '../../services/service-468.service';

@Component({
  selector: 'app-comp-468',
  templateUrl: './comp-468.component.html',
  styleUrls: ['./comp-468.component.css']
})
export class Comp468Component implements OnInit {

  constructor(private _service: Service468Service) { }

  ngOnInit() {
  }

}
