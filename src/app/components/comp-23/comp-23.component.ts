/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service23Service } from '../../services/service-23.service';

@Component({
  selector: 'app-comp-23',
  templateUrl: './comp-23.component.html',
  styleUrls: ['./comp-23.component.css']
})
export class Comp23Component implements OnInit {

  constructor(private _service: Service23Service) { }

  ngOnInit() {
  }

}
