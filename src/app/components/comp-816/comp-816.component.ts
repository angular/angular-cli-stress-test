/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service816Service } from '../../services/service-816.service';

@Component({
  selector: 'app-comp-816',
  templateUrl: './comp-816.component.html',
  styleUrls: ['./comp-816.component.css']
})
export class Comp816Component implements OnInit {

  constructor(private _service: Service816Service) { }

  ngOnInit() {
  }

}
