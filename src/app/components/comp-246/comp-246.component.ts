/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service246Service } from '../../services/service-246.service';

@Component({
  selector: 'app-comp-246',
  templateUrl: './comp-246.component.html',
  styleUrls: ['./comp-246.component.css']
})
export class Comp246Component implements OnInit {

  constructor(private _service: Service246Service) { }

  ngOnInit() {
  }

}
