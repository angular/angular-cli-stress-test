/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service441Service } from '../../services/service-441.service';

@Component({
  selector: 'app-comp-441',
  templateUrl: './comp-441.component.html',
  styleUrls: ['./comp-441.component.css']
})
export class Comp441Component implements OnInit {

  constructor(private _service: Service441Service) { }

  ngOnInit() {
  }

}
