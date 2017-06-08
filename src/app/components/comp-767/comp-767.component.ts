/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service767Service } from '../../services/service-767.service';

@Component({
  selector: 'app-comp-767',
  templateUrl: './comp-767.component.html',
  styleUrls: ['./comp-767.component.css']
})
export class Comp767Component implements OnInit {

  constructor(private _service: Service767Service) { }

  ngOnInit() {
  }

}
