/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service414Service } from '../../services/service-414.service';

@Component({
  selector: 'app-comp-414',
  templateUrl: './comp-414.component.html',
  styleUrls: ['./comp-414.component.css']
})
export class Comp414Component implements OnInit {

  constructor(private _service: Service414Service) { }

  ngOnInit() {
  }

}
