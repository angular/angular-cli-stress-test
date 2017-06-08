/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service197Service } from './service-197.service';

describe('Service197Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service197Service]
    });
  });

  it('should ...', inject([Service197Service], (service: Service197Service) => {
    expect(service).toBeTruthy();
  }));
});
