/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service530Service } from './service-530.service';

describe('Service530Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service530Service]
    });
  });

  it('should ...', inject([Service530Service], (service: Service530Service) => {
    expect(service).toBeTruthy();
  }));
});
