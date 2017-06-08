/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service369Service } from '../../services/service-369.service';

@Component({
  selector: 'app-comp-369',
  templateUrl: './comp-369.component.html',
  styleUrls: ['./comp-369.component.css']
})
export class Comp369Component implements OnInit {

  constructor(private _service: Service369Service) { }

  ngOnInit() {
  }

}
