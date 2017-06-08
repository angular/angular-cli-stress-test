/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service903Service } from '../../services/service-903.service';

@Component({
  selector: 'app-comp-903',
  templateUrl: './comp-903.component.html',
  styleUrls: ['./comp-903.component.css']
})
export class Comp903Component implements OnInit {

  constructor(private _service: Service903Service) { }

  ngOnInit() {
  }

}
