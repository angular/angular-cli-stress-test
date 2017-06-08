/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service147Service } from '../../services/service-147.service';

@Component({
  selector: 'app-comp-147',
  templateUrl: './comp-147.component.html',
  styleUrls: ['./comp-147.component.css']
})
export class Comp147Component implements OnInit {

  constructor(private _service: Service147Service) { }

  ngOnInit() {
  }

}
