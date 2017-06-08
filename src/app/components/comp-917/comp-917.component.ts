/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service917Service } from '../../services/service-917.service';

@Component({
  selector: 'app-comp-917',
  templateUrl: './comp-917.component.html',
  styleUrls: ['./comp-917.component.css']
})
export class Comp917Component implements OnInit {

  constructor(private _service: Service917Service) { }

  ngOnInit() {
  }

}
