/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service474Service } from '../../services/service-474.service';

@Component({
  selector: 'app-comp-474',
  templateUrl: './comp-474.component.html',
  styleUrls: ['./comp-474.component.css']
})
export class Comp474Component implements OnInit {

  constructor(private _service: Service474Service) { }

  ngOnInit() {
  }

}
