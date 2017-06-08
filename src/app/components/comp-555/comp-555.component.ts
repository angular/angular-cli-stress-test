/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service555Service } from '../../services/service-555.service';

@Component({
  selector: 'app-comp-555',
  templateUrl: './comp-555.component.html',
  styleUrls: ['./comp-555.component.css']
})
export class Comp555Component implements OnInit {

  constructor(private _service: Service555Service) { }

  ngOnInit() {
  }

}
