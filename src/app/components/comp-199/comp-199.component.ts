/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service199Service } from '../../services/service-199.service';

@Component({
  selector: 'app-comp-199',
  templateUrl: './comp-199.component.html',
  styleUrls: ['./comp-199.component.css']
})
export class Comp199Component implements OnInit {

  constructor(private _service: Service199Service) { }

  ngOnInit() {
  }

}
