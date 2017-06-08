/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service261Service } from '../../services/service-261.service';

@Component({
  selector: 'app-comp-261',
  templateUrl: './comp-261.component.html',
  styleUrls: ['./comp-261.component.css']
})
export class Comp261Component implements OnInit {

  constructor(private _service: Service261Service) { }

  ngOnInit() {
  }

}
