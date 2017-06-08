/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service601Service } from './service-601.service';

describe('Service601Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service601Service]
    });
  });

  it('should ...', inject([Service601Service], (service: Service601Service) => {
    expect(service).toBeTruthy();
  }));
});
