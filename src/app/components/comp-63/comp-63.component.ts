/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service63Service } from '../../services/service-63.service';

@Component({
  selector: 'app-comp-63',
  templateUrl: './comp-63.component.html',
  styleUrls: ['./comp-63.component.css']
})
export class Comp63Component implements OnInit {

  constructor(private _service: Service63Service) { }

  ngOnInit() {
  }

}
