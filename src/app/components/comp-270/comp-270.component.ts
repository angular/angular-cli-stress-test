/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service270Service } from '../../services/service-270.service';

@Component({
  selector: 'app-comp-270',
  templateUrl: './comp-270.component.html',
  styleUrls: ['./comp-270.component.css']
})
export class Comp270Component implements OnInit {

  constructor(private _service: Service270Service) { }

  ngOnInit() {
  }

}
