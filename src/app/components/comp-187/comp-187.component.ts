/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service187Service } from '../../services/service-187.service';

@Component({
  selector: 'app-comp-187',
  templateUrl: './comp-187.component.html',
  styleUrls: ['./comp-187.component.css']
})
export class Comp187Component implements OnInit {

  constructor(private _service: Service187Service) { }

  ngOnInit() {
  }

}
