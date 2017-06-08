/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service609Service } from '../../services/service-609.service';

@Component({
  selector: 'app-comp-609',
  templateUrl: './comp-609.component.html',
  styleUrls: ['./comp-609.component.css']
})
export class Comp609Component implements OnInit {

  constructor(private _service: Service609Service) { }

  ngOnInit() {
  }

}
