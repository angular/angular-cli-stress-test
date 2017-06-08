/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service530Service } from '../../services/service-530.service';

@Component({
  selector: 'app-comp-530',
  templateUrl: './comp-530.component.html',
  styleUrls: ['./comp-530.component.css']
})
export class Comp530Component implements OnInit {

  constructor(private _service: Service530Service) { }

  ngOnInit() {
  }

}
