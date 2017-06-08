/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service600Service } from '../../services/service-600.service';

@Component({
  selector: 'app-comp-600',
  templateUrl: './comp-600.component.html',
  styleUrls: ['./comp-600.component.css']
})
export class Comp600Component implements OnInit {

  constructor(private _service: Service600Service) { }

  ngOnInit() {
  }

}
