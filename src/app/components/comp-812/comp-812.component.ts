/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service812Service } from '../../services/service-812.service';

@Component({
  selector: 'app-comp-812',
  templateUrl: './comp-812.component.html',
  styleUrls: ['./comp-812.component.css']
})
export class Comp812Component implements OnInit {

  constructor(private _service: Service812Service) { }

  ngOnInit() {
  }

}
