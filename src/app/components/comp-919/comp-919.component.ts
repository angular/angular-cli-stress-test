/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service919Service } from '../../services/service-919.service';

@Component({
  selector: 'app-comp-919',
  templateUrl: './comp-919.component.html',
  styleUrls: ['./comp-919.component.css']
})
export class Comp919Component implements OnInit {

  constructor(private _service: Service919Service) { }

  ngOnInit() {
  }

}
