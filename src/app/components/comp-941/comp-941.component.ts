/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service941Service } from '../../services/service-941.service';

@Component({
  selector: 'app-comp-941',
  templateUrl: './comp-941.component.html',
  styleUrls: ['./comp-941.component.css']
})
export class Comp941Component implements OnInit {

  constructor(private _service: Service941Service) { }

  ngOnInit() {
  }

}
