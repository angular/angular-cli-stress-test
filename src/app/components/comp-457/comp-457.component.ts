/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service457Service } from '../../services/service-457.service';

@Component({
  selector: 'app-comp-457',
  templateUrl: './comp-457.component.html',
  styleUrls: ['./comp-457.component.css']
})
export class Comp457Component implements OnInit {

  constructor(private _service: Service457Service) { }

  ngOnInit() {
  }

}
