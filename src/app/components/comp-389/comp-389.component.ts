/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service389Service } from '../../services/service-389.service';

@Component({
  selector: 'app-comp-389',
  templateUrl: './comp-389.component.html',
  styleUrls: ['./comp-389.component.css']
})
export class Comp389Component implements OnInit {

  constructor(private _service: Service389Service) { }

  ngOnInit() {
  }

}
