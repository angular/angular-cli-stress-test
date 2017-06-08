/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service522Service } from './service-522.service';

describe('Service522Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service522Service]
    });
  });

  it('should ...', inject([Service522Service], (service: Service522Service) => {
    expect(service).toBeTruthy();
  }));
});
