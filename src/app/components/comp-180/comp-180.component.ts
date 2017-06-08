/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service180Service } from '../../services/service-180.service';

@Component({
  selector: 'app-comp-180',
  templateUrl: './comp-180.component.html',
  styleUrls: ['./comp-180.component.css']
})
export class Comp180Component implements OnInit {

  constructor(private _service: Service180Service) { }

  ngOnInit() {
  }

}
