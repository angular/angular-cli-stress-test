/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service385Service } from './service-385.service';

describe('Service385Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service385Service]
    });
  });

  it('should ...', inject([Service385Service], (service: Service385Service) => {
    expect(service).toBeTruthy();
  }));
});
