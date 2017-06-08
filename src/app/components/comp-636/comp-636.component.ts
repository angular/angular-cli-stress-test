/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service636Service } from '../../services/service-636.service';

@Component({
  selector: 'app-comp-636',
  templateUrl: './comp-636.component.html',
  styleUrls: ['./comp-636.component.css']
})
export class Comp636Component implements OnInit {

  constructor(private _service: Service636Service) { }

  ngOnInit() {
  }

}
