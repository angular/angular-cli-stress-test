/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service732Service } from '../../services/service-732.service';

@Component({
  selector: 'app-comp-732',
  templateUrl: './comp-732.component.html',
  styleUrls: ['./comp-732.component.css']
})
export class Comp732Component implements OnInit {

  constructor(private _service: Service732Service) { }

  ngOnInit() {
  }

}
