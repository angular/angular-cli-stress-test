/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service785Service } from '../../services/service-785.service';

@Component({
  selector: 'app-comp-785',
  templateUrl: './comp-785.component.html',
  styleUrls: ['./comp-785.component.css']
})
export class Comp785Component implements OnInit {

  constructor(private _service: Service785Service) { }

  ngOnInit() {
  }

}
