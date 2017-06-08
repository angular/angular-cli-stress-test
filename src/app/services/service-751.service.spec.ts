/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service751Service } from './service-751.service';

describe('Service751Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service751Service]
    });
  });

  it('should ...', inject([Service751Service], (service: Service751Service) => {
    expect(service).toBeTruthy();
  }));
});
