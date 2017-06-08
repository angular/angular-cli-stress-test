/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service33Service } from '../../services/service-33.service';

@Component({
  selector: 'app-comp-33',
  templateUrl: './comp-33.component.html',
  styleUrls: ['./comp-33.component.css']
})
export class Comp33Component implements OnInit {

  constructor(private _service: Service33Service) { }

  ngOnInit() {
  }

}
