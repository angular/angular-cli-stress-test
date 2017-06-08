/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service216Service } from '../../services/service-216.service';

@Component({
  selector: 'app-comp-216',
  templateUrl: './comp-216.component.html',
  styleUrls: ['./comp-216.component.css']
})
export class Comp216Component implements OnInit {

  constructor(private _service: Service216Service) { }

  ngOnInit() {
  }

}
