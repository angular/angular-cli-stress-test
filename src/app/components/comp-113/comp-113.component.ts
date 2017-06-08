/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service113Service } from '../../services/service-113.service';

@Component({
  selector: 'app-comp-113',
  templateUrl: './comp-113.component.html',
  styleUrls: ['./comp-113.component.css']
})
export class Comp113Component implements OnInit {

  constructor(private _service: Service113Service) { }

  ngOnInit() {
  }

}
