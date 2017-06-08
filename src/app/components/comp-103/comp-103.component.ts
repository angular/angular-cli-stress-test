/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service103Service } from '../../services/service-103.service';

@Component({
  selector: 'app-comp-103',
  templateUrl: './comp-103.component.html',
  styleUrls: ['./comp-103.component.css']
})
export class Comp103Component implements OnInit {

  constructor(private _service: Service103Service) { }

  ngOnInit() {
  }

}
