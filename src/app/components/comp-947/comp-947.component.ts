/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service947Service } from '../../services/service-947.service';

@Component({
  selector: 'app-comp-947',
  templateUrl: './comp-947.component.html',
  styleUrls: ['./comp-947.component.css']
})
export class Comp947Component implements OnInit {

  constructor(private _service: Service947Service) { }

  ngOnInit() {
  }

}
