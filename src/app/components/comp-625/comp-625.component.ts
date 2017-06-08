/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service625Service } from '../../services/service-625.service';

@Component({
  selector: 'app-comp-625',
  templateUrl: './comp-625.component.html',
  styleUrls: ['./comp-625.component.css']
})
export class Comp625Component implements OnInit {

  constructor(private _service: Service625Service) { }

  ngOnInit() {
  }

}
