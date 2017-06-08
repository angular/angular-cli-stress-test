/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service416Service } from '../../services/service-416.service';

@Component({
  selector: 'app-comp-416',
  templateUrl: './comp-416.component.html',
  styleUrls: ['./comp-416.component.css']
})
export class Comp416Component implements OnInit {

  constructor(private _service: Service416Service) { }

  ngOnInit() {
  }

}
