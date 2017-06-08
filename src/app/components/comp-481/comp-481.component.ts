/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service481Service } from '../../services/service-481.service';

@Component({
  selector: 'app-comp-481',
  templateUrl: './comp-481.component.html',
  styleUrls: ['./comp-481.component.css']
})
export class Comp481Component implements OnInit {

  constructor(private _service: Service481Service) { }

  ngOnInit() {
  }

}
