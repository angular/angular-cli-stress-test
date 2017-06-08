/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service573Service } from '../../services/service-573.service';

@Component({
  selector: 'app-comp-573',
  templateUrl: './comp-573.component.html',
  styleUrls: ['./comp-573.component.css']
})
export class Comp573Component implements OnInit {

  constructor(private _service: Service573Service) { }

  ngOnInit() {
  }

}
