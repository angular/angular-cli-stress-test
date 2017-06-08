/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service507Service } from '../../services/service-507.service';

@Component({
  selector: 'app-comp-507',
  templateUrl: './comp-507.component.html',
  styleUrls: ['./comp-507.component.css']
})
export class Comp507Component implements OnInit {

  constructor(private _service: Service507Service) { }

  ngOnInit() {
  }

}
