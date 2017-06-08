/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service425Service } from '../../services/service-425.service';

@Component({
  selector: 'app-comp-425',
  templateUrl: './comp-425.component.html',
  styleUrls: ['./comp-425.component.css']
})
export class Comp425Component implements OnInit {

  constructor(private _service: Service425Service) { }

  ngOnInit() {
  }

}
