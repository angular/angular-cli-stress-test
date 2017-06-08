/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service722Service } from '../../services/service-722.service';

@Component({
  selector: 'app-comp-722',
  templateUrl: './comp-722.component.html',
  styleUrls: ['./comp-722.component.css']
})
export class Comp722Component implements OnInit {

  constructor(private _service: Service722Service) { }

  ngOnInit() {
  }

}
