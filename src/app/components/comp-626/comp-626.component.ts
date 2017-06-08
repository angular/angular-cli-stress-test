/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service626Service } from '../../services/service-626.service';

@Component({
  selector: 'app-comp-626',
  templateUrl: './comp-626.component.html',
  styleUrls: ['./comp-626.component.css']
})
export class Comp626Component implements OnInit {

  constructor(private _service: Service626Service) { }

  ngOnInit() {
  }

}
