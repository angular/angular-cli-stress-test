/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service677Service } from '../../services/service-677.service';

@Component({
  selector: 'app-comp-677',
  templateUrl: './comp-677.component.html',
  styleUrls: ['./comp-677.component.css']
})
export class Comp677Component implements OnInit {

  constructor(private _service: Service677Service) { }

  ngOnInit() {
  }

}
