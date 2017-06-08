/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service662Service } from '../../services/service-662.service';

@Component({
  selector: 'app-comp-662',
  templateUrl: './comp-662.component.html',
  styleUrls: ['./comp-662.component.css']
})
export class Comp662Component implements OnInit {

  constructor(private _service: Service662Service) { }

  ngOnInit() {
  }

}
