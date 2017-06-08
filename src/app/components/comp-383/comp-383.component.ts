/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service383Service } from '../../services/service-383.service';

@Component({
  selector: 'app-comp-383',
  templateUrl: './comp-383.component.html',
  styleUrls: ['./comp-383.component.css']
})
export class Comp383Component implements OnInit {

  constructor(private _service: Service383Service) { }

  ngOnInit() {
  }

}
