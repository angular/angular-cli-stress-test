/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service615Service } from '../../services/service-615.service';

@Component({
  selector: 'app-comp-615',
  templateUrl: './comp-615.component.html',
  styleUrls: ['./comp-615.component.css']
})
export class Comp615Component implements OnInit {

  constructor(private _service: Service615Service) { }

  ngOnInit() {
  }

}
