/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service659Service } from '../../services/service-659.service';

@Component({
  selector: 'app-comp-659',
  templateUrl: './comp-659.component.html',
  styleUrls: ['./comp-659.component.css']
})
export class Comp659Component implements OnInit {

  constructor(private _service: Service659Service) { }

  ngOnInit() {
  }

}
