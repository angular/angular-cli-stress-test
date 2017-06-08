/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service977Service } from './service-977.service';

describe('Service977Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service977Service]
    });
  });

  it('should ...', inject([Service977Service], (service: Service977Service) => {
    expect(service).toBeTruthy();
  }));
});
