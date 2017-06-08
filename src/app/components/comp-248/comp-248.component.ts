/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service248Service } from '../../services/service-248.service';

@Component({
  selector: 'app-comp-248',
  templateUrl: './comp-248.component.html',
  styleUrls: ['./comp-248.component.css']
})
export class Comp248Component implements OnInit {

  constructor(private _service: Service248Service) { }

  ngOnInit() {
  }

}
