/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service111Service } from '../../services/service-111.service';

@Component({
  selector: 'app-comp-111',
  templateUrl: './comp-111.component.html',
  styleUrls: ['./comp-111.component.css']
})
export class Comp111Component implements OnInit {

  constructor(private _service: Service111Service) { }

  ngOnInit() {
  }

}
