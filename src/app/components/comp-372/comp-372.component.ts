/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service372Service } from '../../services/service-372.service';

@Component({
  selector: 'app-comp-372',
  templateUrl: './comp-372.component.html',
  styleUrls: ['./comp-372.component.css']
})
export class Comp372Component implements OnInit {

  constructor(private _service: Service372Service) { }

  ngOnInit() {
  }

}
