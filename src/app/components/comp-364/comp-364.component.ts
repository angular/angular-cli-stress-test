/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service364Service } from '../../services/service-364.service';

@Component({
  selector: 'app-comp-364',
  templateUrl: './comp-364.component.html',
  styleUrls: ['./comp-364.component.css']
})
export class Comp364Component implements OnInit {

  constructor(private _service: Service364Service) { }

  ngOnInit() {
  }

}
