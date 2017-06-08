/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service461Service } from './service-461.service';

describe('Service461Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service461Service]
    });
  });

  it('should ...', inject([Service461Service], (service: Service461Service) => {
    expect(service).toBeTruthy();
  }));
});
