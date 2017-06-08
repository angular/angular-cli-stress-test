/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service716Service } from '../../services/service-716.service';

@Component({
  selector: 'app-comp-716',
  templateUrl: './comp-716.component.html',
  styleUrls: ['./comp-716.component.css']
})
export class Comp716Component implements OnInit {

  constructor(private _service: Service716Service) { }

  ngOnInit() {
  }

}
