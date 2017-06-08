/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service478Service } from '../../services/service-478.service';

@Component({
  selector: 'app-comp-478',
  templateUrl: './comp-478.component.html',
  styleUrls: ['./comp-478.component.css']
})
export class Comp478Component implements OnInit {

  constructor(private _service: Service478Service) { }

  ngOnInit() {
  }

}
