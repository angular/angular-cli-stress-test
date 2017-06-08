/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service551Service } from '../../services/service-551.service';

@Component({
  selector: 'app-comp-551',
  templateUrl: './comp-551.component.html',
  styleUrls: ['./comp-551.component.css']
})
export class Comp551Component implements OnInit {

  constructor(private _service: Service551Service) { }

  ngOnInit() {
  }

}
