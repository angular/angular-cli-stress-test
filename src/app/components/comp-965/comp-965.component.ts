/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service965Service } from '../../services/service-965.service';

@Component({
  selector: 'app-comp-965',
  templateUrl: './comp-965.component.html',
  styleUrls: ['./comp-965.component.css']
})
export class Comp965Component implements OnInit {

  constructor(private _service: Service965Service) { }

  ngOnInit() {
  }

}
