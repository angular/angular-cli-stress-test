/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service997Service } from '../../services/service-997.service';

@Component({
  selector: 'app-comp-997',
  templateUrl: './comp-997.component.html',
  styleUrls: ['./comp-997.component.css']
})
export class Comp997Component implements OnInit {

  constructor(private _service: Service997Service) { }

  ngOnInit() {
  }

}
