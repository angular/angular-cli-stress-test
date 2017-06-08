/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service516Service } from '../../services/service-516.service';

@Component({
  selector: 'app-comp-516',
  templateUrl: './comp-516.component.html',
  styleUrls: ['./comp-516.component.css']
})
export class Comp516Component implements OnInit {

  constructor(private _service: Service516Service) { }

  ngOnInit() {
  }

}
