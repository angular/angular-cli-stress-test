/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service704Service } from '../../services/service-704.service';

@Component({
  selector: 'app-comp-704',
  templateUrl: './comp-704.component.html',
  styleUrls: ['./comp-704.component.css']
})
export class Comp704Component implements OnInit {

  constructor(private _service: Service704Service) { }

  ngOnInit() {
  }

}
