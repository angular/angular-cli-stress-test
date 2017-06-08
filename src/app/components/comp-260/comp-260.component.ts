/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service260Service } from '../../services/service-260.service';

@Component({
  selector: 'app-comp-260',
  templateUrl: './comp-260.component.html',
  styleUrls: ['./comp-260.component.css']
})
export class Comp260Component implements OnInit {

  constructor(private _service: Service260Service) { }

  ngOnInit() {
  }

}
