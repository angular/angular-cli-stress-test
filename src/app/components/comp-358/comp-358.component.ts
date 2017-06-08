/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service358Service } from '../../services/service-358.service';

@Component({
  selector: 'app-comp-358',
  templateUrl: './comp-358.component.html',
  styleUrls: ['./comp-358.component.css']
})
export class Comp358Component implements OnInit {

  constructor(private _service: Service358Service) { }

  ngOnInit() {
  }

}
