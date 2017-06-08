/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service527Service } from '../../services/service-527.service';

@Component({
  selector: 'app-comp-527',
  templateUrl: './comp-527.component.html',
  styleUrls: ['./comp-527.component.css']
})
export class Comp527Component implements OnInit {

  constructor(private _service: Service527Service) { }

  ngOnInit() {
  }

}
