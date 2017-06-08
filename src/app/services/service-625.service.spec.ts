/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service625Service } from './service-625.service';

describe('Service625Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service625Service]
    });
  });

  it('should ...', inject([Service625Service], (service: Service625Service) => {
    expect(service).toBeTruthy();
  }));
});
