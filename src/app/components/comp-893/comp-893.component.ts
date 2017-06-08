/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service893Service } from '../../services/service-893.service';

@Component({
  selector: 'app-comp-893',
  templateUrl: './comp-893.component.html',
  styleUrls: ['./comp-893.component.css']
})
export class Comp893Component implements OnInit {

  constructor(private _service: Service893Service) { }

  ngOnInit() {
  }

}
