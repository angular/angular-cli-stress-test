/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../../services/service-1.service';

@Component({
  selector: 'app-comp-1',
  templateUrl: './comp-1.component.html',
  styleUrls: ['./comp-1.component.css']
})
export class Comp1Component implements OnInit {

  constructor(private _service: Service1Service) { }

  ngOnInit() {
  }

}
