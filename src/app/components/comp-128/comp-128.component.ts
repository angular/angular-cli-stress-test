/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service128Service } from '../../services/service-128.service';

@Component({
  selector: 'app-comp-128',
  templateUrl: './comp-128.component.html',
  styleUrls: ['./comp-128.component.css']
})
export class Comp128Component implements OnInit {

  constructor(private _service: Service128Service) { }

  ngOnInit() {
  }

}
