/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service78Service } from '../../services/service-78.service';

@Component({
  selector: 'app-comp-78',
  templateUrl: './comp-78.component.html',
  styleUrls: ['./comp-78.component.css']
})
export class Comp78Component implements OnInit {

  constructor(private _service: Service78Service) { }

  ngOnInit() {
  }

}
