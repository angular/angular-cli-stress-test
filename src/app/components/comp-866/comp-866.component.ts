/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service866Service } from '../../services/service-866.service';

@Component({
  selector: 'app-comp-866',
  templateUrl: './comp-866.component.html',
  styleUrls: ['./comp-866.component.css']
})
export class Comp866Component implements OnInit {

  constructor(private _service: Service866Service) { }

  ngOnInit() {
  }

}
