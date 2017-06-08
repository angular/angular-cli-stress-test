/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service739Service } from '../../services/service-739.service';

@Component({
  selector: 'app-comp-739',
  templateUrl: './comp-739.component.html',
  styleUrls: ['./comp-739.component.css']
})
export class Comp739Component implements OnInit {

  constructor(private _service: Service739Service) { }

  ngOnInit() {
  }

}
