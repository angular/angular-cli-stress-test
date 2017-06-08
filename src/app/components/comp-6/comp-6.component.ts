/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service6Service } from '../../services/service-6.service';

@Component({
  selector: 'app-comp-6',
  templateUrl: './comp-6.component.html',
  styleUrls: ['./comp-6.component.css']
})
export class Comp6Component implements OnInit {

  constructor(private _service: Service6Service) { }

  ngOnInit() {
  }

}
