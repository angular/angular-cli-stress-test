/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service846Service } from '../../services/service-846.service';

@Component({
  selector: 'app-comp-846',
  templateUrl: './comp-846.component.html',
  styleUrls: ['./comp-846.component.css']
})
export class Comp846Component implements OnInit {

  constructor(private _service: Service846Service) { }

  ngOnInit() {
  }

}
